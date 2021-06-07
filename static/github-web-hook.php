<?php

deploy('hugo');

function deploy($type)
{
    if (!isValid()) {
       return false;
    }
    system("git -C ../app pull -f 2>../log/last_git_pull_stderr.log >../log/last_git_pull_stdout.log", $pullError);
    if ($pullError) {
        return false;
    }
    if ($type == 'hugo') {
        system("hugo -s ../app -d ../public_html 2>../log/last_hugo_stderr.log >../log/last_hugo_stdout.log", $hugoError);
        if ($hugoError) {
            return false;
        }
    }
    return true;
}

function isValid()
{
    $signature = @$_SERVER['HTTP_X_HUB_SIGNATURE'];
    $event = @$_SERVER['HTTP_X_GITHUB_EVENT'];
    $delivery = @$_SERVER['HTTP_X_GITHUB_DELIVERY'];
    $secret  = getenv('GITHUB_WEB_HOOK_SECRET');

    if (!isset($signature, $event, $delivery)) {
        return false;
    }

    $payload = file_get_contents('php://input');

    list ($algo, $sighash) = explode("=", $signature);

    if ($algo !== 'sha1') {
        // see https://developer.github.com/webhooks/securing/
        return false;
    }

    $hash = hash_hmac($algo, $payload, $secret);
    
    if ($hash != $sighash) {
        return false;
    }

    $data = json_decode($payload,true);

    if ($data === null) {
        return false;
    }

    return true;
}

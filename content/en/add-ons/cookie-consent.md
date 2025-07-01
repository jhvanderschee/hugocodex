---
title: Cookie consent
---

### Introduction

To be compliant with the GDPR, you have to have user consent for all non-functional and third party cookies and scripts. This can be done by adding this 'cookie consent banner' to the footer of the website. This banner gives you a detailed overview and fine grained control over the scripts that are loaded.

### How it works

The code inserts a consent banner at the bottom of the screen. When you click 'Deny', 'Allow', 'Allow all' or 'Save preferences' it creates a cookie that is valid for 31 days. Each page load the code checks for the existence of this cookie. If it exists, it will check which scripts are allowed. If it does not exist, the page will only load the functional scripts. Scripts are managed in a 'consent.yaml' file in the data directory. Visitors can set or review their consent by clicking on a link with a 'manage-consent' class, like this one: <a class="manage-consent" href="#manage-consent">manage consent</a>. Hint: place at least one of these links in the footer of your website. Do you want to reset the behaviour of this banner? Remove the 'consent-settings' cookie in your browser, or press this <a href="#" onclick="eraseCookie('consent-settings'); location.reload();">reset link</a>.

Here you can see what the 'consent.yaml' looks like: 

```
items:
  - title: Google Anaytics (functional)
    description: This code gives us insight into the number of people that visit our website, where they are from and what they are clicking on.
    is_functional: true
    script_file: ga.js
  - title: Crisp chat
    description: This code gives users the option to chat directly with us through a chat box in the bottom right corner.
    is_functional: false
    script_file: crisp.js
```

### Installation

Step 1. Download the [consent.yaml](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/data/consent.yaml) file and adjust it to your needs
<br />Step 2. Store it in the 'data' directory of your project
<br />Step 3. Make sure the script files live in your 'static/js' folder
<br />Step 4. Download the file [consent.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/_partials/consent.html)
<br />Step 5. Save the file in the 'layouts/_partials' directory of your project
<br />Step 6. Make sure the bottom of your layout document looks like this:

```
...
{{ partial "consent.html" . }}
</body>
</html>
```
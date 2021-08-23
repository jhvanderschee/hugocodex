---
title: Cookie consent
---

### Introduction

To be compliant with the GDPR, you have to have user consent for all non-functional and third pary cookies and scripts. This script allows you to delay the loading of certain Javascript includes, until the user clicks on 'Accept all' in a consent banner. The script allows fine grained control over the scripts.

### How it works

The code inserts a consent banner at the bottom of the screen. When you click 'Accept all' or 'Save preferences' it creates a cookie that is valid for 31 days. Each page load the code checks for the existence of this cookie. If it exists (and the value is 'true'), the blocked scripts are loaded. You can manage your consent afterwards by clickin on a link with a 'manage-consent' class, like this: <a class="manage-consent">manage consent</a>. Use this link in the footer of your website to enable people to review their choices.

### Installation

Step 1. Download the file [consent.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/partials/consent.html)
<br />Step 2. Save the file in the 'layouts/partials' directory of your project
<br />Step 3. Make sure the bottom of your layout document looks like this:

```
...
{{ partial "consent.html" . }}
</body>
</html>
```
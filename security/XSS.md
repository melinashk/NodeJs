## cross site scripting attacks

it is a attack pattern wherte malicious Js code gets inbjected and execxuted

injected code can do anything your code can do as well

XSS (Cross-Site Scripting) is a type of security vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users. When an unsuspecting user views the infected page, the malicious script can execute in their browser, potentially stealing their sensitive information or performing other malicious actions on their behalf.

```js
var username = prompt("Please enter your username:");
document.write("Welcome, " + username + "!");
```
lets see the above example where the code asks for the user input.
if the input the user gives contains a script
then the code might malfunction
```js
<script> alert("You've been hacked!"); </script>
```
The script will be executed in the victim's browser when the web page is loaded, potentially compromising their security.

To prevent XSS attacks, it's important to always sanitize user input before displaying it on a web page. This can be done using a variety of techniques, such as encoding special characters, validating input using regular expressions, and using security libraries and frameworks.
sanitizing user input
using th esanitizeHtml npm package
```js
headerTitle = sanitizeHtml(address);
```
using the sanitizeHtml we can prevent XSS
### third party and XSS

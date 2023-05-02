## cookies
A cookie is a small piece of data that a website stores on a user's computer or device. Cookies are typically used to remember user preferences, login information, and other data that can help improve the user experience on a website.

A development server is typically used when developing and testing a website or web application. It allows developers to preview changes and test functionality in a controlled environment before deploying to a production server.

When it comes to cookies, a development server is important because cookies are typically set and read by server-side code. This means that if you're developing a website that uses cookies, you'll need a development server to test and debug your cookie-related code.

For example, you may need to test whether your website is correctly setting a cookie when a user logs in or whether the cookie is being read correctly when the user navigates to a different page on the site. Without a development server, it would be difficult to test these types of scenarios.



we can access cookies using
document.cookie
```js
const userId = 'u123'
document.cookie = `uid=${userID}`
```


## Example 1: Simple usage
```js
// Note that we are setting `SameSite=None;` in this example because the example
// needs to work cross-origin.
// It is more common not to set the `SameSite` attribute, which results in the default,
// and more secure, value of `SameSite=Lax;`
document.cookie = "name=oeschger; SameSite=None; Secure";
document.cookie = "favorite_food=tripe; SameSite=None; Secure";

function showCookies() {
  const output = document.getElementById("cookies");
  output.textContent = `> ${document.cookie}`;
}

function clearOutputCookies() {
  const output = document.getElementById("cookies");
  output.textContent = "";
}

```

Example 2: Get a sample cookie named test2
```js
// Note that we are setting `SameSite=None;` in this example because the example
// needs to work cross-origin.
// It is more common not to set the `SameSite` attribute, which results in the default,
// and more secure, value of `SameSite=Lax;`
document.cookie = "test1=Hello; SameSite=None; Secure";
document.cookie = "test2=World; SameSite=None; Secure";

const cookieValue = document.cookie
  .split("; ")
  .find((row) => row.startsWith("test2="))
  ?.split("=")[1];

function showCookieValue() {
  const output = document.getElementById("cookie-value");
  output.textContent = `> ${cookieValue}`;
}

function clearOutputCookieValue() {
  const output = document.getElementById("cookie-value");
  output.textContent = "";
}

```
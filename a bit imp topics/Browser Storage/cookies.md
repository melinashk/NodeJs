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
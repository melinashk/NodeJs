

### location
The location object contains information about the current URL of the page, such as the protocol, host, pathname, and search parameters. You can access this information using properties of the location object, such as location.protocol, location.host, and location.pathname.

redirecting user to a new page
```js
location.href = "https://example.com";
```
The location.replace() method replaces the current page in the browser's history with the new page, so the user cannot navigate back to the previous page using the browser's back button

```js
location.replace("https://example.com");
```

The location.assign() method, on the other hand, adds the new page to the browser's history, so the user can navigate back to the previous page using the browser's back button. This method is useful when you want to redirect the user to a new page but still allow them to go back to the previous page if needed.

```js
location.assign("https://example.com");

```

### history

The history object, on the other hand, provides access to the user's browsing history, such as the current state of the browser's back and forward buttons. You can use methods of the history object, such as history.back() and history.forward(), to navigate backwards and forwards through the user's browsing history.

```js
history.back();

```

### navigator

The navigator object in JavaScript is part of the Web APIs and provides information about the user's web browser and operating system. You can use properties and methods of the navigator object to detect features and capabilities of the user's environment, and adjust your web application accordingly.

navigator.userAgent: Returns the info about browser and OS

navigator.language: returns users perfered language

navigator.cookieEnabled : return boolean if cookies enabled or not

/// some of the commonly used methods in navigator object

navigator.geolocation.getCurrentPosition(): Retrieves the user's current geographic location, if the user consents to share it.

navigator.mediaDevices.getUserMedia(): Prompts the user for permission to access their camera and microphone, and returns a stream of media data if the user consents.


navigator.clipboard.writeText(): Writes a string to the system clipboard, if the user consents.

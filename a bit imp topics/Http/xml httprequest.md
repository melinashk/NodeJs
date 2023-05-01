## get request

create a new xml httprequest object

open connection bt specifying the request type and endpoint

send the requeswt

listen for the server's response

```js
const xhr = new XMLHttpRequest();
xhr.open("get","the link ")
xhr.send();
xhr.responseType = 'json';
```


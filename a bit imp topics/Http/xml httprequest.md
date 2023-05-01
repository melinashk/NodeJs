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

after sending the request we want to listen for the server's response

XML doesnot always support addEventListener() meaning older browser doesnot support that
```js
xhr.onload = function(){
    console.log(xhr.response)
}


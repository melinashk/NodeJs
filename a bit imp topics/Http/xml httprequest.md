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
```

Get request

to get a request we need to define a get method along with the api
similarly for a post rquest but we have to attach data to post to the server

lets see an example of them in the code below
 first lets create a funciton where we establish connection to the server
 creating new object 
 open connections

 ```js
 function sendHttpRequest(method, url, data){
    const promise = new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);


        xhr.responseType ='json'
        xhr.onload = function(){

            resolve(xhr.response);
         }
        
        xhr.send(JSON.stringify(data))
    })
    return promise;
}
```
in the code above we have defined a sendhttprequest function that takes s method and the url
we used promise to see the resolve or reject promise when establishing the connection

after that to request GET request from the server 
we use a async await function 
```js
async function fetchPosts() {
    const responseData = await sendHttpRequest('GET','https://jsonplaceholder.typicode.com/posts');

        
    const listOfPosts = responseData
    for(const post of listOfPosts){
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector('h2').textContent = post.title.toUpperCase();
        postEl.querySelector('p').textContent = post.body
        listElement.append(postEl)
        console.log('hello world 1')
    }
}
```

not to create post
we attach data to the send() method to the server
```js
async function createPost(title,content){
    const postId = Math.random();
    const post = {
        title: title,
        body: content,
        userId: postId
    }
    sendHttpRequest('POST',"https://jsonplaceholder.typicode.com/posts",post)
}
```
handling error in the http request

the error will not kick in for the server side error but only for the client side 
to use the error we can use a mthod called
```js
         xhr.onerror = function(){
            console.log(xhr.response)
            console.log(xhr.status)
         }
        
```
the status will display the status code for the error
404 server not found

other way we can handel the error is
```js
        xhr.onload = function(){

            if(xhr.status >=200 && xhr.status< 300){
                resolve(xhr.response);

            }else{
                reject(new Error('something went wrong'));
            }


         }
         xhr.onerror = function(){
            reject(new Error('!failed to send request'));
         }
```
this will stay on onload and only go to the other error when other types of error like no internet conncection or things like that.

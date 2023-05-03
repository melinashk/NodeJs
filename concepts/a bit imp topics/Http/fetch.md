there is a fetch method(newly added to the browsers and dont support on IE)
it is a self promise method which by default handels resolve and reject method



In the context of the Fetch API, streamed data refers to the ability to progressively receive chunks of data from a server as it becomes available, instead of waiting for the entire response to be available before processing it. This can be useful in scenarios where the response data is too large to be held in memory all at once or when you want to start processing the response as soon as possible.


if we pass one argument to the fetch method it works as a GET method
```js
fetch(url)
```
to convert the response to json format we can use then method with the response object of the then mehod
```js
    return fetch(url).then(response =>{
        return response.json();

    })
```

for other methods like post delete and owther methods
the fetch takes 2 arguments
second one is the method

we need to convert the json file before posting it toi the server
```js
    return fetch(url,{
        method: method,
        body: JSON.stringify(data)
    }).then(response =>{
        return response.json();

    })
```
## example of fetch

```js



const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button ');
const postList = document.querySelector('ul')


async function sendHttpRequest(method, url, data){

    return fetch(url,{
        method: method,
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response =>{
        if(response.status >=200 && response.status< 300){
        return response.json();
        }else{
            return response.json().then(errData =>{
                console.log(errData);
                throw new Error('something went wrong server side');
            })
           
        }


    }).catch(error =>{
        console.log(error);
        throw new Error('something went wrong')
    })
}

async function fetchPosts() {
    const responseData = await sendHttpRequest('GET','https://jsonplaceholder.typicode.com/posts');

        
    const listOfPosts = responseData
    for(const post of listOfPosts){
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector('h2').textContent = post.title.toUpperCase();
        postEl.querySelector('p').textContent = post.body
        postEl.querySelector('li').id = post.id;
        listElement.append(postEl)
        console.log('hello world 1')
    }
}

async function createPost(title,content){
    const postId = Math.random();
    const post = {
        title: title,
        body: content,
        userId: postId
    }
    sendHttpRequest('POST',"https://jsonplaceholder.typicode.com/posts",post)
}

fetchButton.addEventListener('click', fetchPosts);
form.addEventListener('submit',event=>{
    event.preventDefault();
    const enteredTitle = event.currentTarget.querySelector('#title').value
    const enteredContent = event.currentTarget.querySelector('#content').value;
    createPost(enteredTitle, enteredContent);
})

postList.addEventListener('click',event =>{
    if(event.target.tagName ==='BUTTON'){
        console.log('clicked on the button')
        const postId = event.target.closest('li').id;
        console.log(postId)
        sendHttpRequest('DELETE',`https://jsonplaceholder.typicode.com/posts/${postId}`)
    }
})
```
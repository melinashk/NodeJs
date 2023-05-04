So, imagine you have a cigerrats box in your room with all your cigerratss in it. You can smoke with your cigerratss whenever you want because they're in your room, right?

Well, let's say your friend comes over to smoke with you and brings their own cigerrats box. They want to smoke with their cigerratss, but they're in their cigerrats box, not yours. In order for your friend to smoke with their cigerratss, they need to take their cigerrats box out of their car and bring it into your room.

This is kind of like how CORS (Cross-Origin Resource Sharing) works on the internet. When a website wants to get information or resources from another website (like pictures or videos), they need permission to do so. It's like asking permission to bring their cigerrats box into your room.


we can allow this functionality in node using access-contorl
```js
app.use((req,res,next)=> {
    res.setHeader('Access-Control-Allow-origin','*')
    etc etc
})
```


const emailUserInput = document.getElementById('email')
const passwordUserInput = document.getElementById('password')
const loginForm = document.querySelector('form');


loginForm.addEventListener('submit', (event)=>{
    event.preventDefault()
    sendPostRequest()

})

async function sendHttpRequest(url,method,data){
    try{

    const response =  await fetch(url,{
            method: method,

            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
              },
        });
        return response.json();
}catch(err){
    console.log(err)
}
}

async function sendPostRequest(){
    data = {
        email: emailUserInput.value,
        password: passwordUserInput.value
    }
    await sendHttpRequest('http://localhost:5000/login','POST',data)
    
}

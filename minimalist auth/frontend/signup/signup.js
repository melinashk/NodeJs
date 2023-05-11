const newUserFirstName = document.getElementById('firstname')
const newUserLastName = document.getElementById('lastname')
const newUserEmail = document.getElementById('email')
const newUserpassword = document.getElementById('password')
const submitBtn = document.querySelector('form')


submitBtn.addEventListener('submit', (event)=>{
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
        firstName: newUserFirstName.value,
        lastName : newUserLastName.value,
        email: newUserEmail.value,
        password: newUserpassword.value
    }
    await sendHttpRequest('http://localhost:5000/register','POST',data)
    
}

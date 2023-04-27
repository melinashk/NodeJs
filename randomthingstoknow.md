```js
function productDescription(string,productDesc,prodPrice){
    console.log(sting);
    console.log(prodcutDesc);
    console.log(prodPrice);

}

desc = "javascript"
price = 200

const productOutput = productDescription`This is ${desc} and ${price} end of line`

console.log(productOutput)
```
in the code above we made a fucntion that takes 3 argument as parameter.
then we call the function passing sting `` between this with 2 variables desc and price
now the string is passed as an array to the first argument and the two variable in between as second and third.

the string is then converted to array with elements broken by the 2nd and 3rd variables.

### regular expression
```js
const userInput = "testtest.com"
userInput.includes('@')
userInput.includes('.')
```
the dot includes method returns either true or false if the values incldues in the string or not

#### regular expression in js helps us search fot patterns

```js
const regex = /^/$+@\S+\.\S+$/

regex.test(userInput)
regex.test('test@test.com')
```
now the above code checks whether the user input pass the regular expression or not

the regular epxression is 
. anyword before @
.anyword after @ and before dot
. any word before dot

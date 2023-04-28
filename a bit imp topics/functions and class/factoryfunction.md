### Factory function

here the calculateTax function is inside createTaxCalculator
the createTaxCalculator can take tax as a parameter and can be used in the inner function as well

we then return a pointer of the function inside
so when we call the outer function and assign to a variable the pointer is assigned


```js

function createTaxCalculator(tax){
    function calculateTax(amount){
        return amount * tax;
    }
    return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

//now we donnot need to pass on the tax amonunt again and again 
console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));
```

when you assign a function to a variable like calculateVatAmount = createTaxCalculator(0.19), you can use that variable as a function, just as you would use the original function itself.

In this case, calculateVatAmount is assigned the function returned by createTaxCalculator when it is called with a tax rate of 0.19. The resulting function takes an amount as its input, and returns the VAT amount that should be paid on that amount, using the tax rate of 0.19.

When you call calculateVatAmount(100), for example, you are effectively calling the function that was returned by createTaxCalculator, passing in the value 100 as its argument. This calculates the VAT amount that should be paid on 100, using the tax rate of 0.19, and returns the result (in this case, 19).


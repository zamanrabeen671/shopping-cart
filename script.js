function handleProductChange(product, isincrease) {
    const productInput = document.getElementById(product + '-count');
    var productCount = parseInt(productInput.value);
    let Counter = productCount;
    if (isincrease == true) {
       Counter++;
    }
    else {
       if (Counter > 0) {
          Counter--;
       }

    }
    productInput.value = Counter;
    //const ToTal = Counter * 59;
    let productTotal = 0;
    if (product == 'phone') {
       productTotal = Counter * 1219;
    }
    if (product == 'case') {
       productTotal = Counter * 59;
    }
    document.getElementById(product + '-total').innerText = '$' + productTotal;
    calculateTotal();
 }
 function calculateTotal() {
    const phoneCount = getInputValue('phone');
    const caseCount = getInputValue('case');
    const totalPrice = phoneCount * 1219 + caseCount * 59;
    document.getElementById('total-price').innerText = '$' + totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = '$' + tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = '$' + grandTotal;

 }
 function getInputValue(product) {
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    return productCount;
 }
 function removeHandler(product) {
    let elem = document.getElementById('-remove');
    elem.parentNode.removeChild(elem);
 }
  // document.getElementById('case-increase').addEventListener('click',function() {
 //    const plusInput = document.getElementById('case-count');
 //    var pluscount = parseInt(plusInput.value);
 //    pluscount++;
 //    plusInput.value = pluscount;
 //    let caseTotal = pluscount * 59;
 //    document.getElementById('case-total').innerText = '$' + caseTotal;
 // });

 // document.getElementById('case-decrease').addEventListener('click', function() {
 //    const minusInput = document.getElementById('case-count');
 //    var caseminuscount = parseInt(minusInput.value);
 //    caseminuscount--;
 //    minusInput.value = caseminuscount;
 //    const caseToTal = caseminuscount * 59;
 //    document.getElementById('case-total').innerText = '$'+caseToTal;


 // })
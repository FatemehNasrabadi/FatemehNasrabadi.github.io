function calculate_discount(price,discount){ //مدل اول
    var math =(discount-100)/-100;
    var result = Math.ceil(price*math)
    return result;
}
function calculate_discount2(pricee,discountt){ //مدل دوم
    var discount_price = pricee*(discountt/100)
    var result = pricee-discountt
    return result;

}

var p = parseInt(prompt('enter price')) 
var d = parseInt(prompt('enter discount')) 
if(isNaN(p)){
    alert('price is not number')
}
if(isNaN(d)){
    alert('discount is not number')
}
var elDiscount = document.querySelector('.cours-header span');
var elPrice = document.querySelector('.cours-footer del');
var elFinalprice = document.querySelector('.cours-footer ins strong');
var FinalPrice = calculate_discount(p,d);
elDiscount.innerHTML = d +'%تخفیف';
elPrice.innerHTML = p;
elFinalprice.innerHTML = FinalPrice;
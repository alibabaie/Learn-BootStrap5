// Bootstrap tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// slider2 & gallery-modal

document.addEventListener('click',function(e){
    if(e.target.classList.contains("img-slider2")){
       const src = e.target.getAttribute("src");
       document.querySelector("#img-slider2-big").src = src ;
    }
    else 
    if(e.target.classList.contains("img-gallery")) {
        const src = e.target.getAttribute("src");
        document.querySelector("#img-gallery-modal").src = src ;
        const myModal = new bootstrap.Modal(document.getElementById('myModal'));
        myModal.show();
    }
         
})

// input Price Change

function changeMin () {
    var val = document.getElementById('customRange1').value;
    document.getElementById('minPrice').innerHTML = separate(val) + "تومان";
}

function changeMax () {
    var val = document.getElementById('customRange2').value;
    document.getElementById('maxPrice').innerHTML = separate(val) + "تومان";
}

// جداکردن 3 رقم

function separate(Number) 
{
Number+= '';
Number= Number.replace(',', '');
x = Number.split('.');
y = x[0];
z= x.length > 1 ? '.' + x[1] : '';
var rgx = /(\d+)(\d{3})/;
while (rgx.test(y))
y= y.replace(rgx, '$1' + ',' + '$2');
return y+ z;
}

// input product

function minusProduct () {
var val = parseInt (document.getElementById('input-product').value) ;
if(val > 1){
    document.getElementById('input-product').value = val - 1 ;
}
}

function plusProduct () {
    var val = parseInt (document.getElementById('input-product').value) ;
if(val < 10){
    document.getElementById('input-product').value = val + 1 ;
}
}
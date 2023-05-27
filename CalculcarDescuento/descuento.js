let inputPrice = document.querySelector('#price');
let inputCoupon = document.querySelector('#coupon');
let btn = document.querySelector('#calcular');
let pResult = document.querySelector('#result');

btn.addEventListener('click',calcularPrecioConDescuento);

//funciona
// const couponObj ={
//     'Devinsky': 70,
//     'Barrios': 50,
//     'Bellido': 25,
//     '2023': 10,
// };

const couponList =[];
couponList.push({
    name: 'Devinsky',
    discount: 70,
});
couponList.push({
    name: 'Barrios',
    discount: 50,
});
couponList.push({
    name: 'Bellido',
    discount: 30,
});

function calcularPrecioConDescuento() {
    //(Precio * (100 - Descuento)) / 100
    let price = Number(inputPrice.value);
    let coupon = inputCoupon.value;

    if (!price || !coupon) {
        
        pResult.innerText = 'llena el formulario';
        return;
    }

    let discount;

    function isCouponInArray(couponElement) {
       return couponElement.name == coupon;  

    }

    const couponInArray = couponList.filter(isCouponInArray); //filter devuelve un array

    if (couponInArray.length > 0) {
        discount = couponInArray[0].discount;
    } else {
        pResult.innerText = 'Cupon Invalido';
        return; //para que no continue el codigo 
    }




    //funciona
    // if (couponObj[coupon]) {
    //     discount = couponObj[coupon];
    // }else{
    //     pResult.innerText = 'Cupon Invalido';
    //     return; //para que no continue el codigo 
    // }

    // funciona
    // switch (coupon) {
    //     case 'Devinsky':
    //         discount = 70;
    //     break;
    //     case 'Barrios':
    //         discount = 50;
    //     break;
    //     case 'Bellido':
    //         discount = 25;
    //     break;
    //     default:
    //         pResult.innerText = 'Cupon Invalido';
    //     return; //para que no continue el codigo 
    // }

    //funcional
    // if (coupon == 'Devinsky') {
    //     discount = 70;
    // } else if(coupon== 'Barrios'){
    //     discount = 50;
    // }else{
    //     pResult.innerText = 'Cupon Invalido';
    //     return;
    // }

    if (discount > 100 || discount < 0) {
        pResult.innerText = 'El descuento debe ser mayor a 0 y menor que 100';
        return;
    }
        let newPrice = (price * (100 - discount)) / 100;
    
        pResult.innerText = 'El nuevo precio con descuento es $' +newPrice;
    
}
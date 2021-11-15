//const PrecioOriginal = 120;
//const descuento = 15;


function calcularPrecioConDescuento(precio, descuento){
    const porcentajeconPrecioDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeconPrecioDescuento) / 100;
    return precioConDescuento;

}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscount");
    const dicountValue = inputDiscount.value;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, dicountValue);
    //Imprimiendo valor del precio
    const Price = document.getElementById("ResultPrice");
    Price.innerText = "El precio con descuento es de: " + precioConDescuento;
    
}





/*
console.log({
    PrecioOriginal,
    descuento,
    porcentajeconPrecioDescuento,
    precioDescuento
}); */
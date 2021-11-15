function calcularPrecioConDescuento(precio, descuento){
    const porcentajeconPrecioDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeconPrecioDescuento) / 100;
    return precioConDescuento;

}

function onClickButtonPriceDiscount(){

    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    let Cupon = document.getElementById("InputCupon");
    let CuponDescuento = Cupon.value;
   
    const InputDescuento = document.getElementById("InputDescuento");
    const DescuentoTotal = InputDescuento.value;

    
    if(CuponDescuento === "Dexter"){

        dicountValue = 15;
        precioConDescuento = calcularPrecioConDescuento(priceValue, dicountValue);
        const Price = document.getElementById("ResultPrice");
        Price.innerText = "El precio con descuento es de: $" + precioConDescuento;

    }
    else if(CuponDescuento === "Mexico"){
        
        dicountValue = 30;
        precioConDescuento = calcularPrecioConDescuento(priceValue, dicountValue);
        const Price = document.getElementById("ResultPrice");
        Price.innerText = "El precio con descuento es de: $" + precioConDescuento;
    }

    else if(CuponDescuento === "recargar_escopeta"){
        
        dicountValue = 25;
        precioConDescuento = calcularPrecioConDescuento(priceValue, dicountValue);
        const Price = document.getElementById("ResultPrice");
        Price.innerText = "El precio con descuento es de: $" + precioConDescuento;
    }

    else if (CuponDescuento != "") {
        const Price = document.getElementById("ResultPrice");
        Price.innerText = "Opcion Invalida";
    }

}

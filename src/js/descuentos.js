// Función que calcula el precio con descuento
function precioConDescuento (precio, descuento) {
    const procentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * procentajePrecioConDescuento)/100;
    return precioConDescuento
}
// descuento sin cupones
 function calcularDescuento () {
 const precio = document.getElementById("precio");
 const valuePrecio = precio.value;
 const descuento = document.getElementById("descuento");
 const valueDescuento = descuento.value;
 const resultado = precioConDescuento (valuePrecio, valueDescuento)
 document.getElementById("result").innerHTML=resultado;
 }
// descuento con cupones
 const descuentos = [
     "navidad",
     "pascua",
     "cumpleaños",
     "semanaSanta",
     "blackFriday",
 ]
 function calcularDescuentoCupon () {
     const precio = document.getElementById("precio");
     const valuePrecio = precio.value;
     const descuento = document.getElementById("descuentoCupon");
     const valueDescuento = descuento.value;
    
     let descuentoAplicado;
     if(valueDescuento === descuentos[0]) {
         descuentoAplicado = 10
     } else if (valueDescuento === descuentos[1]) {
         descuentoAplicado = 20
     } else if (valueDescuento === descuentos[2]) {
         descuentoAplicado = 30
     } else if (valueDescuento === descuentos[3]) {
         descuentoAplicado = 40
     } else if (valueDescuento === descuentos[4]) {
         descuentoAplicado = 50
     } 
     const resultado = precioConDescuento (valuePrecio, descuentoAplicado)
     document.getElementById("result").innerHTML=resultado;
 }

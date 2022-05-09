function calcularIngresos() {
    const valoresIngresos = document.getElementById("ingresos").value;
    const arrayIngresosBruto = valoresIngresos.split(" ")
    const totalIngresos = arrayIngresosBruto.reduce((a, b) => { return Number(a) + Number(b) })
    document.getElementById("resultadoIngresos").innerHTML = totalIngresos
}
function discriminarIngresos() {
    const valoresIngresos = document.getElementById("ingresos").value;
    const arrayIngresosBruto = valoresIngresos.split(" ")
    const cuentasVendidas = {}
    arrayIngresosBruto.forEach(ingreso => {
        if (cuentasVendidas[ingreso]) {
            cuentasVendidas[ingreso] += 1;
        } else {
            cuentasVendidas[ingreso] = 1;
        }
    })
    Object.entries(cuentasVendidas).forEach(elemento => {
    if (elemento[0] === "12000") {
        document.getElementById("ingresoPantallaN").innerHTML=elemento[1]
    }
    if (elemento[0] === "6000") {
        document.getElementById("ingresoPantallaDyHb").innerHTML=elemento[1]
    }
    if (elemento[0] === "32000") {
        document.getElementById("ingresoCuentaN").innerHTML=elemento[1]
    }
    if (elemento[0] === "32000") {
        document.getElementById("ingresoCuentaDyHb").innerHTML=elemento[1]
    }})
}
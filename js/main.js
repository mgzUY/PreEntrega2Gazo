const productos = [
  {id:1, nombre:"Booster Bundle 151", idioma:"Ingles", precio:50, empresa:"The Pokemon Company"},
  {id:2, nombre:"Booster Box Paradox Rift", idioma:"Ingles", precio:160, empresa:"The Pokemon Company"},
  {id:3, nombre:"Ultra-Premium Collection 151", idioma:"Ingles", precio:120, empresa:"The Pokemon Company"},
  {id:4, nombre:"Elite Trainer Box Crown Zenith", idioma:"Ingles", precio:49, empresa:"The Pokemon Company"},
  {id:5, nombre:"Booster Box OP01", idioma:"Ingles", precio:300, empresa:"Bandai Namco Entertainment"},
  {id:6, nombre:"Booster Box OP02", idioma:"Ingles", precio:180, empresa:"Bandai Namco Entertainment"},
  {id:7, nombre:"Booster Box OP05", idioma:"Ingles", precio:125, empresa:"Bandai Namco Entertainment"},
  {id:8, nombre:"The Three Captains Ultra Deck ST-10", idioma:"Ingles", precio:39, empresa:"Bandai Namco Entertainment"}
]

class Carrito {
  constructor() {
    this.productos = [];
  }

  agregarProducto(producto) {
    this.productos.push(producto);
  }

  calcularTotal() {
    let total = 0;
    this.productos.forEach(producto => {
      total += producto.precio;
    });
    return total;
  }

  aplicarDescuentoIVA(descuento) {
    let totalDescontado = this.calcularTotal();
    totalDescontado -= totalDescontado * (descuento / 100);
    return totalDescontado;
  }
}

let carrito = new Carrito();

for (let i = 0; i < productos.length; i++) {
  let respuesta = prompt(`Quieres agregar al carrito ${productos[i].nombre}? (Sí/No)`);
  if (respuesta.toLowerCase() === 'sí' || respuesta.toLowerCase() === 'si') {
    carrito.agregarProducto(productos[i]);
  }
}

let descuentoIVA = parseInt(prompt("Marca 0 si quieres finalizar la compra, de lo contrario marca el porcentaje de descuento IVA (10-22%)"));

while (descuentoIVA < 10 || descuentoIVA > 22) {
  alert("El descuento IVA debe estar entre 10 y 22%");
  descuentoIVA = parseInt(prompt("Marca 0 si quieres finalizar la compra, de lo contrario marca el porcentaje de descuento IVA (10-22%)"));
}

if (descuentoIVA === 0) {
  console.log("Total a pagar: $" + carrito.calcularTotal());
} else {
  console.log("Total a pagar con descuento IVA: $" + carrito.aplicarDescuentoIVA(descuentoIVA));
}
if (descuentoIVA === 0) {
  alert("Total a pagar: $" + carrito.calcularTotal());
} else {
  alert("Total a pagar con descuento IVA: $" + carrito.aplicarDescuentoIVA(descuentoIVA));
}
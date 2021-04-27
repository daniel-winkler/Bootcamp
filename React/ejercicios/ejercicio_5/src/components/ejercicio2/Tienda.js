import Lista from "./Lista";

export default function Tienda() {

    const tienda = {
        electronica : [
            {id: 27, producto: "Televisor", marca: "LG", modelo: "XPY775", precio: 399},
            {id: 28, producto: "Equipo HIFI", marca: "Samsung", modelo: "VF74", precio: 179},
            {id: 29, producto: "Reproductor BluRay", marca: "Sony", modelo: "BR-345", precio: 489}
        ],
        alimentacion: [
            {id: 30, producto: "Galletas", marca: "Maria", precio: 0.90},
            {id: 31, producto: "Ensalada", marca: "Imizurra", precio: 1.10},
            {id: 32, producto: "Patatas", marca: "McCain", precio: 1.30},
            {id: 33, producto: "Pasta", marca: "Gallo", precio: 1.20}
        ],
        mascotas: [
            {id: 34, producto: "Croquetas para gato", marca: "Purina", precio: 4.90},
            {id: 35, producto: "Bolsitas de perro", marca: "Hacendado", precio: 1.90}
        ]
    };

    let category = Object.keys(tienda);
    // let products = []
    // for (let key in tienda) {
    //     products.push(tienda[key])
    // }
    // console.log(products[0]);
    
    return (
        <div>
            <Lista category={category[0]} products={tienda.electronica}/>
            <Lista category={category[1]} products={tienda.alimentacion}/>
            <Lista category={category[2]} products={tienda.mascotas}/>
        </div>
    )
}

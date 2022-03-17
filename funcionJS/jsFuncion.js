const error= (n) => {
    return {1:"Check the fan: e1",2:"Emergency stop: e2",3:"Pump Error: e3",4:"c: e4",5:"Temperature Sensor Error: e5"}[n]
}                             //Esta función sirve para hacer una validación sin tener que usar if o switch,
                            //se meten los diferentes errores(Como en este caso) y se le asigna una posión del objeto. y se busca con el parametro de entrada [n]
console.log(error(1))
console.log(error(2))
console.log(error(3))

const vehiculos= ["moto","bus","metroPlus","metro","bicicleta","auto","cuatriMoto" ]


let carro= "Carro"
let moto= "Moto"
let metro= "Metro"

const agregarMoto= vehiculos => vehiculos.push(moto)
agregarMoto(vehiculos);
console.log(vehiculos);

const quitarVehiculo = vehiculos=> vehiculos.pop()
quitarVehiculo(vehiculos)
quitarVehiculo(vehiculos)
console.log(vehiculos);

//console.log(vehiculos);
//vehiculos.push("bus","metro");
//console.log(vehiculos);
//vehiculos.pop()
//console.log(vehiculos);

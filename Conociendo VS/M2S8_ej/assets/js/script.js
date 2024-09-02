//creando un array
var paises = ["Chile", "Perú", "Argentina"]

//mostrar en consola los elementos
console.log(paises)

//largo del array
console.log(paises.length)

//recorrer un ciclo for
for (let i=0; i< paises.length; i++){
    console.log(paises[i])
}

//añadir un elemneto al final de la arreglo
paises.push("Brasil")
console.log(paises)

//añadir un elemneto al principio del array
paises.unshift("Uruguay")
console.log(paises)

//eliminar el ultimo elemento del array
paises.pop()
console.log(paises)

//eliminar el primer elemento del array
paises.shift()
console.log(paises)

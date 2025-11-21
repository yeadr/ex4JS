function ex1() {
console.log("Exercici 1:")
const arr = [Math.trunc(Math.random() * 1000) / 1000, 
            Math.trunc(Math.random() * 1000) / 1000, 
            Math.trunc(Math.random() * 1000) / 1000, 
            Math.trunc(Math.random() * 1000) / 1000, 
            Math.trunc(Math.random() * 1000) / 1000]

const ordenat = [...arr].sort((a, b) => {
    return a-b
})

const primer = ordenat[0]
const ultim = ordenat[ordenat.length-1]

return {arr, ordenat, primer, ultim}
}
console.log(ex1())

function ex2() {
console.log("")
console.log("Exercici 2:")
const ordenat = ex1().ordenat
const nou = [...ordenat]
return nou
}

console.log(ex2())

function ex3(a,b) {
console.log("")
console.log("Exercici 3:")
const fusio = [...a, ...b]
const resultat = []
fusio.forEach(x => { 
    if (!resultat.includes(x)){
        resultat.push(x) 
    }
    })

return resultat
}

console.log(ex3([1, 43], [2, 43, 34]))

function ex4(a,b) {
console.log("")
console.log("Exercici 4:")
const set = new Set([...a, ...b])
return Array.from(set)
}
console.log(ex4([1, 43], [2, 43, 34]))


function ex5(arr) {
console.log("")
console.log("Exercici 5:")
return arr.map((x) => {
    return x**3
})
}

console.log(ex5([1, 2, 3749]))

function ex6(arr) {
console.log("")
console.log("Exercici 6:")
return arr.filter((s) => {
    return s.split("a").length - 1 > 1
})
}

console.log(ex6(["Hola", "Adermamita", "no"]))

function ex7() {
console.log("")
console.log("Exercici 7:")
const m = new Map()
m.set(1, "numero")
m.set("clau", 123)
m.set(true, "boolea")
return Array.from(m)
}

console.log(ex7())

function ex8(paraula) {
console.log("")
console.log("Exercici 8:")
return paraula.toLowerCase() === paraula.split("").reverse().join("").toLowerCase()
}

console.log(ex8("H&oo&H"))
console.log(ex8("Edensphere"))


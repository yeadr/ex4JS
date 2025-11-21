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

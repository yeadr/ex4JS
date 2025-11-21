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
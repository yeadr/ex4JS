function ex1() {
const arr = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()]

const ordenat = [...arr].sort((a, b) => {
    return a-b
})

const primer = ordenat[0]
const ultim = ordenat[ordenat.length-1]

return {arr, ordenat, primer, ultim}
}
console.log(ex1())
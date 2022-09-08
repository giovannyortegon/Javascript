let a = "17"
console.log(typeof a)
let b = Number(a)
console.log(typeof b)
console.log(b)

if (b >= 18) {
    console.log("Puede votar")
} else {
    console.log("No puede votoar")
}

// Preguntar if es numero
console.log(Number.isNaN(a))
console.log(Number.isInteger(a))
let c = Number.toString(b)

console.log(typeof c)
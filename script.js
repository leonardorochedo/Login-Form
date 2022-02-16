function showPassword() {
    let tipo = document.getElementById("password")
    if (tipo.type == "password") {
        tipo.type = "text"
    } else {
        tipo.type = "password"
    }
}

// const form = document.querySelectorAll("#forms")

// if (form === document.activeElement) {
//     form.
// } else {
//     console.log("sem foco");
// }

let element = document.querySelectorAll("#forms")
let focused = document.hasFocus(element)
console.log(focused)
if (focused === true) {
    console.log("Está focado")
} else {
    console.log("Não tem foco")
}
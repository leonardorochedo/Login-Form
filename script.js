function showPassword() {
    let tipo = document.getElementById("password")
    if (tipo.type == "password") {
        tipo.type = "text"
    } else {
        tipo.type = "password"
    }
}

function changeIcon() {
    let button = document.getElementById("button")
    if (button.className == "password") {
        button.className = "text"
    } else {
        button.className = "password"
    }
}
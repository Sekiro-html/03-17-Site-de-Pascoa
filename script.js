let btncompras = document.getElementById("btncompras");

btncompras.addEventListener("click", () => {
    let div = document.createElement("div")
    let aside = document.createElement("aside");
    let main = document.getElementById("maincompras");

    main.appendChild(div)
    div.appendChild(aside);
    div.id = "InsideRemove";
    aside.classList.add("asidecarrinho");
    aside.id = "RemoveId";    
    document.getElementById("btncompras").id = "btnapagacompras";
})

let btnapagacompras = document.getElementById("btnapagacompras");

btnapagacompras.addEventListener("click", () => {
    let div = document.getElementById("InsideRemove");
    div.remove();
    document.getElementById("btnapagacompras").id = "btncompras";
})
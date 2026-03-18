let btncompras = document.getElementById("btncompras");

btncompras.addEventListener("click", () => {
    let aside = document.createElement("aside");
    let main = document.getElementById("maincompras");

    main.appendChild(aside);
    aside.classList.add("asidecarrinho");
    aside.idd = "RemoveId";
})
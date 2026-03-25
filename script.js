let container = [
    {
        Txt: "Ovo de Páscoa Lacta 170g",
        preco: "R$ 60,00",
        img: "./IMG/Ovo_Ben_10.webp"
    },
    {
        Txt: "Ovo de Páscoa Nocciolate Lindt 350g",
        preco: "R$ 75,00",
        img: "./IMG/ovo-pascoa-choc-noccio-lindt-cx-350g-1.webp"
    },
    {
            Txt: "Ovo de Páscoa Chocolate Ao Leite HAVAN",
            preco: "R$ 89,99",
            img: "./IMG/OVOs HAVAN.webp"
    },  
    {
        Txt: "Ovo de Páscoa Scooby-Doo 120g",
        preco: "R$ 42,66",
        img: "./IMG/Scooby-Loo.webp"
    },
    {
        Txt: "Ovo de Páscoa de Chocolate com copo Enaldinho",
        preco: "R$ 69,99",
        img: "./IMG/Ovo-do-Enaldinho.webp"
    },
    {
        Txt: "Ovo de Páscoa de chocolate Tom e Jerry 80g",
        preco: "R$ 22,90",
        img: "./IMG/Tom-e-Jerry.webp"
    },
    {
        Txt: "Ovo de Pásco de Chocolate Luccas Neto 100g",
        preco: "R$ 126,40",
        img: "./IMG/Ovo-Do-Lucas.webp"
    },
    {
        Txt: "Ovo de Páscoa de Chocolate Toc Mix 50g",
        preco: "R$ 10,99",
        img: "./IMG/Ovo-Joy.webp"
    }
];

function CriaContainer(onload) {
    for (let i = 0; i < container.length; i++) {
        let main = document.getElementById("main");
        let section = document.createElement("section");
        let img = document.createElement("img");
        let h1 = document.createElement("h1");
        let span = document.createElement("span");
        let btn = document.createElement("input");

        main.appendChild(section);
        section.appendChild(img);
        section.appendChild(h1);
        section.appendChild(span);
        section.appendChild(btn);
        img.src = container[i].img;
        h1.innerText = container[i].Txt;
        span.innerText = container[i].preco;
        btn.type = "button";
        btn.value = "Comprar";
        btn.id = "btncompra"
    }
}

let btncarrinho = document.getElementById("btncarrinho");

btncarrinho.addEventListener("click", () => {
    let aside = document.createElement("div");
    let body = document.getElementById("body");
    let btnremove = document.createElement("input");

    body.appendChild(aside);
    aside.appendChild(btnremove);
    aside.id = "animacao"
    btnremove.id = "btnexclui"
    btnremove.type = "button";


    aside.classList.add("asidecarrinho");

    let btnexclui = document.getElementById("btnexclui");

    btnexclui.addEventListener("click", () => {
        aside.remove();
    })
})

const container = [
    {
        id: 1,
        Txt: "Ovo de Páscoa Lacta 170g",
        preco: "R$ 60.00",
        img: "./IMG/Ovo_Ben_10.webp",
        quant: "1"
    },
    {
        id: 2,
        Txt: "Ovo de Páscoa Nocciolate Lindt 350g",
        preco: "R$ 75.00",
        img: "./IMG/ovo-pascoa-choc-noccio-lindt-cx-350g-1.webp",
        quant: "1"
    },
    {
        id: 3,
        Txt: "Ovo de Páscoa Chocolate Ao Leite HAVAN",
        preco: "R$ 89.99",
        img: "./IMG/OVOs HAVAN.webp",
        quant: "1"
    },  
    {
        id: 4,
        Txt: "Ovo de Páscoa Scooby-Doo 120g",
        preco: "R$ 42.66",
        img: "./IMG/Scooby-Loo.webp",
        quant: "1"
    },
    {
        id: 5,
        Txt: "Ovo de Páscoa de Chocolate com copo Enaldinho",
        preco: "R$ 69.99",
        img: "./IMG/Ovo-do-Enaldinho.webp",
        quant: "1"
    },
    {
        id: 6,
        Txt: "Ovo de Páscoa de chocolate Tom e Jerry 80g",
        preco: "R$ 22.90",
        img: "./IMG/Tom-e-Jerry.webp",
        quant: "1"
    },
    {
        id: 7,
        Txt: "Ovo de Pásco de Chocolate Luccas Neto 100g",
        preco: "R$ 126.40",
        img: "./IMG/Ovo-Do-Lucas.webp",
        quant: "1"
    },
    {
        id: 8,
        Txt: "Ovo de Páscoa de Chocolate Toc Mix 50g",
        preco: "R$ 10.99",
        img: "./IMG/Ovo-Joy.webp",
        quant: "1"
    }
];

const listadeovos = [];
const listapreco = [];
const quantcarrinho = [];
const quantovos = [];
const CarrinhoID = [];
const ContainerID = [];

ContainerID.push(container.id);

function CriaContainer(onload) {
    for (let i = 0; i < container.length; i++) {
        let main = document.getElementById("main");
        let section = document.createElement("section");
        let img = document.createElement("img");
        let h1 = document.createElement("h1");
        let span = document.createElement("span");
        let btn = document.createElement("input");
        let ncarac = i + "";

        main.appendChild(section);
        section.id = "sectionovos" + ncarac;
        section.appendChild(img);
        section.appendChild(h1);
        section.appendChild(span);
        section.appendChild(btn);
        img.src = container[i].img;
        h1.innerText = container[i].Txt;
        span.innerText = container[i].preco;
        span.id = "precoovo" + ncarac;
        btn.type = "button";
        btn.value = "Comprar";
        btn.id = "btncompra" + ncarac;
        

        let btnovos = document.getElementById("btncompra" + ncarac);

        btnovos.addEventListener("click", () => {
                let guardaovos = container[i];
                let preco = container[i].preco;



                let info = listadeovos.some(item => item.id === guardaovos.id)
                console.log(info);
                if (info === true) {
                    event.preventDefault();
                    guardaovos.quant = parseInt(guardaovos.quant) + 1;
                    return
                }
                console.log(guardaovos)
                CarrinhoID.push(guardaovos.id);
                listapreco.push(preco.slice(3));
                listadeovos.push(guardaovos);

                let quant = 1;
                quant++;
        });

        let btnclick2 = document.getElementById("btncompra" + ncarac);

        btnclick2.addEventListener("click", ClickAsideCria);
        
    };
}

function ClickAsideCria() {
    //Cria Aside
    let aside = document.createElement("div");
    let body = document.querySelector("#body");
    let btnremove = document.createElement("input");
    let numbpreco = document.createElement("span");
    let soma = 0;

    body.appendChild(aside);
    aside.appendChild(btnremove);
    btnremove.id = "btnexclui";
    btnremove.type = "button";
    
    //Cria conteudo dentro do aside
    for (i = 0; i < listadeovos.length; i++) {
        let section = document.createElement("section");
        let img = document.createElement("img");
        let h1 = document.createElement("h1");
        let span = document.createElement("span");
        let contador = document.createElement("input");
        let btn1 = document.createElement("input");
        let btn2 = document.createElement("input");
        let ncarac = i + "";
        let add = 1;

        aside.appendChild(section);
        section.id = "sectionovos" + ncarac;

        section.appendChild(img);
        section.appendChild(h1);
        section.appendChild(span);
        section.appendChild(btn1);
        section.appendChild(contador);
        section.appendChild(btn2);

        img.src = listadeovos[i].img;
        h1.innerText = listadeovos[i].Txt;
        span.innerText = listadeovos[i].preco;
        span.id = "precoovo" + ncarac;
        contador.type = "Text";
        contador.value = listadeovos[i].quant;
        btn1.type = "button";
        btn2.type = "button";
        btn1.value = "-";
        btn2.value = "+";
        contador.classList.add("Btnscount");
        btn1.classList.add("Btnscount");
        btn1.id = "DiscountBtn" + ncarac;
        btn2.classList.add("Btnscount");
        btn2.id = "AddBtn" + ncarac;

        soma += parseFloat(listapreco[i]);

        aside.appendChild(numbpreco);
        numbpreco.innerText = "R$" + soma;
        numbpreco.id = "precoovos";


        document.getElementById("AddBtn" + ncarac).addEventListener("click", () => {
            let quant = parseInt(contador.value);
            quant++;
            contador.value = quant;
            quantovos.push(contador.value);
            let novasoma = quant * parseInt(soma)
            preco.innerText = "R$" + novasoma;
        });

        document.getElementById("DiscountBtn" + ncarac).addEventListener("click", () => {
            let quant = parseInt(contador.value);
            quant--;
            contador.value = quant;
            quantovos.push(contador.value);   
            let novasoma = quant / parseInt(soma)
            preco.innerText = "R$" + novasoma;        
        })
    };
    
    //Exclui o aside  
    aside.classList.add("asidecarrinho");
    aside.id = "asideCarrinhoRemove";

    let btnexclui = document.getElementById("btnexclui");

    btnexclui.addEventListener("click", () => {
        aside.remove();
});

let btnclick2 = document.getElementById("btncompra" + i);

btnclick2.removeEventListener("click", ClickAsideCria);

btnclick2.addEventListener("click", ClickAsideRemove);
};

function ClickAsideRemove() {
    for(let i = 0; i < container.length; i++) {
    let btnclick2 = document.getElementById("btncompra" + i);

        btnclick2.removeEventListener("click", ClickAsideRemove);

    btnclick2.addEventListener("click", ClickAsideCria);

    let aside = document.getElementById("asideCarrinhoRemove");

    aside.remove();
};
};

let btncarrinho = document.getElementById("btncarrinho"); 

btncarrinho.addEventListener("click", () => {
    //Cria Aside
    let aside = document.createElement("div");
    let body = document.querySelector("#body");
    let btnremove = document.createElement("input");
    let preco = document.createElement("span");
    let soma = 0;

    body.appendChild(aside);
    aside.appendChild(btnremove);
    btnremove.id = "btnexclui";
    btnremove.type = "button";
    aside.id = "asideCarrinhoRemove";
    
    //Cria conteudo dentro do aside
    for (i = 0; i < listadeovos.length; i++) {
        
        let section = document.createElement("section");
        let img = document.createElement("img");
        let h1 = document.createElement("h1");
        let span = document.createElement("span");
        let contador = document.createElement("input");
        let btn1 = document.createElement("input");
        let btn2 = document.createElement("input");
        let ncarac = i + "";
        let add = 1;

        aside.appendChild(section);
        section.id = "sectionovos" + ncarac;

        section.appendChild(img);
        section.appendChild(h1);
        section.appendChild(span);
        section.appendChild(btn1);
        section.appendChild(contador);
        section.appendChild(btn2);

        img.src = listadeovos[i].img;
        h1.innerText = listadeovos[i].Txt;
        span.innerText = listadeovos[i].preco;
        span.id = "precoovo" + ncarac;
        contador.type = "Text";
        contador.value = container[i].quant;
        btn1.type = "button";
        btn2.type = "button";
        btn1.value = "-";
        btn2.value = "+";
        contador.classList.add("Btnscount");
        btn1.classList.add("Btnscount");
        btn1.id = "DiscountBtn" + ncarac;
        btn2.classList.add("Btnscount");
        btn2.id = "AddBtn" + ncarac;


        soma += parseFloat(listapreco[i]);

        aside.appendChild(preco);
        preco.innerText = "R$" + soma;
        preco.id = "precoovos";


        document.getElementById("AddBtn" + ncarac).addEventListener("click", () => {
            let quant = parseInt(contador.value);
            quant++;
            contador.value = quant;
            quantovos.push(contador.value);
            let novasoma = quant * parseInt(soma)
            preco.innerText = "R$" + novasoma;
        });

        document.getElementById("DiscountBtn" + ncarac).addEventListener("click", () => {
            let quant = parseInt(contador.value);
            quant--;
            contador.value = quant;
            quantovos.push(contador.value);   
            let novasoma = quant / parseInt(soma)
            preco.innerText = "R$" + novasoma;        
        })
    };

    //Exclui o aside  
    aside.classList.add("asidecarrinho");

    let btnexclui = document.getElementById("btnexclui");

    btnexclui.addEventListener("click", () => {
        aside.remove();
    })
});
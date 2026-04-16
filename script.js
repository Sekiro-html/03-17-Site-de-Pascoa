const container = [
    { id: 1, Txt: "Ovo de Páscoa Lacta 170g",                        preco: "60.00",  img: "./IMG/Ovo_Ben_10.webp",                             quant: "1" },
    { id: 2, Txt: "Ovo de Páscoa Nocciolate Lindt 350g",             preco: "75.00",  img: "./IMG/ovo-pascoa-choc-noccio-lindt-cx-350g-1.webp", quant: "1" },
    { id: 3, Txt: "Ovo de Páscoa Chocolate Ao Leite HAVAN",          preco: "89.99",  img: "./IMG/OVOs HAVAN.webp",                             quant: "1" },
    { id: 4, Txt: "Ovo de Páscoa Scooby-Doo 120g",                   preco: "42.66",  img: "./IMG/Scooby-Loo.webp",                             quant: "1" },
    { id: 5, Txt: "Ovo de Páscoa de Chocolate com copo Enaldinho",   preco: "69.99",  img: "./IMG/Ovo-do-Enaldinho.webp",                       quant: "1" },
    { id: 6, Txt: "Ovo de Páscoa de chocolate Tom e Jerry 80g",      preco: "22.90",  img: "./IMG/Tom-e-Jerry.webp",                            quant: "1" },
    { id: 7, Txt: "Ovo de Pásco de Chocolate Luccas Neto 100g",      preco: "126.40", img: "./IMG/Ovo-Do-Lucas.webp",                           quant: "1" },
    { id: 8, Txt: "Ovo de Páscoa de Chocolate Toc Mix 50g",          preco: "10.99",  img: "./IMG/Ovo-Joy.webp",                                quant: "1" },
];


const listadeovos   = [];
const listapreco    = []; 
const quantcarrinho = [];
const quantovos     = [];
const carrinho      = [];



function CriaContainer(onload) {
    for (let i = 0; i < container.length; i++) {
        let ncarac = i + "";

        let main    = document.getElementById("main");
        let section = document.createElement("section");
        let img     = document.createElement("img");
        let h1      = document.createElement("h1");
        let span    = document.createElement("span");
        let btn     = document.createElement("input");


        main.appendChild(section);
        section.id = "sectionovos" + ncarac;

        section.appendChild(img);
        section.appendChild(h1);
        section.appendChild(span);
        section.appendChild(btn);


        img.src        = container[i].img;
        h1.innerText   = container[i].Txt;
        span.innerText = container[i].preco;
        span.id        = "precoovo" + ncarac;

        btn.type  = "button";
        btn.value = "Comprar";
        btn.id    = "btncompra" + ncarac;


        let btnovos = document.getElementById("btncompra" + ncarac);

        btnovos.addEventListener("click", () => {
            let guardaovos = container[i];
            let preco      = container[i].preco;


            let info = listadeovos.some(item => item.id === guardaovos.id);

            quantovos.push(guardaovos.id);
            listadeovos.push(guardaovos);

            const contagem = quantovos.reduce((acc, item) => {
                acc[item] = (acc[item] || 0) + 1;
                return acc;
            }, {});

            quantcarrinho.push(Number(contagem[guardaovos.id]));

 
        });
        
        let btnclick2 = document.getElementById("btncompra" + ncarac);
        btnclick2.addEventListener("click", ClickAsideCria);    
    }
}




function ClickAsideCria() {
    let AsideExistente = document.getElementById("asideCarrinhoRemove");

    const OvosUnicos = listadeovos.filter((item, index) => listadeovos.indexOf(item) === index);
    const contagem   = [quantovos.reduce((acc, item) => {
        acc[item]    = (acc[item] || 0) + 1;
        return acc;
    }, {})];

    if(AsideExistente) {
        AsideExistente.remove();
    }
    
    let aside     = document.createElement("div");
    let body      = document.querySelector("#body");
    let btnremove = document.createElement("input");
    let numbpreco = document.createElement("span");


    body.appendChild(aside);
    aside.appendChild(btnremove);

    btnremove.id   = "btnexclui";
    btnremove.type = "button";


    for (let i = 0; i < OvosUnicos.length; i++) {
        
        let ncarac   = i + "";
        let add      = 1;

        let section  = document.createElement("section");
        let img      = document.createElement("img");
        let h1       = document.createElement("h1");
        let span     = document.createElement("span");
        let contador = document.createElement("input");
        let btn1     = document.createElement("input");
        let btn2     = document.createElement("input");


        aside.appendChild(section);
        section.id = "sectionovos" + ncarac;

        section.appendChild(img);
        section.appendChild(h1);
        section.appendChild(span);
        section.appendChild(btn1);
        section.appendChild(contador);
        section.appendChild(btn2);


        img.src        = OvosUnicos[i].img;
        h1.innerText   = OvosUnicos[i].Txt;
        span.innerText = OvosUnicos[i].preco;
        span.id        = "precoovo" + ncarac;

        contador.type  = "Text";
        contador.value = OvosUnicos[i].quant;
        contador.classList.add("Btnscount");

        btn1.type  = "button";
        btn1.value = "-";
        btn1.classList.add("Btnscount");
        btn1.id = "DiscountBtn" + ncarac;

        btn2.type  = "button";
        btn2.value = "+";
        btn2.classList.add("Btnscount");
        btn2.id = "AddBtn" + ncarac;

        let soma = 0;

        soma += parseFloat(OvosUnicos[i].preco);

        aside.appendChild(numbpreco);
        numbpreco.innerText = "R$" + soma;
        numbpreco.id        = "precoovos";


        document.getElementById("AddBtn" + ncarac).addEventListener("click", () => {
                let quant      = parseInt(contador.value);
                console.log(quant);
                quant++;
                contador.value = quant;

                let novasoma = quant * parseInt(soma);
                preco.innerText = "R$" + novasoma;
        });


        document.getElementById("DiscountBtn" + ncarac).addEventListener("click", () => {
                let quant    = parseInt(contador.value);
                console.log(quant);
                quant--;
                console.log(quant);
                contador.value = quant;
                if (contador.value = 0) {
                    for(let i = 0; i < container.length; i++) {
                    let section = document.getElementById("sectionovos" + ncarac);
                    section.remove();
                    return;
                }
            };

            let novasoma = quant / parseInt(soma);
            preco.innerText = "R$" + novasoma;
        });
    }


    aside.classList.add("asidecarrinho");
    aside.id = "asideCarrinhoRemove";


    let btnexclui = document.getElementById("btnexclui");
    btnexclui.addEventListener("click", () => {
        aside.remove();
    });
}



let btncarrinho = document.getElementById("btncarrinho");

btncarrinho.addEventListener("click", () => {
    let aside     = document.createElement("div");
    let body      = document.querySelector("#body");
    let btnremove = document.createElement("input");
    let preco     = document.createElement("span");
    let soma      = 0;


    body.appendChild(aside);
    aside.appendChild(btnremove);

    btnremove.id   = "btnexclui";
    btnremove.type = "button";
    aside.id       = "asideCarrinhoRemove";

    const OvosUnicos = listadeovos.filter((item, index) => listadeovos.indexOf(item) === index);
    
    for (let i = 0; i < OvosUnicos.length; i++) {
        let ncarac   = i + "";

        let section  = document.createElement("section");
        let img      = document.createElement("img");
        let h1       = document.createElement("h1");
        let span     = document.createElement("span");
        let contador = document.createElement("input");
        let btn1     = document.createElement("input");
        let btn2     = document.createElement("input");


        aside.appendChild(section);
        section.id = "sectionovos" + ncarac;

        section.appendChild(img);
        section.appendChild(h1);
        section.appendChild(span);
        section.appendChild(btn1);
        section.appendChild(contador);
        section.appendChild(btn2);


        img.src        = OvosUnicos[i].img;
        h1.innerText   = OvosUnicos[i].Txt;
        span.innerText = OvosUnicos[i].preco;
        span.id        = "precoovo" + ncarac;

        contador.type  = "Text";
        contador.value = OvosUnicos[i].quant;
        contador.classList.add("Btnscount");

        btn1.type  = "button";
        btn1.value = "-";
        btn1.classList.add("Btnscount");
        btn1.id = "DiscountBtn" + ncarac;

        btn2.type  = "button";
        btn2.value = "+";
        btn2.classList.add("Btnscount");
        btn2.id = "AddBtn" + ncarac;


        soma += parseFloat(listapreco[i]);

        aside.appendChild(preco);
        preco.innerText = "R$" + soma;
        preco.id        = "precoovos";

       
        document.getElementById("AddBtn" + ncarac).addEventListener("click", () => {
            let quant    = parseInt(contador.value);
            quant++;
            contador.value = quant;
            quantovos.push(contador.value);

            let novasoma = quant * parseInt(soma);
            preco.innerText = "R$" + novasoma;
        });


        document.getElementById("DiscountBtn" + ncarac).addEventListener("click", () => {
            let quant    = parseInt(contador.value);
            quant--;
            contador.value = quant;
            quantovos.push(contador.value);

            let novasoma = quant / parseInt(soma);
            preco.innerText = "R$" + novasoma;
        });
    }


    aside.classList.add("asidecarrinho");


    let btnexclui = document.getElementById("btnexclui");
    btnexclui.addEventListener("click", () => {
        aside.remove();
    });
});
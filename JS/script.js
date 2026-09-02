(function(){
    const items = [
        { src: "Imagens/tecnologia_do_gol.jpg", key: "futebol" },
        { src: "Imagens/corrida_tecnologia.jpg", key: "atletismo" },
        { src: "Imagens/basquete_tecnologia.jpg", key: "basquete" },
        { src: "Imagens/iamgem_tecnologia_do_voleibol.jpg", key: "voleibol" },
        { src: "Imagens/imagem_xadres.webp", key: "xadrez" }
    ];

    const traducoes = {
        pt: {
            futebol: "Futebol",
            atletismo: "Atletismo",
            basquete: "Basquete",
            voleibol: "Voleibol",
            xadrez: "Xadrez"
        },
        en: {
            futebol: "Soccer",
            atletismo: "Athletics",
            basquete: "Basketball",
            voleibol: "Volleyball",
            xadrez: "Chess"
        },
        es: {
            futebol: "Fútbol",
            atletismo: "Atletismo",
            basquete: "Baloncesto",
            voleibol: "Voleibol",
            xadrez: "Ajedrez"
        }
    };

    function detectarIdioma(){
        const caminho = window.location.pathname.toLowerCase();
        if (caminho.includes("ingles")) return "en";
        if (caminho.includes("espanhol")) return "es";
        return "pt";
    }

    const idioma = detectarIdioma();
    const t = traducoes[idioma] || traducoes.pt;

    const total = items.length;

    const imgLeft = document.getElementById('imgLeft');
    const imgCenter = document.getElementById('imgCenter');
    const imgRight = document.getElementById('imgRight');
    const labelLeft = document.getElementById('labelLeft');
    const labelCenter = document.getElementById('labelCenter');
    const labelRight = document.getElementById('labelRight');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsWrap = document.getElementById('dots');

    let index = 0;

    items.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.addEventListener('click', () => goTo(i));
        dotsWrap.appendChild(dot);
    });
    const dots = Array.from(dotsWrap.children);

    function setImages(){
        const leftIdx = (index - 1 + total) % total;
        const rightIdx = (index + 1) % total;

        imgLeft.src = items[leftIdx].src;
        labelLeft.textContent = t[items[leftIdx].key];

        imgCenter.src = items[index].src;
        labelCenter.textContent = t[items[index].key];

        imgRight.src = items[rightIdx].src;
        labelRight.textContent = t[items[rightIdx].key];

        dots.forEach((d, i) => d.classList.toggle('active', i === index));
    }

    function update(){
        const all = [imgLeft, imgCenter, imgRight, labelLeft, labelCenter, labelRight];
        all.forEach(el => el.classList.add('fade'));
        setTimeout(() => {
            setImages();
            all.forEach(el => el.classList.remove('fade'));
        }, 220);
    }

    function goTo(i){
        index = (i + total) % total;
        update();
    }

    prevBtn.addEventListener('click', () => goTo(index - 1));
    nextBtn.addEventListener('click', () => goTo(index + 1));

    setImages();
})();
// Seznam základních pojmů / komponentů
const componentsData = [
    {
        title: "Procesor (CPU)",
        excelName: "Intel Core i3-12100",
        price: "2 960 Kč",
        img: "",
        definition: "Procesor je 'mozková centrála' celého počítače. Vykonává veškeré výpočty, spouští programy a řídí chod celého systému.",
        reason: "Intel Core i3-12100 nabízí extrémní výkon na jedno jádro v poměru k nízké ceně. Pro kancelář, tabulky a web je naprosto adekvátní a nebudete přoplácet za zbytečně drahá i5 nebo i7 řešení."
    },
    {
        title: "Grafická Karta (GPU)",
        excelName: "Intel UHD Graphics 730",
        price: "Součást procesoru (0 Kč)",
        img: "",
        definition: "Grafická karta se stará o vykreslování obrazu na monitor. Může být buď samostatná (dedikovaná), nebo integrovaná přímo v procesoru.",
        reason: "Pro běžnou kancelářskou práci (Excel, prohlížeč, 4K videa) je integrovaná grafika Intel UHD 730 nejlepší volbou na trhu. Ušetří cca 3000-5000 Kč za zbytečnou samostatnou kartu a má minimální spotřebu."
    },
    {
        title: "Operační Paměť (RAM)",
        excelName: "Kingston FURY Beast Black 16GB",
        price: "3 489 Kč",
        img: "",
        definition: "RAM slouží jako krátkodobé úložiště pro právě otevřené programy, dokumenty a záložky v prohlížeči.",
        reason: "16 GB RAM je dnes naprostý základ pro plynulý chod bez zasekávání. Značka Kingston patří mezi nejspolehlivější výrobce na trhu s minimální úmrtností pamětí."
    },
    {
        title: "Pevný Disk (SSD)",
        excelName: "Verbatim Vi3000 512GB",
        price: "2 129 Kč",
        img: "",
        definition: "Disk slouží jako trvalé úložiště pro operační systém (Windows), aplikace a všechny vaše soubory a dokumenty.",
        reason: "Jedná se o rychlé rozhraní NVMe PCIe M.2, díky kterému se Windows načte do 10 sekund. Kapacita 512 GB plně dostačuje na tisíce kancelářských dokumentů."
    },
    {
        title: "Síťová Karta",
        excelName: "TP-Link TG-3468",
        price: "549 Kč",
        img: "",
        definition: "Zajišťuje fyzické připojení počítače k místní síti a internetu pomocí ethernetového kabelu (RJ-45).",
        reason: "TP-Link TG-3468 je cenově nejdostupnější gigabitová PCIe karta na trhu. Nabízí maximální stabilitu připojení 1000 Mbps bez výpadků."
    },
    {
        title: "Zvuková Karta",
        excelName: "AlzaPower USB Sound Card 4030",
        price: "219 Kč",
        img: "",
        definition: "Zpracovává zvukový signál a umožňuje připojení reproduktorů, sluchátek nebo mikrofonu.",
        reason: "Jednoduché USB řešení 'plug-and-play'. Nevyžaduje žádnou instalaci ovladačů a zajistí čistý přenos hlasu při online schůzkách přes Teams či Zoom."
    },
    {
        title: "Monitor",
        excelName: "Kancelářský Monitor ASUS",
        price: "9 290 Kč",
        img: "",
        definition: "Zobrazovací zařízení pro práci. Pro kancelář je klíčový kvalitní panel šetrný k očím.",
        reason: "Monitory ASUS v této třídě vynikají ergonomií, kvalitním podáním barev a hlavně šetrností k očím (Flicker-Free a redukce modrého světla při celodenním sledování)."
    },
    {
        title: "Klávesnice",
        excelName: "HP 230 CZ/SK",
        price: "V setu / 0 Kč",
        img: "",
        definition: "Základní vstupní zařízení pro psaní textu a zadávání příkazů.",
        reason: "HP 230 nabízí nízkoprofilové tiché klávesy s nízkým zdvihem (podobně jako u notebooku) a českou lokalizaci, což zajišťuje rychlé a pohodlné psaní bez únavy prstů."
    },
    {
        title: "Myš",
        excelName: "HP Z3700 Dual",
        price: "V setu / 0 Kč",
        img: "",
        definition: "Vstupní zařízení k ovládání kurzoru na obrazovce.",
        reason: "Kompaktní, velmi přesná optická myš HP Z3700 s nízkým profilem a dlouhou výdrží baterie, vhodná pro celodenní práci na jakémkoliv stolu."
    },
    {
        title: "Kabeláž a Napájení",
        excelName: "Sada napájecích a datových kabelů",
        price: "V balení (0 Kč)",
        img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80",
        definition: "Napájecí kabely (230V do zásuvky) a datové propojovací kabely (HDMI pro obraz, USB pro periférie).",
        reason: "Všechny potřebné kabely (HDMI k monitoru, 230V do skříně i kabely pro myš/klávesnici) jsou již přímo přibaleny u jednotlivých komponent a monitoru. Není nutné připlácet ani korunu navíc."
    }
];

// Generování karet do mřížky
function renderCards() {
    const grid = document.getElementById('components-grid');
    grid.innerHTML = '';

    componentsData.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => openModal(index);

        card.innerHTML = `
            <img src="${item.img}" alt="${item.title}" class="card-img">
            <h3>${item.title}</h3>
            <p class="card-subtitle">${item.excelName}</p>
            <p class="card-price">${item.price}</p>
        `;

        grid.appendChild(card);
    });
}

// Otevření okna s detailem
function openModal(index) {
    const item = componentsData[index];
    document.getElementById('modal-img').src = item.img;
    document.getElementById('modal-title').innerText = item.title;
    document.getElementById('modal-excel-name').innerText = item.excelName;
    document.getElementById('modal-price').innerText = item.price;
    document.getElementById('modal-definition').innerText = item.definition;
    document.getElementById('modal-reason').innerText = item.reason;

    document.getElementById('modal').classList.remove('hidden');
}

// Zavření okna
function closeModal() {
    document.getElementById('modal').classList.add('hidden');
}

// Zavření kliknutím mimo okno
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Inicializace
document.addEventListener('DOMContentLoaded', renderCards);
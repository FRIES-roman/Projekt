const data = {
  cpu: { 
    name: "Procesor: Intel Core i3-12100", 
    price: "2 960 Kč", 
    img: "procesor.webp", 
    purpose: "Mozek počítače, který provádí veškeré výpočty a spouští programy.", 
    why: "Nejlepší poměr cena/výkon pro kancelář. Má vysoký výkon na 1 jádro a integrovanou grafiku UHD 730." 
  },
  ram: { 
    name: "RAM: Kingston FURY Beast 16GB", 
    price: "3 489 Kč", 
    img: "operace.webp", 
    purpose: "Operační paměť pro uchování právě otevřených aplikací a záložek.", 
    why: "16GB je ideální kapacita pro plynulý chod bez zasekávání. Kingston je nejspolehlivější značka na trhu." 
  },
  ssd: { 
    name: "Disk: Verbatim Vi3000 512GB", 
    price: "2 129 Kč", 
    img: "512.webp", 
    purpose: "Rychlé NVMe SSD úložiště pro operační systém a dokumenty.", 
    why: "Až 10x rychlejší než staré HDD disky. Windows se načte za pár sekund a 512GB bohatě stačí na dokumenty." 
  },
  board: {
    name: "Skříň: Gamemax Silent HILL / H606", // Přidány uvozovky
    price: "859 Kč", // Přidány uvozovky
    img: "skrin.webp",
    purpose: "Skříň pro umístění všech komponent a jejich chlazení.",
    why: "Tichá skříň s dostatkem prostoru pro komponenty a dobrým prouděním vzduchu. Snadná montáž."
  },
  source: {
    name: "Zdroj: Corsair RM850x ATX 3.1", // Přidány uvozovky
    price: "3 799 Kč", // Přidány uvozovky
    img: "zdroj.webp",
    purpose: "Zdroj pro napájení všech komponent.",
    why: "Kvalitní zdroj s vysokou účinností a tichým chodem. Poskytuje dostatek energie pro všechny komponenty a budoucí rozšíření." 
  },
  gpu: { 
    name: "Grafika: Intel UHD Graphics 730", 
    price: "V ceně procesoru", 
    img: "intel.jpg", 
    purpose: "Zobrazuje obraz na monitoru.", 
    why: "Integrovaná grafika šetří tisíce korun i energii. Zvládne 4K video i práci na dvou monitorech." 
  },
  monitor: { 
    name: "Monitor: ASUS", 
    price: "9 290 Kč", 
    img: "monitor.webp", 
    purpose: "Displej pro zobrazení pracovní plochy.", 
    why: "Špičkový obraz šetrný k očím díky technologii Flicker-Free a redukci modrého světla." 
  },
  keyboard: { 
    name: "Klávesnice: HP 230 CZ/SK", 
    price: "749 Kč", 
    img: "klavesnice.jpg", 
    purpose: "Vstupní zařízení pro psaní textu a čísel.", 
    why: "Tiché klávesy s nízkým zdvihem pro pohodlné psaní bez únavy a plné české rozložení." 
  },
  mouse: { 
    name: "Myš: HP Z3700 Dual", 
    price: "499 Kč", 
    img: "mys.jpg", 
    purpose: "Zařízení pro ovládání kurzoru.", 
    why: "Přesný optický snímač, ergonomický tvar a dlouhá výdrž baterie." 
  },
  cables: { 
    name: "Propojovací a napájecí kabely", 
    price: "V balení (0 Kč)", 
    img: "kabel.webp", 
    purpose: "Napájení a propojení monitoru a periferií s PC.", 
    why: "Všechny potřebné kabely (HDMI, 230V, USB) jsou již součástí balení monitoru a zdroje." 
  }
};

// Generování mřížky produktů vedle sebe
const gridEl = document.getElementById('grid');
if (gridEl) {
  Object.keys(data).forEach(key => {
    gridEl.innerHTML += `
      <a href="detail.html?id=${key}" class="product-card">
        <div class="product-title">${data[key].name}</div>
        <div class="product-price">${data[key].price}</div>
      </a>`;
  });
}

// Zobrazení detailu na detail.html
const params = new URLSearchParams(window.location.search);
const id = params.get('id');
if (id && data[id]) {
  document.getElementById('title').innerText = data[id].name;
  document.getElementById('price').innerText = data[id].price;
  document.getElementById('img').src = data[id].img;
  document.getElementById('purpose').innerText = data[id].purpose;
  document.getElementById('why').innerText = data[id].why;
}
const data = {
  cpu: { 
    name: "Procesor", 
    fullName: "Procesor: Intel Core i3-12100", 
    price: "2 960 Kč", 
    img: "procesor.webp", 
    purpose: "Mozek počítače, který provádí veškeré výpočty a spouští programy.", 
    why: "Nejlepší poměr cena/výkon pro kancelář. Má vysoký výkon na 1 jádro a integrovanou grafiku UHD 730." 
  },
  ram: { 
    name: "RAM Paměť", 
    fullName: "RAM: Kingston FURY Beast 16GB", 
    price: "3 489 Kč", 
    img: "operace.webp", 
    purpose: "Operační paměť pro uchování právě otevřených aplikací a záložek.", 
    why: "16GB je ideální kapacita pro plynulý chod bez zasekávání." 
  },
  ssd: { 
    name: "Disk SSD", 
    fullName: "Disk: Verbatim Vi3000 512GB", 
    price: "2 129 Kč", 
    img: "512.webp", 
    purpose: "Rychlé NVMe SSD úložiště pro operační systém a dokumenty.", 
    why: "Až 10x rychlejší než staré HDD disky. Windows se načte za pár sekund." 
  },
  board: {
    name: "PC Skříň",
    fullName: "Skříň: Gamemax Silent HILL / H606",
    price: "859 Kč",
    img: "skrin.webp",
    purpose: "Skříň pro umístění všech komponent a jejich chlazení.",
    why: "Tichá skříň s dostatkem prostoru pro komponenty."
  },
  source: {
    name: "Zdroj PC",
    fullName: "Zdroj: Corsair RM850x ATX 3.1",
    price: "3 799 Kč",
    img: "zdroj.webp",
    purpose: "Zdroj pro napájení všech komponent.",
    why: "Kvalitní zdroj s vysokou účinností a tichým chodem." 
  },
  gpu: { 
    name: "Grafická karta", 
    fullName: "Grafika: Intel UHD Graphics 730", 
    price: "V ceně procesoru", 
    img: "intel.jpg", 
    purpose: "Zobrazuje obraz na monitoru.", 
    why: "Integrovaná grafika šetří tisíce korun i energii." 
  },
  monitor: { 
    name: "Monitor", 
    fullName: "Monitor: ASUS", 
    price: "9 290 Kč", 
    img: "monitor.webp", 
    purpose: "Displej pro zobrazení pracovní plochy.", 
    why: "Špičkový obraz šetrný k očím díky technologii Flicker-Free." 
  },
  keyboard: { 
    name: "Klávesnice", 
    fullName: "Klávesnice: HP 230 CZ/SK", 
    price: "749 Kč", 
    img: "klavesnice.jpg", 
    purpose: "Vstupní zařízení pro psaní textu a čísel.", 
    why: "Tiché klávesy s nízkým zdvihem pro pohodlné psaní." 
  },
  mouse: { 
    name: "Myš", 
    fullName: "Myš: HP Z3700 Dual", 
    price: "499 Kč", 
    img: "mys.jpg", 
    purpose: "Zařízení pro ovládání kurzoru.", 
    why: "Přesný optický snímač, ergonomický tvar a dlouhá výdrž." 
  },
  cables: { 
    name: "Kabeláž", 
    fullName: "Propojovací a napájecí kabely", 
    price: "V balení (0 Kč)", 
    img: "kabel.webp", 
    purpose: "Napájení a propojení monitoru a periferií s PC.", 
    why: "Všechny potřebné kabely jsou již součástí balení." 
  }
};

const desktopEl = document.getElementById('desktop');

// Funkce pro vygenerování složek na náhodných pozicích
function generateRandomFolders() {
  desktopEl.innerHTML = '';
  
  // Zjištění rozměrů obrazovky (s rezervou na okraje a lištu)
  const maxLeft = window.innerWidth - 120;
  const maxTop = window.innerHeight - 180;

  Object.keys(data).forEach(key => {
    // Výpočet náhodné X a Y pozice
    const randomLeft = Math.floor(Math.random() * Math.max(maxLeft, 50)) + 20;
    const randomTop = Math.floor(Math.random() * Math.max(maxTop, 50)) + 20;

    const folderDiv = document.createElement('div');
    folderDiv.className = 'folder';
    folderDiv.style.left = `${randomLeft}px`;
    folderDiv.style.top = `${randomTop}px`;
    folderDiv.onclick = () => openWindow(key);

    folderDiv.innerHTML = `
      <div class="folder-icon">📁</div>
      <div class="folder-name">${data[key].name}</div>
    `;

    desktopEl.appendChild(folderDiv);
  });
}

// Otevření okna s detailem
function openWindow(id) {
  const item = data[id];
  document.getElementById('win-title').innerText = item.fullName;
  document.getElementById('win-price').innerText = "Cena: " + item.price;
  document.getElementById('win-img').src = item.img;
  document.getElementById('win-purpose').innerText = item.purpose;
  document.getElementById('win-why').innerText = item.why;
  document.getElementById('window').style.display = 'block';
}

function closeWindow() {
  document.getElementById('window').style.display = 'none';
}

// Hodiny v liště
function updateClock() {
  const now = new Date();
  document.getElementById('clock').innerText = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}

setInterval(updateClock, 1000);
updateClock();

// Vygeneruje složky při načtení
generateRandomFolders();
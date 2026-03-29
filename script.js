// ENVELOPE LOGIC
$(document).ready(function () {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelope.click(function () { open(); });
    btn_open.click(function () { open(); });
    btn_reset.click(function () { close(); });

    function open() { envelope.addClass("open").removeClass("close"); }
    function close() { envelope.addClass("close").removeClass("open"); }
});

// PROPOSAL LOGIC
const mainText = document.getElementById("main-text");
const mainGif = document.getElementById("main-gif");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");

const headings = [
    "Will you be my Second Date? 🥺",
    "Soch le achee se !? 🤔",
    "Ek aur baar soch lo jii !? 🫣",
    "Maan ja nah kitna bhao khayegi ? 😭",
    "Dil tod dogi mera? 💔",
    "Aise karogi mere sath? 🥺",
    "Main sach mein ro dunga ab... 😭",
    "Please maan jao na meri pyari! ❤️",
    "Last warning, daba do YES! 😤"
];

const noButtonTexts = [
    "No", "Are you sure?", "Really sure?", "Think again!", 
    "Pagal ho kya?", "Nahi manungi?", "Galat button!", 
    "No way!", "Stop!", "Stop yaar!", "Stop it!", "Stop, press Yes!", "Stop 😭"
];

const gifs = [
    "https://media.tenor.com/ef30B62_N10AAAAi/mochi-peach.gif",
    "https://media.tenor.com/T5Z_Geqy1QMAAAAi/mochi-peach.gif",
    "https://media.tenor.com/ZNB4e2jBbgYAAAAi/peach-goma.gif",
    "https://media.tenor.com/5JmSztT6E_gAAAAi/peach-goma.gif",
    "https://media.tenor.com/8NnE59W9Zg4AAAAi/peach-cat.gif"
];

let hoverCount = 0;
let yesButtonScale = 1; 

noBtn.addEventListener("mouseover", () => {
    hoverCount++;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const randomX = Math.floor(Math.random() * (windowWidth - btnWidth));
    const randomY = Math.floor(Math.random() * (windowHeight - btnHeight));

    noBtn.style.position = "fixed"; 
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;

    const noTextIndex = Math.min(hoverCount, noButtonTexts.length - 1);
    noBtn.innerText = noButtonTexts[noTextIndex];

    const headingIndex = Math.min(hoverCount, headings.length - 1);
    mainText.innerText = headings[headingIndex];

    const gifIndex = Math.min(Math.floor(hoverCount / 2), gifs.length - 1);
    mainGif.src = gifs[gifIndex];

    yesButtonScale += 0.4; 
    yesBtn.style.transform = `scale(${yesButtonScale})`;
});

yesBtn.addEventListener("click", () => {
    mainText.innerText = "YAYYY! I knew you'd say Yes! Can't wait to meet you again! ❤️✨";
    mainGif.src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"; 
    
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    mainText.style.backgroundColor = "transparent"; 
});
// ==========================
// ENVELOPE LOGIC
// ==========================
$(document).ready(function () {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelope.click(function () { open(); });
    btn_open.click(function () { open(); });
    btn_reset.click(function () { close(); });

    function open() { envelope.addClass("open").removeClass("close"); }
    function close() { envelope.addClass("close").removeClass("open"); }
});

// ==========================
// PROPOSAL LOGIC
// ==========================
const mainText = document.getElementById("main-text");
const mainGif = document.getElementById("main-gif");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");

const headings = [
    "Will you be my Second Date? 🥺",
    "Soch le achee se !? 🤔",
    "Ek aur baar soch lo jii !? 🫣",
    "Maan ja nah kitna bhao khayegi ? 😭",
    "Dil tod dogi mera? 💔",
    "Aise karogi mere sath? 🥺",
    "Main sach mein ro dunga ab... 😭",
    "Please maan jao na meri pyari! ❤️",
    "Last warning, daba do YES! 😤"
];

const noButtonTexts = [
    "No", "Are you sure?", "Really sure?", "Think again!", 
    "Pagal ho kya?", "Nahi manungi?", "Galat button!", 
    "No way!", "Stop!", "Stop yaar!", "Stop it!", "Stop, press Yes!", "Stop 😭"
];

const gifs = [
    "https://media.tenor.com/ef30B62_N10AAAAi/mochi-peach.gif",
    "https://media.tenor.com/T5Z_Geqy1QMAAAAi/mochi-peach.gif",
    "https://media.tenor.com/ZNB4e2jBbgYAAAAi/peach-goma.gif",
    "https://media.tenor.com/5JmSztT6E_gAAAAi/peach-goma.gif",
    "https://media.tenor.com/8NnE59W9Zg4AAAAi/peach-cat.gif"
];

let hoverCount = 0;
let yesButtonScale = 1; 

// We bundle the "dodging" logic into a single function so we can use it for both clicks AND hovers
function dodgeButton(event) {
    // This stops the phone from firing a 'click' and 'touch' at the exact same time (preventing double-skips)
    if(event.type === 'touchstart') {
        event.preventDefault(); 
    }

    hoverCount++;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // Added a small safety margin (20px) so the button never gets stuck halfway off the phone screen
    const safeMargin = 20; 
    const randomX = Math.floor(Math.random() * (windowWidth - btnWidth - safeMargin * 2)) + safeMargin;
    const randomY = Math.floor(Math.random() * (windowHeight - btnHeight - safeMargin * 2)) + safeMargin;

    noBtn.style.position = "fixed"; 
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;

    const noTextIndex = Math.min(hoverCount, noButtonTexts.length - 1);
    noBtn.innerText = noButtonTexts[noTextIndex];

    const headingIndex = Math.min(hoverCount, headings.length - 1);
    mainText.innerText = headings[headingIndex];

    const gifIndex = Math.min(Math.floor(hoverCount / 2), gifs.length - 1);
    mainGif.src = gifs[gifIndex];

    yesButtonScale += 0.4; 
    yesBtn.style.transform = `scale(${yesButtonScale})`;
}

// Listen for mouse hovers (Computers)
noBtn.addEventListener("mouseover", dodgeButton);
// Listen for screen taps (Mobile Phones)
noBtn.addEventListener("touchstart", dodgeButton, { passive: false });
// Listen for physical clicks just to be 100% safe
noBtn.addEventListener("click", dodgeButton);

yesBtn.addEventListener("click", () => {
    mainText.innerText = "YAYYY! I knew you'd say Yes! Can't wait to meet you again! ❤️✨";
    mainGif.src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"; 
    
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    mainText.style.backgroundColor = "transparent"; 
});

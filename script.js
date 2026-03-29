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

// THE MOBILE-FRIENDLY DODGE FUNCTION
function moveNoButton(event) {
    // If triggered by a touch screen tap, prevent default browser click behaviors to avoid double-firing
    if(event && event.type === 'touchstart') {
        event.preventDefault(); 
    }

    hoverCount++;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // Strict boundary math: Ensures the button stays fully within the screen limits with a 20px padding
    const maxX = windowWidth - btnWidth - 20;
    const maxY = windowHeight - btnHeight - 20;

    const randomX = Math.max(10, Math.floor(Math.random() * maxX));
    const randomY = Math.max(10, Math.floor(Math.random() * maxY));

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

// Event listener for laptops/mice
noBtn.addEventListener("mouseover", moveNoButton);

// Event listener specifically tuned for mobile device taps
noBtn.addEventListener("touchstart", moveNoButton, { passive: false });

// Fallback click listener just in case
noBtn.addEventListener("click", moveNoButton);

// Success action
yesBtn.addEventListener("click", () => {
    mainText.innerText = "YAYYY! I knew you'd say Yes! Can't wait to meet you again! ❤️✨";
    mainGif.src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"; 
    
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    mainText.style.backgroundColor = "transparent"; 
});

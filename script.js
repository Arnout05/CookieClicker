let Cookies = 0;
let cookiesPerSecond = 0;

let cookieAmount = document.getElementById("cookieAmount");
let cookiesPerSecondId = document.getElementById("cookiesPerSecond");
let theCookie = document.getElementById("Cookie");

var String, yourCookies = "You have "
var String, yourCookies2 = " cookies"
var String, cookiesPerSecondAmount = "Cookies per second: "


cookiesPerSecondId.innerHTML = cookiesPerSecondAmount + cookiesPerSecond;
cookieAmount.innerHTML = yourCookies + Cookies + yourCookies2;
theCookie.addEventListener("click", addCookie);

function addCookie(){
    Cookies++;
    cookieAmount.innerHTML = yourCookies + Cookies + yourCookies2;
}

//Cookies per second
setInterval(addCookiesEverySecond, 1000);

function addCookiesEverySecond(){
    Cookies = Cookies + cookiesPerSecond;
    Cookies = Math.round(Cookies * 10) / 10;
    cookiesPerSecondId.innerHTML = cookiesPerSecondAmount + cookiesPerSecond;
    cookieAmount.innerHTML = yourCookies + Cookies + yourCookies2;    
}

//Cusrors

let cursorCookiesPerSecond = 0;
let cursorPrice = 15;
let priceAdd
let cursors = 0;
let cursorButton = document.getElementById("cursorButton");
var String, cursorButtonText = "Cursors ";
var String, cursorPriceText = " Price: "

cursorButton.innerHTML = cursorButtonText + cursors + cursorPriceText + cursorPrice;
cursorButton.addEventListener("click", buyCursor);

function buyCursor(){
    if(Cookies >= cursorPrice){
        cursors++;
        Cookies = Cookies - cursorPrice
        cursorCookiesPerSecond = cursors * 0.1;
        cookiesPerSecond = cookiesPerSecond + cursorCookiesPerSecond;
        cookiesPerSecond = Math.round(cookiesPerSecond * 10) / 10;
        cursorButton.innerHTML = cursorButtonText + cursors + cursorPriceText + cursorPrice;
        raiseCursorPrice();
    }
    
}

function raiseCursorPrice(){
    priceAdd = cursorPrice/100;
    priceAdd = priceAdd*15;
    priceAdd = Math.round(priceAdd);
    cursorPrice = cursorPrice + priceAdd;
    cursorButton.innerHTML = cursorButtonText + cursors + cursorPriceText + cursorPrice;
}
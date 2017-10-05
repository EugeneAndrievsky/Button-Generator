var bawPrice = 800;
var hosPrice = 400;
var whPrice = 1200;

var totalPrice = bawPrice + hosPrice + whPrice;
var bundlePrice = 1500;
var ecoPrice = totalPrice - bundlePrice;

var BaW = document.getElementById('baw-price');
BaW.textContent = (bawPrice + " руб.");

var HoS = document.getElementById('hos-price');
HoS.textContent = (hosPrice + " руб.");

var WH = document.getElementById('wh-price');
WH.textContent = (whPrice + " руб.");

var total = document.getElementById('total-price');
total.textContent = (totalPrice + " руб.");

var bundle = document.getElementById('bundle-price');
bundle.textContent = (bundlePrice + " руб.");

var eco = document.getElementById('eco-price');
eco.textContent = (ecoPrice + " руб.");
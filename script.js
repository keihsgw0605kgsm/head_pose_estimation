const cv = require('@mjyc/opencv.js')
//import cv from "./opencv.js";
var txt = document.getElementById('text')

window.onload = function() {
    txt.textContent = "1"
    cv.solvePnP();
    txt.textContent = "2"
}
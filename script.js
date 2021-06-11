//const opencv = require('@mjyc/opencv.js/opencv.js')
import cv from "@mjyc/opencv.js";
var txt = document.getElementById('text1')

window.onload = function() {
    txt.textContent = "1"
    cv.solvePnP();
    txt.textContent = "2"
}
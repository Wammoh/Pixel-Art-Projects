// set global Variables

const colorPicker = document.getElementById("colorPicker");
const sizePicker = document.getElementById("sizePicker");
const canvas = document.getElementById("pixelCanvas");

// Your code goes here!
(function() {
    'use strict';

    // add listener to select grid size
    sizePicker.addEventListener('submit', function(event) {
        event.preventDefault();
      // get input for makeGrid
      const width = document.getElementById('inputWidth').value;
      const height = document.getElementById('inputHeight').value;
      makeGrid(width, height);
    })

    // Draw grid canvas
    function makeGrid(width, height) {
      	// Create a canvas :
    canvas.innerHTML = '';
    for (var t = 0; t < height; t++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < width; j++) {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(''));
            tr.appendChild(td);
            canvas.appendChild(tr);}

        canvas.addEventListener("click", function (event) {
            if (event.target.tagName === 'td'||'tr') {
              var color = document.querySelector("#colorPicker").value;
              event.target.style.backgroundColor = color;}
            })
        }
    }
}());

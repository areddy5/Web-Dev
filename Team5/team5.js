function myFunction(){

var modal = document.getElementById('myModal');


var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}


var span = document.getElementsByClassName("close")[0];


span.onclick = function() {
    modal.style.display = "none";
}
}

function myFunction1(){

var modal = document.getElementById('myModal1');


var img = document.getElementById('myImg1');
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("caption1");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}


var span = document.getElementsByClassName("close1")[0];


span.onclick = function() {
    modal.style.display = "none";
}
}

function myFunction2(){

var modal = document.getElementById('myModal2');


var img = document.getElementById('myImg2');
var modalImg = document.getElementById("img03");
var captionText = document.getElementById("caption2");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}


var span = document.getElementsByClassName("close2")[0];


span.onclick = function() {
    modal.style.display = "none";
}
}

function myFunction3(){

var modal = document.getElementById('myModal3');


var img = document.getElementById('myImg3');
var modalImg = document.getElementById("img04");
var captionText = document.getElementById("caption3");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close3")[0];


span.onclick = function() {
    modal.style.display = "none";
}
}


function myFunction4(){

var modal = document.getElementById('myModal4');


var img = document.getElementById('myImg4');
var modalImg = document.getElementById("img05");
var captionText = document.getElementById("caption4");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close4")[0];


span.onclick = function() {
    modal.style.display = "none";
}
}

function myFunction5(){

var modal = document.getElementById('myModal5');


var img = document.getElementById('myImg5');
var modalImg = document.getElementById("img06");
var captionText = document.getElementById("caption5");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close5")[0];


span.onclick = function() {
    modal.style.display = "none";
}
}

function myFunction6(){

var modal = document.getElementById('myModal6');


var img = document.getElementById('myImg6');
var modalImg = document.getElementById("img07");
var captionText = document.getElementById("caption6");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close6")[0];


span.onclick = function() {
    modal.style.display = "none";
}
}


function drop() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



function clear2(){
  document.getElementById("myForm").reset();
  window.alert("WE APPRECIATE YOUR RESPONSE");
}



function clear1(){
  document.getElementById("myForm1").reset();
  window.alert("WE APPRECIATE YOUR RESPONSE");
}

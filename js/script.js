var grilleWidth = 10;
var grilleHeight = 20;
var laGrille = document.querySelector('.Container')
for (i = 0; i < grilleWidth; i++) {
  laGrille.innerHTML += '<ul class="column" id=' + i + '></ul>';
  var column = document.getElementById(i);
  for (n = 0; n < grilleHeight; n++) {
    column.innerHTML += '<li class="box" id=' + ((i + 1) * 100 + (n + 1)) + '></li>'
  }
}
var a;
var b;

function createBox() {
  a = (Math.floor(Math.random() * 10) + 1) * 100;
  b = 1;

  var modifiedBox = document.getElementById(a + b);
  modifiedBox.className = "boxModified";
}
createBox();
window.addEventListener('keydown', function(event) {

  var modifiedBox = document.getElementById(a + b);
  modifiedBox.className = "box";

  if (event.which === 40 && b < grilleHeight) {
    b += 1;
  } else if (event.which === 39 && a < 1000) {
    a += 100;
  } else if (event.which === 37 && a > 100) {
    a -= 100;
  }

  var modifiedBox = document.getElementById(a + b);
  modifiedBox.className = "boxModified";

  if (b === grilleHeight) {
    modifiedBox.className = "boxFix";
    resetLine();
    createBox();
  }



  var compar = document.getElementById(a + (b + 1));
  if (compar.classList.contains("boxFix") === true) {
    modifiedBox.className = "boxFix";
    if (b === 2) {
      alert('GAME OVER');
    }
    resetLine();
    createBox();
  }

})

function loop() {
  var modifiedBox = document.getElementById(a + b);
  modifiedBox.className = "box";
  b += 1;
  var modifiedBox = document.getElementById(a + b);
  modifiedBox.className = "boxModified";

  if (b === grilleHeight) {
    modifiedBox.className = "boxFix";
    resetLine();
    createBox();
  }

  var compar = document.getElementById(a + (b + 1));
  if (compar.classList.contains("boxFix") === true) {
    modifiedBox.className = "boxFix";
    if (b === 2) {
      alert('GAME OVER');
    }
    resetLine();
    createBox();

  }
}

window.setInterval(loop, 500);

function resetLine() {
  for (var n = 3; n <= grilleHeight; n++) {
    c = 0;
    for (var x = 1; x <= grilleWidth; x++) {
      var compteur = document.getElementById((x * 100) + n);
      if (compteur.classList.contains("boxFix") === true) {
        c += 1;
        if (c === grilleWidth) {

          for (var a = 1; a <= grilleWidth; a++) {
            var compteur2 = document.getElementById((a * 100) + n);
            compteur2.className = "box";

          }
          descent();


        }
      }
    }
  }
}

function descent() {
  for (h=grilleHeight;h>1;h--){
    for (w=1;w<grilleWidth+1;w++){
      var bloc=document.getElementById(w*100+h);
      console.log(w*100+h);
      console.log(bloc);
      if(bloc.classList.contains("box")===true){
        var upper=document.getElementById(w*100+(h-1));
        if(upper.classList.contains("boxFix")===true){
          bloc.className="boxFix";
          upper.className="box";
        }
      }
    }
  }
}
/*
  function loop (){
    var modifiedBox1=document.getElementById(a+b);
    var modifiedBox2=document.getElementById(c+d);
    var modifiedBox3=document.getElementById(e+f);
    var modifiedBox4=document.getElementById(g+h);

    modifiedBox1.className="box";
    modifiedBox1.className="box";
    modifiedBox1.className="box";
     b += 1;
    var modifiedBox=document.getElementById(a+b);
    modifiedBox.className="boxModified";
    }



  var forme1 = {

  }




  function generateForm() {

  }

  var modifiedBox = [];

  for (var i = 0; i<4; i++){
     modifiedBox[i] = document.getElementById(a+b);
     modifiedBox[i].className="boxModified";
  }

  */

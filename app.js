function myFunction() {
  let x1 = document.getElementById("food1").value;
  let y1 = document.getElementById("food2").value;
  let match=0;
  let a1 = x1.toUpperCase();
  let b1 = y1.toUpperCase();
  if(a1==b1){
    match=match+1;
  }
  let x2 = document.getElementById("subject1").value;
  let y2 = document.getElementById("subject2").value;
  let a2 = x2.toUpperCase();
  let b2 = y2.toUpperCase();
  if(a2==b2){
    match=match+1;
  }

  let x3 = document.getElementById("aim1").value;
  let y3 = document.getElementById("aim2").value;
  let a3 = x3.toUpperCase();
  let b3 = y3.toUpperCase();
  if(a3==b3){
    match=match+1;
  }

  let x4 = document.getElementById("tattoo1").value;
  let y4 = document.getElementById("tattoo2").value;
  let a4 = x4.toUpperCase();
  let b4 = y4.toUpperCase();
  if(a4==b4){
    match=match+1;
  }

  let x5 = document.getElementById("life1").value;
  let y5 = document.getElementById("life2").value;
  let a5 = x5.toUpperCase();
  let b5 = y5.toUpperCase();
  if(a5==b5){
    match=match+1;
  }
  let x6 = document.getElementById("hw1").value;
  let y6 = document.getElementById("hw2").value;
  let a6 = x6.toUpperCase();
  let b6 = y6.toUpperCase();
  if(a6==b6){
    match=match+1;
  }

  let x7 = document.getElementById("color1").value;
  let y7 = document.getElementById("color2").value;
  let a7 = x7.toUpperCase();
  let b7 = y7.toUpperCase();
  if(a7==b7){
    match=match+1;
  }
  let x8 = document.getElementById("place1").value;
  let y8 = document.getElementById("place2").value;
  let a8 = x8.toUpperCase();
  let b8 = y8.toUpperCase();
  if(a8==b8){
    match=match+1;
  }

  let x9 = document.getElementById("picture1").value;
  let y9 = document.getElementById("picture2").value;
  let a9 = x9.toUpperCase();
  let b9 = y9.toUpperCase();
  if(a9==b9){
    match=match+1;
  }
  let x10 = document.getElementById("ride1").value;
  let y10 = document.getElementById("ride2").value;
  let a10 = x10.toUpperCase();
  let b10 = y10.toUpperCase();
  if(a10==b10){
    match=match+1;
  }
  let n1= document.getElementById("name1").value;
  let n2= document.getElementById("name2").value;
   if(x1!="" && x2!="" && x3!="" && x4!="" && x5!="" && x6!="" && x7!="" && x8!="" && x9!="" && x10!=""
     && y1!="" && y2!="" && y3!="" && y4!="" && y5!="" && y6!="" && y7!="" && y8!="" && y9!="" && y10!=""){
      document.getElementById("r").innerHTML=n1+" & "+n2+" "+10*match+"% matched" ;
      document.getElementById("myform1").reset();
      document.getElementById("myform2").reset();
    }
    else{
      alert("please enter all the fields!!!")
    }
   
  }

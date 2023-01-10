function myFunction() {
  let x1 = document.getElementById("food1").value;
  let y1 = document.getElementById("food2").value;
  let match=0;
  if(x1==y1){
    match=match+1;
  }
  let x2 = document.getElementById("subject1").value;
  let y2 = document.getElementById("subject2").value;
  if(x2==y2){
    match=match+1;
  }

  let x3 = document.getElementById("aim1").value;
  let y3 = document.getElementById("aim2").value;
  if(x3==y3){
    match=match+1;
  }

  let x4 = document.getElementById("tattoo1").value;
  let y4 = document.getElementById("tattoo2").value;
  if(x4==y4){
    match=match+1;
  }

  let x5 = document.getElementById("life1").value;
  let y5 = document.getElementById("life2").value;
  if(x5==y5){
    match=match+1;
  }
  let x6 = document.getElementById("hw1").value;
  let y6 = document.getElementById("hw2").value;
  if(x6==y6){
    match=match+1;
  }

  let x7 = document.getElementById("color1").value;
  let y7 = document.getElementById("color2").value;
  if(x7==y7){
    match=match+1;
  }
  
  let x8 = document.getElementById("place1").value;
  let y8 = document.getElementById("place2").value;
  if(x8==y8){
    match=match+1;
  }

  let x9 = document.getElementById("picture1").value;
  let y9 = document.getElementById("picture2").value;
  if(x9==y9){
    match=match+1;
  }
  let x10 = document.getElementById("ride1").value;
  let y10 = document.getElementById("ride2").value;
  if(x10==y10){
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
      document.getElementById("you").style.display="block";
    }
    document.getElementById("you").style.display="block";
  }
 function myFun(){
  document.getElementById("you").style.display="none";
 }

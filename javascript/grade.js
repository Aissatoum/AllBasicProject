
function Total(){
  var sub1 = parseInt(document.getElementById("eng").value);
  var sub2 = parseInt(document.getElementById("mat").value);
  var sub3 = parseInt(document.getElementById("phy").value);
  var sub4 = parseInt(document.getElementById("urd").value);
  var sub5 = parseInt(document.getElementById("sci").value);
  if(sub1>100 || sub2>100 || sub4>100 || sub5>100){
    alert("Please Enter mark in range of 100");
  }
  else{
    var totol = sub1 + sub2 + sub3 + sub4 + sub5;
    document.getElementById("total").innerHTML = "English marks: " + sub1+ " <br> Mathmatics marks : " + sub2+ " <br> Physics marks :" + sub3+ "<br> Computer marks :"+ sub4+ " Science marks "+ sub5+"<br>__________<br> Total marks " + totol;
  }
}
function Average(){
  var sub1 = parseInt(document.getElementById("eng").value);
  var sub2 = parseInt(document.getElementById("mat").value);
  var sub3 = parseInt(document.getElementById("phy").value);
  var sub4 = parseInt(document.getElementById("urd").value);
  var sub5 = parseInt(document.getElementById("sci").value);
  if(sub1>100 || sub2>100 || sub4>100 || sub5>100){
    alert("Please Enter mark in range of 100");
  }
  else{
    var totol = sub1 + sub2 + sub3 + sub4 + sub5;
    var ave = totol/5;
    document.getElementById("ave").innerHTML="your average marks is:"+ave;
  }
}
function grade(){
  var sub1 = parseInt(document.getElementById("eng").value);
  var sub2 = parseInt(document.getElementById("mat").value);
  var sub3 = parseInt(document.getElementById("phy").value);
  var sub4 = parseInt(document.getElementById("urd").value);
  var sub5 = parseInt(document.getElementById("sci").value);
  if(sub1>100 || sub2>100 || sub4>100 || sub5>100){
    alert("Please Enter mark in range of 100");
  }
  else{
    var totol = sub1 + sub2 + sub3 + sub4 + sub5;
    var ave = totol/5;
    if(ave>=80 && ave<=100){
      document.getElementById("grade").innerHTML="your grade is A";
    }
    else  if(ave>=75 && ave<=80){
      document.getElementById("grade").innerHTML="your grade is B+";
    }
    else  if(ave>=70 && ave<=75){
      document.getElementById("grade").innerHTML="your grade is B";
    }
    else  if(ave>=65 && ave<=70){
      document.getElementById("grade").innerHTML="your grade is C+";
    }
    else  if(ave>=60 && ave<=65){
      document.getElementById("grade").innerHTML="your grade is D+";
    }
    else  if(ave>=50 && ave<=60){
      document.getElementById("grade").innerHTML="your grade is D";
    }
    else{
      document.getElementById("grade").innerHTML="your grade is F"
    }
  }
}

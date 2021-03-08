var family=["kid.jpg",
            "fater.png",
            "moter.png",
            "grandpa.jpg",
            "grandma.jpg",
            "uncle.png",
            "aunt.png",
            "kutta.jpg"];

 var Name=["Shashwat Shandilya",
          "Sushil Kumar",
          "Archana Sharma", 
          "Nawal Kishore Choudhary",
          "Leela Devi",
          "Pawan Kumar Choudhary",
          "Shweta Kumari",
          "Ginger"];

  var Relation=["Son (Myself)",
              "Father",
              "Mother",
              "Grand Father",
              "Grand Mother", 
              "Uncle",
              "Aunt",
              "Dog"]

 var i=0;
 function movenext() {
    document.getElementById("textchange").innerHTML=Name[i];
    document.getElementById("relation").innerHTML=Relation[i];
    document.getElementById("imgchange").src=family[i];
    i++
    if(i == 8)
    {
      i=0;
    }
 }

 /*function moveback() {
   if(i == 0)
   {
     i=8;
   }
   else
   {
     i--;
   }
   document.getElementById("textchange").innerHTML=Name[i];
   document.getElementById("relation").innerHTML=Relation[i];
   document.getElementById("imgchange").src=family[i];
 }*/

 function test(){
	 
	  document.getElementById("text1").innerHTML=cont;
	  document.getElementById("author").innerHTML=uname;
	
  document.getElementById("text1").style.color=tcolor;

  
switch(lo)
{case 0: document.getElementById("backgroundimage").style.backgroundImage = "url('bgimages/1.png')";tpath="bgimages/1.png";break;
case 1: document.getElementById("backgroundimage").style.backgroundImage = "url('bgimages/2.png')"; tpath="bgimages/2.png";break;
case 2: document.getElementById("backgroundimage").style.backgroundImage = "url('bgimages/3.png')"; tpath="bgimages/3.png";break;
case 3: document.getElementById("backgroundimage").style.backgroundImage = "url('bgimages/4.png')"; tpath="bgimages/4.png";break;
case 4: document.getElementById("backgroundimage").style.backgroundImage = "url('bgimages/5.png')";tpath="bgimages/5png"; break;
case 5: document.getElementById("backgroundimage").style.backgroundImage = "url('bgimages/6.png')"; tpath="bgimages/6.png";break;
case 6: document.getElementById("backgroundimage").style.backgroundImage = "url('bgimages/7.png')";tpath="bgimages/7.png";break;
case 7: document.getElementById("backgroundimage").style.backgroundImage = "url('bgimages/8.png')"; tpath="bgimages/8.png";break;
case 8: document.getElementById("backgroundimage").style.backgroundImage = "url('bgimages/9.png')"; tpath="bgimages/9.png";break;
case 9: document.getElementById("backgroundimage").style.backgroundImage = "url('bgimages/10.png')"; tpath="bgimages/10.png";break;
case 10: document.getElementById("backgroundimage").style.backgroundImage = "url('bgimages/11.png')"; tpath="bgimages/11.png";break;
case 11: document.getElementById("backgroundimage").style.backgroundImage = "url('bgimages/12.png')"; tpath="bgimages/12.png";break;
case 12: document.getElementById("backgroundimage").style.backgroundImage = "url('bgimages/13.png')";tpath="bgimages/13.png"; break;
}
	  }

 function sub()
        {
          var usname=document.getElementById("us").value;
     var cont=document.getElementById("cont").value;
	 var background=s;
	 var textcolor=document.getElementById("tcolor").value;
//     alert("hey"+usname+"    "+cont+"    "+background+"   "+textcolor);
  //  alert("hey2");
  
   if(cont=="")
   {
      alert("Enter confession please");
   }
  
   else{   
          if(usname=="")
         {    localStorage.setItem("uname", "Anomynous"); }
            else
           { localStorage.setItem("uname", usname); }
         
   localStorage.setItem("tcolor",textcolor);
	  localStorage.setItem("cont", cont);
	   localStorage.setItem("background", background);
           
       
          document.getElementById("mform").submit();
   }
        }

function go()
   {
//date month year

    var FontSize = window.getComputedStyle(document.getElementById("text1")).fontSize;
	var lh	= window.getComputedStyle(document.getElementById("text1")).lineHeight;
	
	//alert("line height:"+lh+" and font size:"+FontSize );
	
	var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
if (dd < 10) {
  dd = '0' + dd;
} 
if (mm < 10) {
  mm = '0' + mm;
} 
	
 ///storing data  
    var fbr =firebase.database().ref();
      
       fbr.child('confession').push(
{
  content:cont,
  username:uname,
  textcolor:tcolor,
  bgimage:tpath,
  date:dd,
  month:mm,
  year:yyyy,
  fontSize:FontSize,
  height:lh
}


);


          alert("confession added ..do check our social media");
		  document.getElementById("demo-show-toast").innerHTML= "submitted";
        document.getElementById("demo-show-toast").disabled = true;
		var timer = setTimeout(function() {
            window.location='index.html'
        }, 5000);
             
   
   
   }
   
   

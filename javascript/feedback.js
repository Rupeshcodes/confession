function feedbac()
   {
//date month year

    var feed = document.getElementById("f").value;
var user = document.getElementById("uname").value;
var email = document.getElementById("uemail").value;

if(feed=="")
{
	alert("please enter feedback / Query");
}

else
{   
if(user=="")
{ 
  user="not given"
}
if(email=="")
{ 
  email="not given"
}

	
 ///storing data  
    var fbr =firebase.database().ref();
      
       fbr.child('feedback').push(
{
  feedback:feed,
  name:user,
  Emailid:email
}


);


          alert("feedback added");     
   
   }
   
   }
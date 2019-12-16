function signUp(){
  var emailID = document.myForm.EMail.value;
  atops = emailID.indexOf("@");
  dotpos = emailID.lastIndexOf(".");

 if (atops < 1|| ( dotops - atpos < 2 )){
   alert("Please enter correct email ID");
   document.myForm.EMail.focus();
   return false;
  }

  if( document.myForm.Password.value == "" )
  {
    alert( "Please provide your password!");
    document.myForm.Password.focus() ;
    return false;
  }
}

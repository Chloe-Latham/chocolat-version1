function validate() {

  if( document.myForm.Name.value == "" )
  {
    alert( "Please provide your name!");
    document.myForm.Name.focus() ;
    return false;
  }

  if( document.myForm.EMail.value == "" )
  {
    alert( "Please provide your EMail!" );
    document.myForm.EMail.focus();
    return false;
  }
  var emailID = document.myForm.EMail.value;
  atops = emailID.indexOf("@");
  dotpos = emailID.lastIndexOf(".");

 if (atops < 1|| ( dotops - atpos < 2 )){
   alert("Please enter correct email ID")
   document.myForm.EMail.focus();
   return false;
  }

if( document.myFor.Postcode.value == "")
{
  alert( "Please provide a postcode in the format #### ###.");
  document.myFor.Postcode.focus() ;
  return false;
}

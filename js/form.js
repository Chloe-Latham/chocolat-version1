function validate() {

  if( document.myForm.FirstName.value == "" )
  {
    alert( "Please provide your first name!");
    document.myForm.FirstName.focus() ;
    return false;
  }

  if( document.myForm.SecondName.value == "" )
  {
    alert( "Please provide your second name!");
    document.myForm.SecondName.focus() ;
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
   alert("Please enter correct email ID");
   document.myForm.EMail.focus();
   return false;
  }

  if( document.myForm.Address.value == "" )
  {
    alert( "Please provide your address!");
    document.myForm.Address.focus() ;
    return false;
  }

if( document.myForm.Postcode.value == "")
{
  alert( "Please provide a postcode in the format #### ###.");
  document.myFor.Postcode.focus() ;
  return false;
}

if( document.myForm.BankDetails.value == "" )
{
  alert( "Please provide your bank details!");
  document.myForm.Name.focus() ;
  return false;
}

}

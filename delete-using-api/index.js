
 
function addContact(){

    let contact_name = document.getElementById("new_name").value;  //  .value means input value 
    let contact_email = document.getElementById("new_email").value;
    let contact_number = document.getElementById("new_number").value;
    let a = document.getElementsByName("select-radio")
    for (i=0; i< a.length; i++){
        if(a[i].checked)
        document.getElementById("card-nameee").innerHTML=a[i].value;
    }
    
     document.getElementById("new_h3").innerHTML=contact_name;
     document.getElementById("new_emaill").innerHTML=contact_email;
     document.getElementById("new_numberr").innerHTML=contact_number;

     document.getElementById("add_contact_btn").addEventListener("click", displayNewCard())

     function displayNewCard(){
     document.getElementById("new_cardd").style.display="block";


    }





}
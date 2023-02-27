

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json  => {

       for(let i = 0; i < json.length; i++){
        document.getElementById("card_add").innerHTML +=
        (`<div id = "${json[i].id}" class="profile_card">

        <div class="profile_card_inner"> 
           <h3>${json[i].name}</h3>
           <p><i class="fa-regular fa-envelope"></i>${json[i].email}</p>
           <p><i class="fa-solid fa-phone"></i>${json[i].phone}</p>
           <ul class="btn_list">
            <li><button class="profile_btn_1" >Edit</button></li>
            <li><button onclick = "remove(${json[i].id})" class="profile_btn_2" >Delete</button></li>
           </ul>
        </div>
        <div class="profile_card_right">  
          <button class="profile_btn_right" >Professional</button>
          <img class="profile_img" src="images/raffi_ahmad_6.jpeg">
        </div>
      </div>`)
       }  

    });
    function remove(del){
        console.log(del);
        let dell = document.getElementById(del);
        dell.remove(); 
       }



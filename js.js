let $form = document.querySelector(".input-container");
let $input = document.querySelector("input");
let $msj = document.createElement("p");
let $regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;


document.addEventListener("submit", (event)=>{

    event.preventDefault();
    
    $input.value = $input.value.trim();
    
    if($input.value == "" || !$regex.test($input.value)){

        $msj.innerText = "Please provide a valid E-mail address";
        $msj.classList.remove("success");
        $msj.classList.add("error");
        $form.append($msj);

    } else{

        $msj.innerText = "thank you. We send you an email!";
        $msj.classList.remove("error");
        $msj.classList.add("success");
        $form.append($msj);
    }




   
   
   





  


    
})



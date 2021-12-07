
// DOM declaration

let add = document.querySelector(".add");

let input1 = document.querySelector(".user_input");

let min = document.querySelector(".min");



// increment

add.addEventListener('click', () =>{
    if (input1.value <1000){
        
    input1.value = parseInt(input1.value) + 1;

}else if (input1.value >=1000){
    input1.value = 1000;
}

  });



//  decrement 

min.addEventListener('click', () =>{
    if (input1.value <= 1){
        
    input1.value  = 1;
}
else if(input1.value > 1000){
    input1.value = 1000;
}

else{
    input1.value = parseInt(input1.value) -1;
}

  });
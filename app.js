

let formLearn =  document.getElementById('formLearn');
let input = document.querySelectorAll('#formLearn input');

function validateForm(e) {
    console.log(e.target.name)

    const handlerChange = (e) =>{
       

    }
    
}



input.forEach((input) =>{
    input.addEventListener('keyup', validateForm);
    console.log('validate');
});

formLearn.addEventListener("submit", (e) =>{
    e.preventDefault();
});
formLearn.addEventListener("click", (e) =>{
    e.preventDefault();
});






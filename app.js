

const formLearn = document.getElementById('formLearn');
const inputs = document.querySelectorAll('#formLearn input');

function handlerChange(e) {
}

inputs.forEach((input) =>{
    input.addEventListener('keyup', handlerChange);
});

formLearn.addEventListener("submit", (e) =>{
    e.preventDefault();
    
    let data = {};

    e.target.querySelectorAll("input").forEach((input) => {
        data[input.name] = input.value;
    })

    console.log(data.firstname);



});





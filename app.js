const regExp = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/

// const regExpObjeto = new RegExp("perlaweb","i");

console.log(regExp.test("perlaserrano2015@outlook.com"));


const alertName = document.getElementById('alertName');
const formLearn = document.getElementById('formLearn');
const inputs = document.querySelectorAll('#formLearn input');

const alertError = (errores) =>{
    errores.forEach((item) =>{
        item.tipo.classList.remove("d-none");
        item.tipo.textContent = item.msg;
    })

};

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
    console.log(data.lastname);
    console.log(data.emailaddress);
    console.log(data.password);

});

(function () {
    'use strict'
  
    var forms = document.querySelectorAll('.needs-validation')
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()







const inputs = document.querySelectorAll('input');

const regexPattern = {
    telephone : /^\d{11}$/,
    fullname: /^[a-z\d]{5,12}$/i,
    password: /^[\d\w@-]{8,20}$/i,
    username: /^[a-z\d-]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})$/
};

function regexValidations(field, regex) {
    
    if(regex.test(field.value)){
       field.className = 'valid';
   }else{
      field.className = 'invalid';
   }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) =>{
        console.log(e.target.attributes.name.value)
        // console.log(e.target.attributes.name.value);
        regexValidations(e.target, regexPattern[e.target.attributes.name.value])
    });
});
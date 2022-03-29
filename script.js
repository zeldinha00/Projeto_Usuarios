var fields = document.querySelectorAll('#form-user-create [name]');
var user = {};

document.getElementById('form-user-create').addEventListener('submit', function(event){

    fields.forEach(function(field, index){

        event.preventDefault();

        if(field.name == 'gender'){
    
            if(field.checked){
                user[field.name] = field.value;
            }
    
        }else {
            user[field.name] = field.value;
        }
    });
    console.log(user);
})
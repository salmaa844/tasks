export const validationUserData=(values)=>{

    let errors ={};
    if(values.name.trim() ==""){
        errors.name ="user is required";
    }else if(values.name.trim().length <3){
        errors.name="username must be at least 3 char";
    }if(values.email.trim() ==""){
        errors.email ="email is required";
    }else if(values.name.trim().length <3){
        errors.email="email must be at least 3 char";
    }if(values.password.trim() ==""){
        errors.password ="password is required";
    }else if(values.name.trim().length <3){
        errors.password="password must be at least 3 char";
    }
    return errors;
}
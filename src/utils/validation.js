export const checkValidData = (email,password,name) => {
    let errors = {};

    const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);
    const isNameValid = /([a-zA-Z0-9_\s]+)/.test(name)

    if(!isEmailValid) errors.email = "Email is not Valid";
    if(!isPasswordValid) errors.password = "Password should contain minimum 8 charcters including numbers , uppercase and a special character";
    if(!isNameValid) errors.name = "Enter a Valid Name";

    return errors;
}
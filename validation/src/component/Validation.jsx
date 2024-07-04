const Validation = (valueInput)=> {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    const {username, email, password, confirmPassword} = valueInput
    const error = {}

    if(username === '') {
        error.username = "Username is Required!"
        console.log(error);
    }

    if(email === '') {
        error.email = "Email is Required!"
    } else if(!emailPattern.test(email)) {
        error.email = "Email didn't match"
    }

    if (password === '') {
        error.password = "Password is Required!"
    } else if(!passwordPattern.test(password)) {
        error.password = "Password didn't match"
    }

    if (confirmPassword === '') {
        error.confirmPassword = "Password is Required!"
    } else if(!passwordPattern.test(password) && confirmPassword !== password) {
        error.confirmPassword = "Password didn't match"
    }

    return error
}

export default Validation
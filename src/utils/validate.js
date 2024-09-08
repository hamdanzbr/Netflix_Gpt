
export const checkValidData=(email,password)=>{
    // const isFullNameValid=/(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(name)
    const isEmailValid=/^[^@]+@[^@]+\.[^@]+$/.test(email)
    const isPasswordValid=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)

    if(!isEmailValid) return 'Email not valid';
    if(!isPasswordValid) return 'Password not valid'
    return null
}
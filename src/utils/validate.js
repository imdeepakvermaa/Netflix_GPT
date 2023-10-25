const validateData = (emailValue, passwordValue) => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  
    if (!emailRegex.test(emailValue)) {
      return "Email is not valid";
    }
    if (!passwordRegex.test(passwordValue)) {
      return "Password is not valid";
    }
  
    return null; // Return null if both email and password are valid
  };
  
  export default validateData;
  
const validateData = (emailValue, passwordValue) => {
    // Regular expression for a valid email address
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  
    // Regular expression for a valid password (at least 8 characters, one lowercase letter, one uppercase letter, and one digit)
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
  
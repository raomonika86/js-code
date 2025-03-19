// first way

// function generateOTP() {
//     let otp = Math.floor(100000 + Math.random() * 900000); 
//     console.log("Your OTP is:", otp);
//     return otp;
// }

// generateOTP();


// second way
function generateotp(length = 6){
    let otp = "";
    for(let i = 0; i < length; i++){
        otp += Math.floor(Math.random() * 10);
    }

    console.log("your otp is :", otp);
}

generateotp();
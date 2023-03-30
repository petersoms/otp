




// Function to generate OTP
function generateOTP() {
    
    setInterval(tick(), 1000);
function tick() {
    t=0
    if (t>=30) {
       
        t++
        
    }
   
}
		
	// Declare a string variable
	// which stores all string
	var string = '0123456789';
	let OTP = '';
	
	// Find the length of string
	var len = string.length;
	for (let i = 0; i < 6; i++ ) {
		OTP += string[Math.floor(Math.random() * len)];
	}
	document.write(OTP);
    
}
while (tick()<30) {
    
if (fname==OTP) {

    
}
}



			

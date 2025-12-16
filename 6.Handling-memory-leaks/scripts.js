let count = 0;

const interval1 = setInterval(()=>{
   if (count < 10) {
       count += 1;
       console.log(count);
   }   // interval code tab bhi chalta rahega jab condition puri ho chuki ho agar else block nhi hai to
    else{
        clearInterval(interval1);
        console.log("Interval Cleared ");
        
    }
}, 500)
function BMI(){
    var w=document.getElementById('w').value;
    var h=document.getElementById('h').value;
    var bmi=w/(h/100*h/100);
    bmi = bmi.toFixed(2);
    if (bmi < 18.5){
        document.getElementById("result").innerHTML="Your BMI is " + bmi + " , So you are underweight";
    }
    if (bmi > 18.5 && bmi < 24.9){
        document.getElementById("result").innerHTML="Your BMI is " + bmi + " , So you have a normal weight"; 
    }  
    if (bmi > 24.9){
        document.getElementById("result").innerHTML="Your BMI is " + bmi + " , So you are overweight";
    }
}
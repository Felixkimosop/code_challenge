function calculate() {
    let salary = document.getElementById("salary").value;
    // calculate salary for under 24000
    
    if (salary < 24000){
        let tax = salary * 0.1;
        let nssf = salary * 0.06;
        let nhif = salary * 0.0375;

        let mySalary = salary - (tax + nssf + nhif);

        document.getElementById("get").innerHTML = `This is your net salary ${mySalary}`
    }
// calculate salary for under 32333
    else if (salary >= 24000 && salary < 32333 ){
        let tax = salary * 0.25;
        let nssf = salary * 0.06;
        let nhif = salary * 0.0375;

        let mySalary = salary - (tax + nssf + nhif);

        document.getElementById("get").innerHTML = `This is your net salary${mySalary}`
    }
    // calculate salary for over 32333

    else if (salary > 32333){
        let tax = salary * 0.3;
        let nssf = salary * 0.06;
        let nhif = salary * 0.0375;

        let mySalary = salary - (tax + nssf + nhif);

        document.getElementById("get").innerHTML = `This is your net salary ${mySalary}`
    }
// if user did not enter anything
    else {
        document.getElementById("get").innerHTML = `Enter salary`
    }
    
    
    
}
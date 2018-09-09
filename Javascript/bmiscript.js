var john = {
    fullName: 'John Smith',
    mass: 101, 
    height: 1.05,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var patrick = {
    fullName: 'Patrick Palmer',
    mass: 101, 
    height: 1.05,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

john.calcBMI();
patrick.calcBMI();
console.log(john, patrick);

if (john.calcBMI() > patrick.calcBMI()){
    console.log(john.fullName + ' has a higher BMI than ' + patrick.fullName);
}   else if (patrick.bmi > john.bmi){
    console.log(patrick.fullName + ' has a higher BMI than ' + john.fullName);
}   else {
    console.log("They have the same BMI");
}
            

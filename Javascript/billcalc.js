var john = {
    fullName: 'John Wick', 
    bills: [120, 34, 432, 9, 233], 
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
        
        for (var i = 0; i < this.bills.length; i++)
        {
            //get % of tips
            var percent;
            var bill = this.bills[i];
            
            if (bill < 50){
                percent = .2;
            } else if (bill >= 50 && bill < 200) {
                percent = .15;
            } else {
                percent = .1;
            }
            
            this.tips[i] = bill * percent;
            this.finalValues[i] = bill + bill * percent;
        }
    }
}

john.calcTips();
console.log(john);
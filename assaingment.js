// First problem

function kilometerToMeter  (kilometer) {
    var meter = ( kilometer * 1000 );

    return meter;
} 
var result=kilometerToMeter(50);
console.log(result);

//second problem

function hotelCost (totaldays) {
    var totalcost = 0;
    if(totaldays<=10){
    totalcost=totaldays*100;
    }
    else if (totaldays<=20){
        var first10days=10*100;
        var remaining=totaldays-10;
        var second10days=remaining*80;
        totalcost=first10days+second10days;
    }
    else  {
        var first10days=10*100;
        var second10days=10*80;
        var remaining=totaldays-20;
        var third10days=remaining*50;
        totalcost=first10days+second10days+third10days;
    }
        return totalcost;
    }
    
    var result=hotelCost(22)
    console.log(result);

    //Third problem 

    var budgetCalculator = (watch, mobile, laptop) => {
        if(typeof(watch) === 'number' && typeof(mobile) === 'number' && typeof(laptop) === 'number'){
            return ((watch * 50) + (mobile * 100) + (laptop * 500)); 
        return "Please input a number";
    }
    }  
    console.log( budgetCalculator (5, 5, 2));

    // Fourth problem

    function megaFriend(name) {
        let largeName = name[0];
        for (let i = 0; i < name.length; i++) {
            let currentName = name[i];
            if(currentName.length > largeName.length) {
                largeName = currentName;
            }
        }
        return largeName;
    }
    var result=megaFriend(["abdullah","hidoy","omar","saikat"]);
    console.log(result);
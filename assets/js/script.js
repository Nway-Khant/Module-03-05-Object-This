// TODO: What is `this` referring to here?
// `this` is window
console.log(this);

// TODO: What is `this` referring to here?
// `this` is Object window
function helloThis() {
  console.log('Inside this function, this is ' + this);

}


// TODO: What is `this` referring to here? What will be logged in the console?
// child object ထဲရှိ `age` ကို ခေါ်သုံးထားခြင်းဖြစ်သည်။
var child = {
  age: 10,
  ageTenYears: function() {
    console.log(this.age + 10);
  }
};
this.child;
this.child.ageTenYears;

// TODO: What is `this` referring to here? What will be logged in the console?
// investor object ထဲရှိ `initialInvestment` ကို ခေါ်သုံးထားခြင်းဖြစ်သည်။

var investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15);
    }
  }
};
investor.investment.investmentGrowth();

// TODO: Call the `helloThis` function and the object methods to check results in the console
helloThis();
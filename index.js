import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "PIN",
        type: "number",
        message: "Enter your PIN"
    },
    {
        name: "AccountType",
        type: "list",
        choices: ["Current Account ", "Saving Account"],
        message: "Select your Account"
    },
    {
        name: "TransactionType",
        type: "list",
        choices: ["Cash Withdrawl", "Fast Cash"],
        message: "Choose an option",
        when(answer) {
            return answer.AccountType;
        }
    },
    {
        name: "Amount",
        type: "list",
        choices: [500, 1000, 2000, 5000],
        message: "Select Amount",
        when(answer) {
            return answer.TransactionType == "Fast Cash";
        }
    },
    {
        name: "Amount",
        type: "number",
        message: "Enter Amount",
        when(answer) {
            return answer.TransactionType == "Cash Withdrawl";
        }
    },
]);
if (answer.PIN) {
    let balance = Math.floor(Math.random() * 100000);
    if (balance > answer.Amount) {
        let remain = balance - answer.Amount;
        console.log(`you withdraw ${answer.Amount}rupees.your remaining balance is ${remain}`);
    }
    else {
        console.log("Insufficient Balance");
    }
}
else {
    console.log("Pleae enter pin to proceede");
}
// const {PIN,AccountType,TransactionType}=answer;
// if(PIN&&AccountType&&TransactionType){
//     let result:number=0;
//     if(operator==="+"){
//        result=firstnumber+secondnumber;
//     }
//     else if(operator==="-"){
//         result=firstnumber-secondnumber;
//      }
//      else if(operator==="*"){
//         result=firstnumber*secondnumber;
//      }
//      else if(operator==="/"){
//         result=firstnumber/secondnumber;
//      }
//      console.log(`your result is ${result}`);
// }else{
//     console.log("please! give valid inputs.");
// }

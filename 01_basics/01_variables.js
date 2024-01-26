const accountNo = 123456789;
let accHolderName = "Sangram Patil";
var accountPass = "123456";
accountCity = "Pune"; // Do not use like this always prefer to define the datatype
let accountState;

accHolderName = "Sangram";
accountPass = "000000";
accountCity = "Mumbai";

/* 
Do not use the var
Because of issue in block scope and functional scope
*/

console.log(accountNo);

console.table([accountNo, accHolderName, accountPass, accountCity]);

console.table({
  "Account No.": accountNo,
  "Holder Name": accHolderName,
  "Password": accountPass,
  "City": accountCity,
  "State": accountState,
});

let inputField = document.getElementById("text-input");
let convertBtn = document.getElementById("convert-btn");

let InnerLen =  document.getElementById("innerLen");
let InnerVol = document.getElementById("innerVol");
let InnerMass = document.getElementById("innerMass");
convertBtn.addEventListener("click",function(){
    // console.log(inputField.innerHTML+=1);
    let baseValue = inputField.value ;
    InnerLen.textContent = ` ${baseValue} meters = ${(baseValue*3.281).toFixed(3)} feet | ${baseValue} feet = ${(baseValue/3.281).toFixed(3)} meters `
    InnerVol.textContent = ` ${baseValue} liters = ${(baseValue*.264).toFixed(3)} gallon | ${baseValue} gallons = ${(baseValue/.264).toFixed(3)} liters `
    InnerMass.textContent = ` ${baseValue} kilos = ${(baseValue*2.204).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue/2.204).toFixed(3)} kilos `

})
// function lengthConv(baseValue){
//     return ` ${baseValue} meters = ${(baseValue*3.281).toFixed(3)} feet | ${baseValue} feet = ${(baseValue/3.281).toFixed(3)} meters `
// }
// function volumeConv(baseValue){
//     return ` ${baseValue} liters = ${(baseValue*.264).toFixed(3)} gallon | ${baseValue} gallons = ${(baseValue/.264).toFixed(3)} liters `
// }
// function massConv(baseValue){
//     return ` ${baseValue} kilos = ${(baseValue*2.204).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue/2.204).toFixed(3)} kilos `
// }

// console.log(lengthConv(20));
// console.log(volumeConv(20));
// console.log(massConv(20));
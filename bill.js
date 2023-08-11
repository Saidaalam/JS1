let numFans = Number(prompt("Enter the number of fans:"));
let numLights = Number(prompt("Enter the number of lights:"));
let numFridges = Number(prompt("Enter the number of fridges:"));

function calculateElectricityBill(numFans, numLights, numFridges) {
    const totalWattage = (numFans * 10) + (numLights * 5) + (numFridges * 50);
    const totalCost = totalWattage * 500;
    return totalCost;
}

const totalWattage = calculateElectricityBill(numFans*10, numLights*5, numFridges*50);
const totalBill = calculateElectricityBill(numFans, numLights, numFridges);
console.log(`Total electricity bill: ${totalBill} units`);

document.write(`Total Wattage : ${totalWattage} watt <br/> Total Electricity Bill : ${totalBill} units`);
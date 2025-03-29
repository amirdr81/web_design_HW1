document.addEventListener("DOMContentLoaded", function() {
    const fee = document.getElementById("fee");
    const count = document.getElementById("count");
    const discount = document.getElementById("discount");
    const setion = document.getElementById("setion");
    const time = document.getElementById("time");
    const price = document.getElementById("price");
    const weight = document.getElementById("weight");
    const height = document.getElementById("height");
    const calculatorElement = document.getElementById("Calculator");
    const insuranceElement = document.getElementById("Insurance");
    const bmiElement = document.getElementById("BMI");

    function updateFormula() {
        const feeFloat = parseFloat(fee.value) || 0;
        const countFloat = parseFloat(count.value) || 0;
        const discountFloat = parseFloat(discount.value) || 0;
        const setionFloat = parseFloat(setion.value) || 0;
        const timeFloat = parseFloat(time.value) || 0;
        const priceFloat = parseFloat(price.value) || 0;
        const weightFloat = parseFloat(weight.value) || 0;
        const heightFloat = parseFloat(height.value) || 0;
        
        const resultCalculator = (feeFloat * countFloat) - discountFloat;
        const resultInsurance = (setionFloat * timeFloat) / 60 * priceFloat;
        const resultBMI = weightFloat / (heightFloat * heightFloat)
        calculatorElement.textContent = resultCalculator.toFixed(2);
        insuranceElement.textContent = resultInsurance.toFixed(2);
        bmiElement.textContent = resultBMI.toFixed(2);

    }
    fee.addEventListener("input", updateFormula);
    count.addEventListener("input", updateFormula);
    discount.addEventListener("input", updateFormula);
    setion.addEventListener("input", updateFormula);
    time.addEventListener("input", updateFormula);
    price.addEventListener("input", updateFormula);
    height.addEventListener("input", updateFormula);
    weight.addEventListener("input", updateFormula);

});
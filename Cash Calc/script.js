document.addEventListener("DOMContentLoaded", () => {
    const et2000 = document.getElementById("2000");
    const et500 = document.getElementById("500");
    const et200 = document.getElementById("200");
    const et100 = document.getElementById("100");
    const et50 = document.getElementById("50");
    const et20 = document.getElementById("20");
    const et10 = document.getElementById("10");
    const et5 = document.getElementById("5");
    const et2 = document.getElementById("2");
    const et1 = document.getElementById("1");

    const txt2000 = document.getElementById("2000txt");
    const txt500 = document.getElementById("500txt");
    const txt200 = document.getElementById("200txt");
    const txt100 = document.getElementById("100txt");
    const txt50 = document.getElementById("50txt");
    const txt20 = document.getElementById("20txt");
    const txt10 = document.getElementById("10txt");
    const txt5 = document.getElementById("5txt");
    const txt2 = document.getElementById("2txt");
    const txt1 = document.getElementById("1txt");

    const totalAmt = document.getElementById("totalAmt");
    const totalAmtinWords = document.getElementById("totalAmtinWords");
    const btnReset = document.getElementById("btnReset");

    const inputs = [et2000, et500, et200, et100, et50, et20, et10, et5, et2, et1];
    const texts = [txt2000, txt500, txt200, txt100, txt50, txt20, txt10, txt5, txt2, txt1]

    inputs.forEach((input, index) => {
        input.addEventListener("input", () => {
            cashCalc(index);
        })
    });
    
    function cashCalc(index) { 
        const denominations = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
        const rowValue = inputs[index].value * denominations[index]; //5*200=1000
        texts[index].textContent = rowValue;//.tofixed(0)
        totalAmount();
    }
    function totalAmount() {
        let totalAmount = 0;
        texts.forEach((text) => {
            totalAmount += parseInt(text.textContent);
        });
        totalAmt.textContent = "Total Amount: " + totalAmount;
        totalAmtinWords.textContent = `Total Amount in Words: ${convertWords(totalAmount)}`;
    }

    btnReset.addEventListener("click", clear);
    function clear() { 
        inputs.forEach((input) => {
            input.value = "";
        });
        texts.forEach((text) => {
            text.textContent = "0";
        });
        totalAmount();
    }
    inputs.forEach(input => {
        input.addEventListener("input", () => {
            const value = parseInt(input.value, 10);
            if (isNaN(value) || value < 0) {
                input.value = "";
                // alert("Please enter a positive integer.");
            }
        });
    });
    // Convert total amount to words
    function convertWords(number) {
        const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']; //0-9
        const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];//10-19
        const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];//20-90

        if (number === 0)
            return 'Zero';

        let words = '';
        
        if (number >= 100000) {
            words += convertWords(Math.floor(number / 100000)) + ' Lakh ';
            number %= 100000;
        }
        
        if (number >= 1000) {
            words += convertWords(Math.floor(number / 1000)) +' Thousand ';
            number %= 1000;
        }

        if (number > 99) {
            words += convertWords(Math.floor(number / 100)) +' Hundred '; // 250 = 200 50 -> two hundred fifty
            number %= 100;
        }

        if (number > 0) {
            if (number < 10) {
                words += units[number]; //units[5]
            }
            else if (number < 20) {
                words += teens[number - 10]; // 15-10=5 = teens[5]
            }
            else {
                words += tens[Math.floor(number / 10)]; // 25 = 20 5 -> twenty five
                if (number % 10 > 0) {
                    words += ' '+ units[number % 10]; // units[5]
                }
                
            }
            
        }
        
        return words.trim();
    }
});

// Number to Roman number
var intToRoman = function(num) {
    let int_2_roman_dict = {1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 40: 'XL', 50: 'L', 90: 'XC', 100: 'C', 400: 'CD', 500: 'D', 900: 'CM', 1000: 'M'} 
    let roman_number = ''
    let div = 0  
    let numbers = Object.keys(int_2_roman_dict)
    console.log(numbers)
    for (let i = numbers.length - 1; i >= 0; i--) {
        div = num / numbers[i]
        console.log(div, num, numbers[i])
        if (div >= 1) {
            for (let j = 0; j < Math.floor(div); j++) {
                roman_number += int_2_roman_dict[numbers[i]] 
                console.log("roman_number",roman_number)
            }
            num =  num % numbers[i]
            //console.log(roman_number)
            if (num == 0) return roman_number
        }
    }
    console.log('This doesn\'t feel right...')
    return false
};

console.log(intToRoman(5994))
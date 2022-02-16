//  temperature (fahrenheit which is currently named kelvin) is 293
const kelvin = 293 

//  celsius is 20
const celsius = kelvin - 273;    

//  fahrenheit is 68
const fahrenheit = Math.floor(celsius * (9/5) + 32) ;

//  round fahrenheit to nearest whole number (already whole at 68)
//  var num1 = 68

//  Math.round(68);

//  round fahrenheit down to nearest whole number, already 68
//  Math.floor(68);

console.log(`The temperature is ${celsius} degrees Celsius.`);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

const newton = Math.floor(celsius * (33 / 100));

console.log(`The temperature is ${newton} degrees Newton.`);

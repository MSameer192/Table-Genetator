let table = prompt("Type your table Number");
table = parseInt(table);

let number = prompt('How much rows required for table')
number = Number.parseInt(number)


for ( let i = 1; i <= number; i++) {
    let result = table * i 
    document.write(`<h2>${table}  x  ${i}  = ${result} <h2> <br>`)
    console.log(table + " × " + i + " = " + result)
}
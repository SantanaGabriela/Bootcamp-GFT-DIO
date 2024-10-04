let name = "Gabriela"
let age = 26
let product = ["mouse", "teclado", "Monitor"]
let productValues = [20.90, 129.90,889.90]

function generateInvoice(nome, product,productValues, age){

	console.log(" O comprador é " + name)
    console.log(" A idade é " + age)
    console.log(" -------------")
    console.log(" O produto é " + product[0])
    console.log(" O valor é " + productValues[0])
}  

generateInvoice(name,product,productValues,age)
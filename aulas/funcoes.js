function torrar(){
	console.log("torrando pão")
    injetarPao()
}

torrar()//chamando a função
//injetarPao()

function injetarPao(){
	console.log("Preparando para injetar o pão")
    console.log("Finalizado")
}

// boas práticas:

function main(){
	getData()
	checkValues()
	sendToDatabase()

}
function getData(){
	console.log("pegando dados do usuário")
}

function checkValues(){
	console.log("validando dados")
}

function sendToDatabase(){
	console.log("cadastrando dados")
}

function getFirstName(name){
	let firstName = name.split(" ")[0]//pega apenas o primeiro nome, que está na primmeira posição.
    return firstName
}

let userName = getFirstName("Gabriela Cristina")

console.log("Seja bem vindo: " + userName)
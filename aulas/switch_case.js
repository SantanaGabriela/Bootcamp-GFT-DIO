//switch case/break/default

let fruta = "morango"


switch(fruta) {
	case "laranja":
    console.log("suco de laranja")
    brak //para o case e saia do switch
    
    case "banana":
    case "morango":
// da para colocar mais de uma opção no bloco. vários cases para uma ação ou várias ações. 
    console.log("Vitamina" + fruta)
    break
    
    case "maça":
    console.log("suco de maça")
    break
    
    default:// é tipo um else
    console.log("suco genérico")
}

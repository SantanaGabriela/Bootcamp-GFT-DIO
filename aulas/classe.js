class formaDeBolo{
	constructor(saborDaMassa,saborRecheio){
    	this.saborDaMassa = saborDaMassa
        this.saboRecheio = saborRecheio
        
    	
    }
    
    escreve(){
    	console.log('um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}')

}

}

let boloFesta = new formaDeBolo("massa de chocolate","recheio de nutella")

console.log(boloFesta.saboRecheio)
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        // Escolha de ataque com base no tipo
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'atacou de forma desconhecida';
        }

        // Exibe a mensagem de ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}


const herois = [
    new Heroi('Merlin', 150, 'mago'),
    new Heroi('Conan', 35, 'guerreiro'),
    new Heroi('Aang', 18, 'monge'),
    new Heroi('Ryu', 28, 'ninja')
];


herois.forEach(heroi => heroi.atacar());

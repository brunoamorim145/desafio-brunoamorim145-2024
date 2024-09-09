class RecintosZoo {
    constructor() {
        this.recintos = [
            { numero: 1, bioma: 'savana', tamanhoTotal: 10, animaisExistentes: ['macacos'] },
            { numero: 2, bioma: 'floresta', tamanhoTotal: 5, animaisExistentes: [] },
            { numero: 3, bioma: 'savana e rio', tamanhoTotal: 7, animaisExistentes: ['gazela'] },
            { numero: 4, bioma: 'rio', tamanhoTotal: 8, animaisExistentes: [] },
            { numero: 5, bioma: 'savana', tamanhoTotal: 9, animaisExistentes: ['leão'] }
        ];
    }

    analisaRecintos(animal, quantidade) {
        if (quantidade <= 0) {
            return { erro: "Quantidade inválida", recintosViaveis: null };
        }

        const preferencias = {
            'MACACO': 'savana',
            'GAZELA': 'savana',
            'LEÃO': 'savana',
            'PEIXE': 'rio',
            'TIGRE': 'floresta',
            'CROCODILO': 'rio'
        };

        const biomaPreferido = preferencias[animal.toUpperCase()];
        if (!biomaPreferido) {
            return { erro: "Animal inválido", recintosViaveis: null };
        }

        const recintosViaveis = this.recintos.filter(recinto =>
            recinto.bioma.toLowerCase().includes(biomaPreferido.toLowerCase()) &&
            (recinto.tamanhoTotal - recinto.animaisExistentes.length) >= quantidade
        );

        if (recintosViaveis.length === 0) {
            return { erro: "Não há recinto viável", recintosViaveis: null };
        }

        const resultado = recintosViaveis.map(recinto => {
            const espacoLivre = recinto.tamanhoTotal - recinto.animaisExistentes.length;
            return `Recinto ${recinto.numero} (espaço livre: ${espacoLivre} total: ${recinto.tamanhoTotal})`;
        });

        return { erro: null, recintosViaveis: resultado };
    }
}

export { RecintosZoo as RecintosZoo };

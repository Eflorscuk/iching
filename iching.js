const moeda = _ => Math.floor(Math.random() * 2) + 1

const lancar3moedas = _ => {
	let resultado = []
	for(let i = 0; i < 3; i++) {
		resultado.push(moeda())
	}
	return resultado
}

const jogo = _ => {
	let resultado = []
	for(let i = 0; i < 6; i++) {
		resultado.push(...lancar3moedas())
	}
	return resultado
}

const converterNumeros = _ => {
	return jogo().map(e => e === 1 ? 'yin' : e === 2 ? 'yang' : e)
}

const imprimir = _ => {
	return converterNumeros().slice().reverse()
}

console.log(imprimir())

export const dinheiro= valor => valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })

export const duasCasas = valor => parseFloat(valor).toFixed(2)

export function tickerUp(texto) {
    return texto.toUpperCase()
}

export function firstUp(texto) {
    return texto[0].toUpperCase() + texto.substr(1)
} 


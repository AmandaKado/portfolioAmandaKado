// Exporta a função principal que inicia o efeito de digitação
export function iniciarDigitacao() {

    // Aguarda o carregamento completo do conteúdo da página
    document.addEventListener('DOMContentLoaded', () => {
        
        // Função que aplica o efeito de "máquina de escrever" no elemento
        function efeitoMaquinaDeEscrever(elemento) {
            const textoArray = elemento.innerHTML.split(''); // Separa o texto em letras
            elemento.innerHTML = ''; // Limpa o conteúdo do elemento
            
            // Adiciona cada letra com um pequeno atraso, simulando digitação
            textoArray.forEach((letra, i) => {
                setTimeout(() => {
                    elemento.innerHTML += letra;
                }, 75 * i); // Tempo entre cada letra 
            });
        }

        // Seleciona o elemento com a classe .subtitulo
        const tituloAnimado = document.querySelector('.subtitulo');

        // Se o elemento existir, aplica o efeito
        if(tituloAnimado) {
            efeitoMaquinaDeEscrever(tituloAnimado);
        }

    });
}

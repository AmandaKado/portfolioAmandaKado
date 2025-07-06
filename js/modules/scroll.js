// Exporta a função principal que inicia a animação ao rolar a página
export function iniciarAnimacaoScroll() {

    // Define uma função interna que ativa as animações nos elementos com a classe .fadeInElemento
    function iniciarAnimacaoScroll() {
        const elementos = document.querySelectorAll('.fadeInElemento'); // Seleciona todos os elementos que devem animar
        if (elementos.length === 0) return; // Se não houver elementos, encerra a função

        // Cria um observador para detectar quando o elemento entra na tela
        const observer = new IntersectionObserver((entradas) => {
            entradas.forEach(entrada => {
                if (entrada.isIntersecting) { // Se o elemento estiver visível na tela
                    entrada.target.classList.add('visivel'); // Adiciona a classe que ativa a animação
                }
            });
        }, { threshold: 0.1 }); // threshold define quando considerar que o elemento entrou na tela

        // Aplica o observador a cada elemento selecionado
        elementos.forEach(el => observer.observe(el));
    }

    // Aguarda o carregamento completo do DOM antes de iniciar a animação
    document.addEventListener('DOMContentLoaded', () => {
        iniciarAnimacaoScroll(); // Chama a função para ativar as animações
    });
};

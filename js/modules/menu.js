// Exporta a função principal que inicia a funcionalidade do menu
export function iniciarMenu() {

    // Seleciona os elementos do menu e botões
    const nav = document.querySelector('nav');
    const menuHamburguer = document.getElementById('menuHamburguer');
    const fecharMenu = document.getElementById('fecharMenu');
    const linksDoMenu = document.querySelectorAll('.itemNavegacao');

    // Fecha o menu se o usuário clicar fora dele
    const fecharSeClicarFora = (event) => {
        if (!nav.contains(event.target) && event.target !== menuHamburguer) {
            fecharMenuAberto(); 
        }
    };

    // Abre o menu e ativa o listener para clicar fora
    const abrirMenu = () => {
        nav.classList.add('menuAberto');
        setTimeout(() => document.addEventListener('click', fecharSeClicarFora));
    };

    // Fecha o menu e remove o listener
    const fecharMenuAberto = () => {
        nav.classList.remove('menuAberto');
        document.removeEventListener('click', fecharSeClicarFora);
    };

    // Verifica se os elementos existem antes de adicionar eventos
    if (menuHamburguer && fecharMenu && nav) {
        // Abre o menu ao clicar no botão hamburguer
        menuHamburguer.addEventListener('click', abrirMenu);

        // Fecha o menu ao clicar no botão de fechar
        fecharMenu.addEventListener('click', fecharMenuAberto); 

        // Fecha o menu ao clicar em qualquer link de navegação
        linksDoMenu.forEach(link => {
            link.addEventListener('click', fecharMenuAberto);
        });
    }

    // Seleciona todas as seções que possuem um ID
    const secoes = document.querySelectorAll('section[id]');

    // Atualiza o item ativo do menu conforme a rolagem da página
    const atualizarMenuAtivo = () => {

        // Ponto de verificação (metade da tela visível)
        const checkpoint = window.scrollY + (window.innerHeight / 2);

        // Verifica qual seção está visível e ativa o menu correspondente
        secoes.forEach(secao => {
            const topoSecao = secao.offsetTop;
            const alturaSecao = secao.offsetHeight;
            const idSecao = secao.getAttribute('id');

            const checkpointEstaDentroDaSecao = checkpoint >= topoSecao && checkpoint <= topoSecao + alturaSecao;

            if (checkpointEstaDentroDaSecao) {
                const linkAtivo = document.querySelector(`.itemNavegacao[href*=${idSecao}]`);

                // Remove o destaque de todos os links
                linksDoMenu.forEach(link => link.parentElement.classList.remove('ativo'));

                // Ativa o link da seção visível
                if (linkAtivo) {
                    linkAtivo.parentElement.classList.add('ativo');
                }
            }
        });
    };

    // Atualiza o menu ativo ao rolar a página
    window.addEventListener('scroll', atualizarMenuAtivo);
};

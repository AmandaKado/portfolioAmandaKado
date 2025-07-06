// Importa a função responsável por controlar a abertura e fechamento do menu
import { iniciarMenu } from '../js/modules/menu.js'; 

// Importa a função que ativa o efeito de digitação no subtítulo
import { iniciarDigitacao } from '../js/modules/digitacao.js';

// Importa a função que aplica animações nos elementos ao rolar a página
import { iniciarAnimacaoScroll } from '../js/modules/scroll.js';

// Executa a função para ativar o menu hamburguer (abrir/fechar)
iniciarMenu();

// Executa o efeito de digitação no subtítulo "Dev. Amanda Kado"
iniciarDigitacao();

// Executa as animações nos elementos conforme o usuário rola a página
iniciarAnimacaoScroll();

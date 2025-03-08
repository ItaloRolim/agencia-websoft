// Código para criar um aviso de desenvolvimento
document.addEventListener('DOMContentLoaded', function() {
    // Criar elemento div para o aviso
    const aviso = document.createElement('div');
    
    // Adicionar o aviso ao corpo do documento
    document.body.appendChild(aviso);
    
    // Definir estilos para o aviso
    aviso.style.position = 'fixed';
    aviso.style.top = '0';
    aviso.style.left = '0';
    aviso.style.width = '100%';
    aviso.style.height = '100%';
    aviso.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    aviso.style.display = 'flex';
    aviso.style.justifyContent = 'center';
    aviso.style.alignItems = 'center';
    aviso.style.zIndex = '9999';
    
    // Criar o conteúdo do aviso
    const conteudoAviso = document.createElement('div');
    aviso.appendChild(conteudoAviso);
    
    conteudoAviso.style.backgroundColor = 'white';
    conteudoAviso.style.padding = '30px 40px';
    conteudoAviso.style.borderRadius = '10px';
    conteudoAviso.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.5)';
    conteudoAviso.style.textAlign = 'center';
    conteudoAviso.style.maxWidth = '500px';
    conteudoAviso.style.transition = 'all 0.3s ease-in-out';
    conteudoAviso.style.transform = 'scale(0.8)';
    conteudoAviso.style.opacity = '0';
    
    // Adicionar ícone
    const icone = document.createElement('div');
    conteudoAviso.appendChild(icone);
    icone.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#3498db" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path></svg>';
    icone.style.marginBottom = '20px';
    
    // Adicionar título
    const titulo = document.createElement('h2');
    conteudoAviso.appendChild(titulo);
    titulo.textContent = 'Catálogo de Serviços Digitais';
    titulo.style.color = '#3498db';
    titulo.style.margin = '0 0 10px 0';
    titulo.style.fontSize = '24px';
    
    // Adicionar mensagem
    const mensagem = document.createElement('p');
    conteudoAviso.appendChild(mensagem);
    mensagem.textContent = 'Estamos desenvolvendo este espaço para melhor atendê-lo.';
    mensagem.style.fontSize = '16px';
    mensagem.style.margin = '0 0 20px 0';
    mensagem.style.color = '#555';
    
    // Adicionar texto secundário
    const textoSecundario = document.createElement('p');
    conteudoAviso.appendChild(textoSecundario);
    textoSecundario.textContent = 'Em breve teremos novidades!';
    textoSecundario.style.fontSize = '14px';
    textoSecundario.style.fontStyle = 'italic';
    textoSecundario.style.color = '#777';
    textoSecundario.style.margin = '0 0 25px 0';
    
    // Adicionar botão "Entendi"
    const botao = document.createElement('button');
    conteudoAviso.appendChild(botao);
    botao.textContent = 'Entendi';
    botao.style.backgroundColor = '#3498db';
    botao.style.color = 'white';
    botao.style.border = 'none';
    botao.style.padding = '10px 25px';
    botao.style.borderRadius = '5px';
    botao.style.fontSize = '16px';
    botao.style.cursor = 'pointer';
    botao.style.transition = 'background-color 0.3s';
    
    // Efeito hover no botão
    botao.onmouseover = function() {
        this.style.backgroundColor = '#2980b9';
    };
    botao.onmouseout = function() {
        this.style.backgroundColor = '#3498db';
    };
    
    // Adicionar evento de clique para fechar o aviso
    botao.addEventListener('click', function() {
        conteudoAviso.style.transform = 'scale(0.8)';
        conteudoAviso.style.opacity = '0';
        
        setTimeout(function() {
            aviso.style.opacity = '0';
            setTimeout(function() {
                document.body.removeChild(aviso);
            }, 300);
        }, 300);
    });
    
    // Animar a entrada do aviso
    setTimeout(function() {
        conteudoAviso.style.transform = 'scale(1)';
        conteudoAviso.style.opacity = '1';
    }, 100);
    
    // Adicionar evento para fechar ao pressionar ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            botao.click();
        }
    });
});
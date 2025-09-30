let apiKey = '';
let conectado = false;

const chatMessages = document.getElementById('chatMessages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');


async function conectarIA() {
    const apiKeyInput = document.getElementById('apiKey');
    apiKey = apiKeyInput.value.trim();
    
    if (!apiKey) {
        adicionarMensagem('error', 'Por favor, cole sua API key do Groq!');
        apiKeyInput.focus();
        return;
    }

    
    if (apiKey.length < 10) {
        adicionarMensagem('error', 'API key muito curta. Verifique se copiou corretamente.');
        apiKeyInput.focus();
        return;
    }

    adicionarMensagem('info', '🔄 Testando conexão...');

    try {
       
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                messages: [
                    { role: 'user', content: 'Oi' }
                ],
                model: 'llama-3.1-8b-instant',
                max_tokens: 10,
                temperature: 0.1
            })
        });

        console.log('Status da resposta:', response.status);
        
        if (!response.ok) {
            const errorText = await response.text();
            console.error('Erro detalhado:', errorText);
            
            if (response.status === 401) {
                throw new Error('API key inválida. Verifique se copiou corretamente do Groq Console.');
            } else if (response.status === 429) {
                throw new Error('Limite de requisições excedido. Tente novamente em alguns minutos.');
            } else if (response.status === 404) {
                throw new Error('Modelo não encontrado. Usando modelo alternativo...');
            } else {
                throw new Error(`Erro ${response.status}: ${response.statusText}`);
            }
        }

        const data = await response.json();
        console.log('Resposta da API:', data);
        
        if (!data.choices || !data.choices[0] || !data.choices[0].message) {
            throw new Error('Resposta inválida da API. Tente novamente.');
        }

        const resposta = data.choices[0].message.content;

        conectado = true;
        messageInput.disabled = false;
        sendButton.disabled = false;
        messageInput.placeholder = "Digite sua mensagem...";
        messageInput.focus();

       
        apiKeyInput.value = '';
        apiKeyInput.placeholder = 'Conectado ✅';
        apiKeyInput.disabled = true;

        adicionarMensagem('info', `✅ Conectado com sucesso!\n\nResposta de teste: "${resposta}"`);
        
    } catch (error) {
        console.error('Erro completo:', error);
        adicionarMensagem('error', `❌ ${error.message}\n\n💡 Dicas:\n• Acesse console.groq.com/keys\n• Crie uma nova API key\n• Copie a key completa\n• Verifique se tem créditos disponíveis`);
        apiKeyInput.focus();
    }
}


async function enviarMensagem() {
    const mensagem = messageInput.value.trim();
    
    if (!mensagem) return;
    if (!conectado) {
        adicionarMensagem('error', 'Conecte-se primeiro!');
        return;
    }

    
    adicionarMensagem('user', mensagem);
    messageInput.value = '';
    sendButton.disabled = true;

    
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'message ai loading';
    loadingDiv.textContent = 'IA está pensando';
    chatMessages.appendChild(loadingDiv);
    scrollParaFinal();

    try {
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                messages: [
                    { 
                        role: 'user', 
                        content: mensagem 
                    }
                ],
                model: 'llama-3.1-8b-instant',
                max_tokens: 500,
                temperature: 0.7,
                stream: false
            })
        });

        console.log('Status da resposta:', response.status);

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Erro detalhado:', errorText);
            
            if (response.status === 400) {
                throw new Error('Parâmetros inválidos. Tentando modelo alternativo...');
            } else if (response.status === 401) {
                throw new Error('API key expirou. Reconecte com uma nova key.');
            } else if (response.status === 429) {
                throw new Error('Muitas requisições. Aguarde alguns segundos.');
            } else {
                throw new Error(`Erro ${response.status}: ${response.statusText}`);
            }
        }

        const data = await response.json();
        console.log('Resposta completa:', data);

        if (!data.choices || !data.choices[0] || !data.choices[0].message) {
            throw new Error('Resposta inválida da API');
        }

        const respostaIA = data.choices[0].message.content;

        
        chatMessages.removeChild(loadingDiv);
        adicionarMensagem('ai', respostaIA);

    } catch (error) {
        console.error('Erro completo:', error);
        chatMessages.removeChild(loadingDiv);
        adicionarMensagem('error', `❌ ${error.message}`);
    } finally {
        sendButton.disabled = false;
        messageInput.focus();
    }
}


function adicionarMensagem(tipo, conteudo) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${tipo}`;
    
    if (tipo === 'info' || tipo === 'error') {
        messageDiv.innerHTML = conteudo.replace(/\n/g, '<br>');
    } else {
        messageDiv.textContent = conteudo;
    }
    
    chatMessages.appendChild(messageDiv);
    scrollParaFinal();
}


function scrollParaFinal() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
}


messageInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && !sendButton.disabled) {
        enviarMensagem();
    }
});


window.addEventListener('load', function() {
    document.getElementById('apiKey').focus();
});
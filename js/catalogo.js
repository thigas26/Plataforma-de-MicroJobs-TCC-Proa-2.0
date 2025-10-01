// Dados das vagas
const vagas = [
    {
        titulo: "Desenvolvedor Web Full-Stack",
        tipo: "Freelancer",
        descricao: "Desenvolvimento de aplicação web completa com React e Node.js, incluindo API REST e banco de dados.",
        requisitos: ["Experiência com React", "Conhecimento em Node.js", "SQL ou NoSQL"],
        beneficios: ["Pagamento por projeto: R$ 3.000 - R$ 5.000"],
        categoria: "TI",
        localizacao: "Remoto",
        faixaPagamento: "R$ 3.000 - R$ 5.000"
    },
    {
        titulo: "Designer Gráfico para Logo",
        tipo: "MicroJob",
        descricao: "Criação de logo e identidade visual para pequena empresa, incluindo 3 conceitos e arquivos editáveis.",
        requisitos: ["Proficiência em Adobe Illustrator", "Portfólio de designs", "Entendimento de branding"],
        beneficios: ["Pagamento por tarefa: R$ 200 - R$ 400"],
        categoria: "Design",
        localizacao: "Remoto",
        faixaPagamento: "R$ 200 - R$ 400"
    },
    {
        titulo: "Especialista em SEO",
        tipo: "Freelancer",
        descricao: "Otimização de site para motores de busca, incluindo pesquisa de palavras-chave e implementação técnica.",
        requisitos: ["Experiência em SEO", "Ferramentas como Google Analytics", "Conhecimento em HTML/CSS"],
        beneficios: ["Pagamento por hora: R$ 50 - R$ 80/h"],
        categoria: "Marketing",
        localizacao: "Remoto",
        faixaPagamento: "R$ 50 - R$ 80/h"
    },
    {
        titulo: "Assistente Administrativo Virtual",
        tipo: "MicroJob",
        descricao: "Organização de agenda, resposta a emails e gestão de documentos para empresário ocupado.",
        requisitos: ["Experiência em administração", "Proficiência em Excel", "Boa comunicação"],
        beneficios: ["Pagamento por tarefa: R$ 50 - R$ 100"],
        categoria: "Administração",
        localizacao: "Remoto",
        faixaPagamento: "R$ 50 - R$ 100"
    },
    {
        titulo: "Redator de Conteúdo para Blog",
        tipo: "Freelancer",
        descricao: "Produção de artigos otimizados para SEO sobre tecnologia e inovação, com 1000-1500 palavras cada.",
        requisitos: ["Experiência em redação", "Conhecimento em SEO", "Pesquisa de mercado"],
        beneficios: ["Pagamento por artigo: R$ 100 - R$ 200"],
        categoria: "Escrita",
        localizacao: "Remoto",
        faixaPagamento: "R$ 100 - R$ 200"
    },
    {
        titulo: "Suporte Técnico ao Cliente",
        tipo: "MicroJob",
        descricao: "Atendimento via chat para resolução de problemas técnicos em software de gestão.",
        requisitos: ["Conhecimento básico de TI", "Boa comunicação", "Paciência"],
        beneficios: ["Pagamento por hora: R$ 15 - R$ 25/h"],
        categoria: "Suporte",
        localizacao: "Remoto",
        faixaPagamento: "R$ 15 - R$ 25/h"
    },
    {
        titulo: "Desenvolvedor Mobile iOS",
        tipo: "Freelancer",
        descricao: "Desenvolvimento de app iOS nativo com Swift, incluindo integração com API e testes.",
        requisitos: ["Swift e Xcode", "Experiência em iOS", "Git"],
        beneficios: ["Pagamento por projeto: R$ 4.000 - R$ 7.000"],
        categoria: "TI",
        localizacao: "Remoto",
        faixaPagamento: "R$ 4.000 - R$ 7.000"
    },
    {
        titulo: "Designer UI/UX para App",
        tipo: "Freelancer",
        descricao: "Design de interface e experiência do usuário para aplicativo mobile, incluindo protótipos interativos.",
        requisitos: ["Figma ou Sketch", "Princípios de UX", "Portfólio"],
        beneficios: ["Pagamento por projeto: R$ 1.500 - R$ 3.000"],
        categoria: "Design",
        localizacao: "Remoto",
        faixaPagamento: "R$ 1.500 - R$ 3.000"
    },
    {
        titulo: "Gerente de Mídias Sociais",
        tipo: "Freelancer",
        descricao: "Gestão completa de contas em redes sociais, criação de conteúdo e análise de performance.",
        requisitos: ["Experiência em social media", "Ferramentas como Hootsuite", "Criatividade"],
        beneficios: ["Pagamento mensal: R$ 800 - R$ 1.500"],
        categoria: "Marketing",
        localizacao: "Remoto",
        faixaPagamento: "R$ 800 - R$ 1.500"
    },
    {
        titulo: "Contador Freelance",
        tipo: "Freelancer",
        descricao: "Serviços de contabilidade para pequenas empresas, incluindo declaração de impostos e relatórios financeiros.",
        requisitos: ["Formação em contabilidade", "Experiência com softwares contábeis", "Conhecimento fiscal"],
        beneficios: ["Pagamento por serviço: R$ 300 - R$ 600"],
        categoria: "Administração",
        localizacao: "Remoto/Híbrido",
        faixaPagamento: "R$ 300 - R$ 600"
    },
    {
        titulo: "Tradutor Técnico",
        tipo: "MicroJob",
        descricao: "Tradução de documentos técnicos de inglês para português, focando em TI e engenharia.",
        requisitos: ["Fluência em inglês e português", "Conhecimento técnico", "Atenção aos detalhes"],
        beneficios: ["Pagamento por palavra: R$ 0,10 - R$ 0,20"],
        categoria: "Escrita",
        localizacao: "Remoto",
        faixaPagamento: "R$ 0,10 - R$ 0,20/palavra"
    },
    {
        titulo: "Analista de Dados",
        tipo: "Freelancer",
        descricao: "Análise de dados empresariais usando Python e SQL, geração de relatórios e dashboards.",
        requisitos: ["Python e Pandas", "SQL", "Power BI ou Tableau"],
        beneficios: ["Pagamento por projeto: R$ 2.000 - R$ 4.000"],
        categoria: "TI",
        localizacao: "Remoto",
        faixaPagamento: "R$ 2.000 - R$ 4.000"
    },
    {
        titulo: "Ilustrador Digital",
        tipo: "Freelancer",
        descricao: "Criação de ilustrações digitais para livros infantis, com estilo cartoon e cores vibrantes.",
        requisitos: ["Proficiência em Adobe Illustrator ou Procreate", "Portfólio de ilustrações", "Criatividade"],
        beneficios: ["Pagamento por ilustração: R$ 150 - R$ 300"],
        categoria: "Design",
        localizacao: "Remoto",
        faixaPagamento: "R$ 150 - R$ 300"
    },
    {
        titulo: "Consultor de Marketing Digital",
        tipo: "Freelancer",
        descricao: "Consultoria estratégica para campanhas digitais, incluindo planejamento e otimização de ROI.",
        requisitos: ["Experiência em marketing digital", "Análise de dados", "Ferramentas como Google Ads"],
        beneficios: ["Pagamento por hora: R$ 60 - R$ 100/h"],
        categoria: "Marketing",
        localizacao: "Remoto/Híbrido",
        faixaPagamento: "R$ 60 - R$ 100/h"
    },
    {
        titulo: "Organizador de Eventos Virtuais",
        tipo: "MicroJob",
        descricao: "Planejamento e execução de webinars e eventos online, incluindo plataforma e promoção.",
        requisitos: ["Experiência em eventos", "Ferramentas como Zoom", "Habilidades organizacionais"],
        beneficios: ["Pagamento por evento: R$ 200 - R$ 500"],
        categoria: "Administração",
        localizacao: "Remoto",
        faixaPagamento: "R$ 200 - R$ 500"
    },
    {
        titulo: "Revisor de Textos",
        tipo: "MicroJob",
        descricao: "Revisão gramatical e ortográfica de artigos e relatórios, garantindo qualidade e clareza.",
        requisitos: ["Formação em letras ou jornalismo", "Atenção aos detalhes", "Experiência em revisão"],
        beneficios: ["Pagamento por página: R$ 20 - R$ 40"],
        categoria: "Escrita",
        localizacao: "Remoto",
        faixaPagamento: "R$ 20 - R$ 40/página"
    },
    {
        titulo: "Especialista em Suporte Cloud",
        tipo: "Freelancer",
        descricao: "Configuração e suporte para migração para nuvem AWS, incluindo troubleshooting e otimização.",
        requisitos: ["Certificação AWS", "Experiência em cloud", "Conhecimento em Linux"],
        beneficios: ["Pagamento por hora: R$ 70 - R$ 120/h"],
        categoria: "TI",
        localizacao: "Remoto",
        faixaPagamento: "R$ 70 - R$ 120/h"
    },
    {
        titulo: "Designer de Embalagens",
        tipo: "Freelancer",
        descricao: "Design de embalagens para produtos alimentícios, focando em sustentabilidade e apelo visual.",
        requisitos: ["Experiência em design de produto", "Conhecimento em materiais", "Software 3D"],
        beneficios: ["Pagamento por projeto: R$ 800 - R$ 1.500"],
        categoria: "Design",
        localizacao: "Remoto",
        faixaPagamento: "R$ 800 - R$ 1.500"
    },
    {
        titulo: "Analista de Performance de Anúncios",
        tipo: "MicroJob",
        descricao: "Monitoramento e otimização de campanhas publicitárias no Facebook Ads e Google Ads.",
        requisitos: ["Experiência com anúncios", "Análise de métricas", "Ferramentas de tracking"],
        beneficios: ["Pagamento mensal: R$ 500 - R$ 1.000"],
        categoria: "Marketing",
        localizacao: "Remoto",
        faixaPagamento: "R$ 500 - R$ 1.000"
    },
    {
        titulo: "Assistente de RH",
        tipo: "MicroJob",
        descricao: "Recrutamento inicial de candidatos, triagem de currículos e agendamento de entrevistas.",
        requisitos: ["Experiência em RH", "Boa comunicação", "Organização"],
        beneficios: ["Pagamento por contratação: R$ 100 - R$ 200"],
        categoria: "Administração",
        localizacao: "Remoto",
        faixaPagamento: "R$ 100 - R$ 200"
    }
];

// Função para renderizar vagas
function renderVagas(vagasFiltradas) {
    const grid = document.getElementById('catalogo-grid');
    grid.innerHTML = '';

    vagasFiltradas.forEach((vaga, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-header">
                <h3>${index + 1}. ${vaga.titulo}</h3>
                <span class="tipo">${vaga.tipo}</span>
            </div>
            <p><strong>Descrição:</strong> ${vaga.descricao}</p>
            <p><strong>Requisitos:</strong></p>
            <ul>
                ${vaga.requisitos.map(req => `<li>${req}</li>`).join('')}
            </ul>
            <p><strong>Benefícios:</strong> ${vaga.beneficios.join(', ')}</p>
            <p><strong>Categoria:</strong> ${vaga.categoria}</p>
            <p><strong>Localização:</strong> ${vaga.localizacao}</p>
            <p><strong>Faixa de Pagamento:</strong> ${vaga.faixaPagamento}</p>
        `;
        grid.appendChild(card);
    });
}

// Função para filtrar vagas
function filtrarVagas() {
    const tipoFiltro = document.getElementById('filtro-tipo').value;
    const categoriaFiltro = document.getElementById('filtro-categoria').value;

    const vagasFiltradas = vagas.filter(vaga => {
        const tipoMatch = !tipoFiltro || vaga.tipo === tipoFiltro;
        const categoriaMatch = !categoriaFiltro || vaga.categoria === categoriaFiltro;
        return tipoMatch && categoriaMatch;
    });

    renderVagas(vagasFiltradas);
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderVagas(vagas);

    document.getElementById('filtro-tipo').addEventListener('change', filtrarVagas);
    document.getElementById('filtro-categoria').addEventListener('change', filtrarVagas);
});

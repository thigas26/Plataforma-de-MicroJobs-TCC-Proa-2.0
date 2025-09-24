window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.getElementById('header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        container.appendChild(particle);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    createParticles();

    const cards = document.querySelectorAll('.card, .freelancer-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    const buttons = document.querySelectorAll('.btn, .btn-card');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-2px)';
        });

        button.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    });
});

function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

function animateRatings() {
    const ratingElements = document.querySelectorAll('.rating-text');
    ratingElements.forEach(element => {
        const text = element.textContent;
        const rating = parseFloat(text);
        if (!isNaN(rating)) {
            let current = 0;
            const increment = rating / 50;
            const interval = setInterval(() => {
                current += increment;
                if (current >= rating) {
                    current = rating;
                    clearInterval(interval);
                }
                element.textContent = current.toFixed(1) + text.substring(text.indexOf(' '));
            }, 30);
        }
    });
}

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelectorAll('.hero');

    parallax.forEach(element => {
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        element.style.backgroundPosition = `center ${yPos}px`;
    });
});

window.addEventListener('load', () => {
    setTimeout(() => {
        animateRatings();
    }, 1000);
});

function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

const style = document.createElement('style');
style.textContent = `
    .nav-links a.active {
        color: var(--primary) !important;
    }
    .nav-links a.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);

const buttons = document.querySelectorAll('.btn, .btn-card, .btn-login');
buttons.forEach(button => {
    button.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-2px)';
    });

    button.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
})

const container = document.getElementById("container");
const btnRegister = document.getElementById("register");
const btnLogin = document.getElementById("login");

if (btnRegister) {
    btnRegister.addEventListener("click", () => {
        container.classList.add("active");
    });
}

if (btnLogin) {
    btnLogin.addEventListener("click", () => {
        container.classList.remove("active");
    });
}

const formCadastro = document.querySelector(".sign-up form");

if (formCadastro) {
    formCadastro.addEventListener("submit", (ev) => {
        ev.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("emailCadastro").value.trim();
        const senha = document.getElementById("senhaCadastro").value;
        const confirma = document.getElementById("confirmaSenhaCadastro").value;
        const perfil = document.querySelector('input[name="perfil"]:checked');

        if (!nome || !email || !senha || !confirma || !perfil) {
            alert("Preencha todos os campos!");
            return;
        }

        if (senha !== confirma) {
            alert("As senhas não conferem!");
            return;
        }

        const usuario = { nome, email, senha, perfil: perfil.value };

        localStorage.setItem("usuario", JSON.stringify(usuario));

        alert("Cadastro realizado com sucesso!");
        container.classList.remove("active");
    });
}

const formLogin = document.querySelector(".sign-in form");

if (formLogin) {
    formLogin.addEventListener("submit", (ev) => {
        ev.preventDefault();

        const email = document.getElementById("emailLogin").value.trim();
        const senha = document.getElementById("senhaLogin").value;

        const usuario = JSON.parse(localStorage.getItem("usuario"));

        if (!usuario) {
            alert("Nenhum usuário cadastrado!");
            return;
        }

        if (usuario.email === email && usuario.senha === senha) {
            alert(`Bem-vindo, ${usuario.nome}!`);
            window.location.href = "home.html";
        } else {
            alert("Email ou senha incorretos!");
        }
    });
}

function createParticles2() {
    const container = document.getElementById('particles');
    if (!container) return;

    for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        container.appendChild(particle);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    createParticles2();
});

document.addEventListener("DOMContentLoaded", () => {
    const signInForm = document.querySelector(".sign-in");
    const signUpForm = document.querySelector(".sign-up");
    const openLogin = document.getElementById("open-login-mobile");
    const openRegister = document.getElementById("open-register-mobile");


    if (signUpForm) {
        signUpForm.classList.add("active");
    }

    if (openLogin) {
        openLogin.addEventListener("click", (e) => {
            e.preventDefault();
            signUpForm.classList.remove("active");
            signInForm.classList.add("active");
        });
    }

    if (openRegister) {
        openRegister.addEventListener("click", (e) => {
            e.preventDefault();
            signInForm.classList.remove("active");
            signUpForm.classList.add("active");
        });
    }

});

const darkToggle = document.getElementById("dark-toggle");
if (darkToggle) {
    darkToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        const isDark = document.body.classList.contains("dark");

        const icon = darkToggle.querySelector('i');
        if (icon) {
            icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
        }
        localStorage.setItem("darkMode", isDark);
    });

    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark");
        darkToggle.querySelector('i').className = 'fas fa-sun';
    }
}

// Validação de email
function validarEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

// Validação em tempo real
function setupFormValidation() {
    document.querySelectorAll("input").forEach(input => {
        input.addEventListener("input", () => {
            input.classList.remove('input-error', 'input-warning');

            if (input.type === "email" && input.value.length > 0 && !validarEmail(input.value)) {
                input.classList.add('input-error');
            } else if (input.type === "password" && input.value.length > 0 && input.value.length < 6) {
                input.classList.add('input-warning');
            }
        });
    });
}
// Formulário de contato
const contatoForm = document.querySelector(".contact-form");
if (contatoForm) {
    contatoForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const nome = document.getElementById("nomeContato").value;
        const email = document.getElementById("emailContato").value;
        const mensagem = document.getElementById("mensagemContato").value;

        if (!validarEmail(email)) {
            alert("Por favor, insira um email válido!");
            return;
        }

        // Simulação de envio
        const button = e.target.querySelector('button');
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        button.disabled = true;

        setTimeout(() => {
            alert(`Obrigado ${nome}! Sua mensagem foi enviada com sucesso. Retornaremos em breve!`);
            contatoForm.reset();
            button.innerHTML = originalText;
            button.disabled = false;
        }, 1500);
    });
}

// Dados dinâmicos para jobs adicionais
const jobsExtras = [
    {
        titulo: "E-commerce Completo",
        preco: "R$ 3.800",
        desc: "Loja virtual completa com painel administrativo, pagamentos e gestão de estoque",
        icon: "fas fa-shopping-cart"
    },
    {
        titulo: "Animação 3D",
        preco: "R$ 1.500",
        desc: "Criação de animações 3D profissionais para apresentações e marketing",
        icon: "fas fa-cube"
    },
    {
        titulo: "Chatbot Inteligente",
        preco: "R$ 2.200",
        desc: "Desenvolvimento de chatbot com IA para atendimento automatizado",
        icon: "fas fa-robot"
    },
    {
        titulo: "Auditoria de Segurança",
        preco: "R$ 1.800",
        desc: "Análise completa de vulnerabilidades e implementação de correções de segurança",
        icon: "fas fa-shield-alt"
    },
    {
        titulo: "Dashboard Analytics",
        preco: "R$ 2.800",
        desc: "Painel interativo com métricas e KPIs personalizados para seu negócio",
        icon: "fas fa-chart-pie"
    },
    {
        titulo: "Podcast Profissional",
        preco: "R$ 700",
        desc: "Produção completa de podcast incluindo edição, mixagem e masterização",
        icon: "fas fa-podcast"
    }
];

// Adicionar funcionalidade de busca
function adicionarBusca() {
    const searchHTML = `
        <div style="text-align: center; margin-bottom: 2rem;">
            <input type="text" id="search-jobs" placeholder="Buscar jobs..." style="
                padding: 0.8rem 1rem;
                border: 1px solid var(--surface-dark);
                border-radius: 25px;
                width: 300px;
                max-width: 100%;
                font-size: 1rem;
                outline: none;
                background: var(--surface);
                color: var(--text);
            ">
        </div>
    `;

    const jobsSection = document.querySelector('#Microjobs .cards-grid');
    if (jobsSection) {
        jobsSection.insertAdjacentHTML('beforebegin', searchHTML);

        // Obter todos os jobs (originais + extras)
        const allJobs = [];
        const existingCards = jobsSection.querySelectorAll('.card');

        existingCards.forEach(card => {
            const titulo = card.querySelector('h3').textContent;
            const desc = card.querySelector('p').textContent;
            const preco = card.querySelector('.price').textContent;
            const icon = card.querySelector('.card-icon').className;

            allJobs.push({ titulo, desc, preco, icon });
        });

        // Adicionar jobs extras
        jobsExtras.forEach(job => allJobs.push(job));

        const searchInput = document.getElementById('search-jobs');
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filteredJobs = allJobs.filter(job =>
                job.titulo.toLowerCase().includes(searchTerm) ||
                job.desc.toLowerCase().includes(searchTerm)
            );

            if (searchTerm === '') {
                // Restaurar jobs originais
                jobsSection.innerHTML = `
                    <div class="card">
                        <i class="fas fa-palette card-icon"></i>
                        <h3>Design de Identidade Visual</h3>
                        <p>Criação completa de identidade visual para startup de tecnologia, incluindo logo, paleta de cores e guidelines.</p>
                        <div class="price">R$ 850</div>
                        <a href="#" class="btn-card">Ver Detalhes <i class="fas fa-arrow-right"></i></a>
                    </div>
                    <div class="card">
                        <i class="fas fa-code card-icon"></i>
                        <h3>Desenvolvimento Full-Stack</h3>
                        <p>Aplicação web responsiva com React, Node.js e banco de dados. Dashboard administrativo incluso.</p>
                        <div class="price">R$ 2.500</div>
                        <a href="#" class="btn-card">Ver Detalhes <i class="fas fa-arrow-right"></i></a>
                    </div>
                    <div class="card">
                        <i class="fas fa-chart-line card-icon"></i>
                        <h3>Estratégia Digital 360°</h3>
                        <p>Campanha completa de marketing digital com foco em ROI, incluindo SEO, redes sociais e automação.</p>
                        <div class="price">R$ 1.200</div>
                        <a href="#" class="btn-card">Ver Detalhes <i class="fas fa-arrow-right"></i></a>
                    </div>
                `;
            } else {
                jobsSection.innerHTML = filteredJobs.map(job => `
                    <div class="card">
                        <i class="${job.icon} card-icon"></i>
                        <h3>${job.titulo}</h3>
                        <p>${job.desc}</p>
                        <div class="price">${job.preco}</div>
                        <a href="#" class="btn-card">Ver Detalhes <i class="fas fa-arrow-right"></i></a>
                    </div>
                `).join('');

                if (filteredJobs.length === 0) {
                    jobsSection.innerHTML = '<p style="text-align: center; color: var(--text-muted); grid-column: 1/-1;">Nenhum job encontrado para sua busca.</p>';
                }
            }

            // Reconfigurar efeitos nos novos cards
            setupCardEffects();
        });
    }
}

// Configurar efeitos nos cards
function setupCardEffects() {
    const cards = document.querySelectorAll('.card, .freelancer-card');
    cards.forEach(card => {
        // Remover listeners anteriores (se existirem)
        const newCard = card.cloneNode(true);
        card.parentNode.replaceChild(newCard, card);
    });

    // Adicionar novos listeners
    document.querySelectorAll('.card, .freelancer-card').forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Função melhorada para criar mais partículas dinâmicas
function createAdvancedParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    // Limpar partículas existentes
    container.innerHTML = '';

    for (let i = 0; i < 60; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Posicionamento aleatório
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';

        // Tamanhos variados
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';

        // Delays e durações aleatórias
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (Math.random() * 6 + 4) + 's';

        // Opacidade variada
        particle.style.opacity = Math.random() * 0.6 + 0.2;

        container.appendChild(particle);
    }
}

// Scroll to top button
function addScrollToTop() {
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--gradient);
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: var(--shadow);
    `;

    document.body.appendChild(scrollButton);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollButton.style.opacity = '1';
        } else {
            scrollButton.style.opacity = '0';
        }
    });

    scrollButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Initialize new features
document.addEventListener('DOMContentLoaded', function () {
    // Criar partículas melhoradas
    createAdvancedParticles();

    // Configurar validação de formulários
    setupFormValidation();

    // Adicionar busca após um pequeno delay
    setTimeout(() => {
        adicionarBusca();
    }, 100);

    // Adicionar scroll to top
    addScrollToTop();

    // Recriar partículas periodicamente para efeito dinâmico
    setInterval(() => {
        createAdvancedParticles();
    }, 15000); // A cada 15 segundos
});

// CSS adicional para animações
const additionalCSS = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
    
    .card, .freelancer-card {
        will-change: transform;
    }
    
    .btn, .btn-card, .btn-login {
        will-change: transform;
    }
    
    #search-jobs:focus {
        border-color: var(--primary);
        box-shadow: 0 0 10px rgba(76, 175, 80, 0.3);
    }
`;

// Adicionar CSS dinâmico
const additionalStyle = document.createElement('style');
additionalStyle.textContent = additionalCSS;
document.head.appendChild(additionalStyle);
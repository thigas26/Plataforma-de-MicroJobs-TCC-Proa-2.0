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

document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    
    const cards = document.querySelectorAll('.card, .freelancer-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    const buttons = document.querySelectorAll('.btn, .btn-card');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
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
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    })

    const container = document.getElementById("container");
const btnRegister = document.getElementById("register");
const btnLogin = document.getElementById("login");

btnRegister.addEventListener("click", () => {
  container.classList.add("active"); // mostra o cadastro
});

btnLogin.addEventListener("click", () => {
  container.classList.remove("active"); // volta pro login
});
const formCadastro = document.querySelector(".sign-up form");

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
  container.classList.remove("active"); // volta pro login
});
const formLogin = document.querySelector(".sign-in form");

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
    window.location.href = "home.html"; // redireciona
  } else {
    alert("Email ou senha incorretos!");
  }
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
document.addEventListener("DOMContentLoaded", () => {
  createParticles();
});

document.addEventListener("DOMContentLoaded", () => {
  const signInForm = document.querySelector(".sign-in");
  const signUpForm = document.querySelector(".sign-up");
  const openLogin = document.getElementById("open-login-mobile");
  const openRegister = document.getElementById("open-register-mobile");


  signUpForm.classList.add("active");


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
        icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';

        localStorage.setItem("darkMode", isDark);
    });

    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark");
        darkToggle.querySelector('i').className = 'fas fa-sun';
    }
}
    
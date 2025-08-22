    
        // ========================================
        // VARIABLES GLOBALES
        // ========================================
        let currentQuoteIndex = 0;
        let currentCarouselIndex = 0;
        let articlesData = [];
        let filteredArticles = [];
        let currentPage = 1;
        const articlesPerPage = 6;

        // ========================================
        // DATOS MOCKUP
        // ========================================
        const dailyQuotes = [
            {
                text: "La verdadera elegancia es atemporal, como los recuerdos que creamos en cada estancia.",
                author: "Fundadores del Vintage Charm Hotel"
            },
            {
                text: "En cada rincón vintage se esconde una historia esperando ser descubierta.",
                author: "María Antonieta, Diseñadora de Interiores"
            },
            {
                text: "El lujo no está en lo que tienes, sino en lo que sientes cuando lo experimentas.",
                author: "Chef Auguste Escoffier"
            },
            {
                text: "Viajar es la única cosa que compras que te hace más rico en experiencias.",
                author: "Anónimo"
            },
            {
                text: "La hospitalidad es el arte de hacer que los extraños se sientan como en casa.",
                author: "Vintage Charm Philosophy"
            }
        ];

        const mockArticles = [
    // 🎨 Cultura
    {
        id: 1,
        title: "Los Secretos de la Decoración Vintage",
        excerpt: "Descubre cómo incorporar elementos vintage auténticos en espacios modernos para crear ambientes únicos y elegantes.",
        category: "cultura",
        date: "2025-08-15",
        image: "imagenes_blog/post4.jpg",
        popular: true,
        featured: false
    },
    {
        id: 2,
        title: "Arte y Cultura Local",
        excerpt: "Explora la rica herencia cultural de nuestra región a través de sus artistas y tradiciones.",
        category: "cultura",
        date: "2025-08-05",
        image: "imagenes_blog/Cultura2.jpeg",
        popular: true,
        featured: false
    },
    {
        id: 3,
        title: "Museos Ocultos en la Ciudad",
        excerpt: "Descubre galerías independientes y exposiciones que no están en las guías turísticas.",
        category: "cultura",
        date: "2025-07-20",
        image: "imagenes_blog/Cultura3.jpeg",
        popular: false,
        featured: false
    },

    // 🍽️ Gastronomía
    {
        id: 4,
        title: "Rutas Gastronómicas por Europa",
        excerpt: "Un viaje culinario por los sabores más exquisitos del continente europeo, desde París hasta Roma.",
        category: "gastronomia",
        date: "2025-08-12",
        image: "imagenes_blog/Gastronimia1.jpeg",
        popular: false,
        featured: true
    },
    {
        id: 5,
        title: "Cocina Mediterránea Auténtica",
        excerpt: "Recetas tradicionales con un toque moderno, directamente de nuestra cocina a tu mesa.",
        category: "gastronomia",
        date: "2025-08-03",
        image: "imagenes_blog/post5.jpg",
        popular: false,
        featured: true
    },
    {
        id: 6,
        title: "Sabores de Antaño: Cocina Tradicional Reimaginada",
        excerpt: "Nuestros chefs combinan recetas históricas con técnicas culinarias modernas para crear experiencias únicas.",
        category: "gastronomia",
        date: "2025-07-25",
        image: "imagenes_blog/gastronomia3.jpeg",
        popular: true,
        featured: false
    },

    // 🌍 Viajes
    {
        id: 7,
        title: "Destinos Románticos para Parejas",
        excerpt: "Los lugares más hermosos del mundo para vivir momentos inolvidables en pareja.",
        category: "viajes",
        date: "2025-08-10",
        image: "imagenes_blog/Viajes1.jpeg",
        popular: true,
        featured: false
    },
    {
        id: 8,
        title: "Aventuras en la Costa Mediterránea",
        excerpt: "Descubre calas secretas, pueblos pintorescos y experiencias únicas en la costa.",
        category: "viajes",
        date: "2025-08-01",
        image: "imagenes_blog/Viajes2.jpeg",
        popular: true,
        featured: false
    },
    {
        id: 9,
        title: "Rutas por los Pueblos Más Bonitos de España",
        excerpt: "Una guía detallada para descubrir los encantos de los pueblos medievales de Andalucía.",
        category: "viajes",
        date: "2025-07-15",
        image: "imagenes_blog/Viajes3.jpeg",
        popular: false,
        featured: false
    },

    // 🎉 Eventos
    {
        id: 10,
        title: "Eventos de Temporada en el Hotel",
        excerpt: "Celebra ocasiones especiales con nosotros. Desde bodas vintage hasta cenas temáticas.",
        category: "eventos",
        date: "2025-08-08",
        image: "imagenes_blog/Eventos1.jpeg",
        popular: false,
        featured: false
    },
    {
        id: 11,
        title: "Bodas con Encanto Vintage",
        excerpt: "Organiza tu boda soñada con todos los detalles vintage que harán tu día especial inolvidable.",
        category: "eventos",
        date: "2025-07-30",
        image: "imagenes_blog/Eventos2.jpeg",
        popular: false,
        featured: false
    },
    {
        id: 12,
        title: "Cenas de Gala en Nuestro Salón Principal",
        excerpt: "Experimenta una noche de lujo con menús exclusivos y música en vivo.",
        category: "eventos",
        date: "2025-07-20",
        image: "imagenes_blog/Eventos3.jpeg",
        popular: true,
        featured: false
    },

    // 🏡 Decoraciones
    {
        id: 13,
        title: "Cómo Decorar tu Hogar con Estilo Vintage",
        excerpt: "Consejos prácticos para incorporar muebles antiguos, telas clásicas y accesorios únicos en tu hogar moderno.",
        category: "decoraciones",
        date: "2025-08-14",
        image: "imagenes_blog/Decoraciones1.jpeg",
        popular: true,
        featured: false
    },
    {
        id: 14,
        title: "Los Mejores Muebles de Época para Salas",
        excerpt: "Descubre los estilos más buscados: Luis XV, Art Decó, Mid-Century y cómo combinarlos con armonía.",
        category: "decoraciones",
        date: "2025-08-07",
        image: "imagenes_blog/Decoraciones2.jpeg",
        popular: false,
        featured: true
    },
    {
        id: 15,
        title: "Papeles Tapiz William Morris: Belleza Atemporal",
        excerpt: "Revive la elegancia del siglo XIX con estos diseños florales clásicos que nunca pasan de moda.",
        category: "decoraciones",
        date: "2025-07-28",
        image: "imagenes_blog/Decoraciones3.jpeg",
        popular: true,
        featured: false
    },

    // 🧘 Bienestar
    {
        id: 16,
        title: "Rituales de Spa Vintage del Siglo XIX",
        excerpt: "Relájate como una reina con tratamientos de baño de leche, masajes con aceites esenciales y aromaterapia clásica.",
        category: "bienestar",
        date: "2025-08-13",
        image: "imagenes_blog/Bienestar1.jpeg",
        popular: true,
        featured: false
    },
    {
        id: 17,
        title: "Yoga y Meditación en el Jardín del Hotel",
        excerpt: "Empieza tu día con sesiones matutinas rodeado de naturaleza, fuentes antiguas y paz absoluta.",
        category: "bienestar",
        date: "2025-08-06",
        image: "imagenes_blog/Bienestar2.jpeg",
        popular: false,
        featured: true
    },
    {
        id: 18,
        title: "Cuidado de la Piel con Recetas de Antaño",
        excerpt: "Productos naturales, mantecas artesanales y técnicas ancestrales para una piel radiante y saludable.",
        category: "bienestar",
        date: "2025-07-22",
        image: "imagenes_blog/Bienestar3.jpeg",
        popular: true,
        featured: false
    }
];

        // ========================================
        // INICIALIZACIÓN
        // ========================================
        document.addEventListener('DOMContentLoaded', function() {
            console.log('🎉 Vintage Charm Blog iniciado');
            
            // Inicializar componentes
            initNavigation();
            initParticles();
            initHeroAnimations();
            initQuoteRotation();
            initCategoryFilters();
            initCarousel();
            initNewsletterForm();
            initScrollAnimations();
            initLoadingOverlay();
            initScrollToTop();
            
            // Cargar datos iniciales
            articlesData = [...mockArticles];
            filteredArticles = [...articlesData];
            loadArticles();
            loadPopularArticles();
            loadRecommendations();
            
            // Inicializar búsqueda
            initSearch();
            
            console.log('✅ Todos los componentes inicializados');
        });

        // ========================================
        // NAVEGACIÓN
        // ========================================
        function initNavigation() {
            const nav = document.getElementById('mainNav');
            const mobileToggle = document.getElementById('mobileToggle');
            const mobileMenu = document.getElementById('mobileMenu');
            const mobileClose = document.getElementById('mobileClose');
            const navLinks = document.querySelectorAll('.nav-link');
            const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

            // Efecto scroll en navbar
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }
            });

            // Toggle mobile menu
            mobileToggle.addEventListener('click', () => {
                mobileMenu.classList.add('active');
                document.body.style.overflow = 'hidden';
            });

            mobileClose.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });

            // Cerrar menú móvil al hacer clic fuera
            mobileMenu.addEventListener('click', (e) => {
                if (e.target === mobileMenu) {
                    mobileMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });

            // Navegación activa
          // En tu función initNavigation() - Asegura que TODOS los enlaces tengan preventDefault
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // ← Añade esta línea
        const category = link.getAttribute('data-category');
        
        // Actualizar estado activo
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        // Filtrar
        if (category && category !== 'all') {
            filterArticlesByCategory(category);
        } else {
            showAllArticles();
        }

        // Scroll suave
        const articlesSection = document.querySelector('.articles-section');
        if (articlesSection) {
            articlesSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

            // Navegación móvil
            mobileNavLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.remove('active');
                    document.body.style.overflow = '';
                });
            });
        }

        // ========================================
        // PARTÍCULAS ANIMADAS
        // ========================================
        function initParticles() {
            const canvas = document.getElementById('particles-canvas');
            if (!canvas) return;
            
            const ctx = canvas.getContext('2d');
            
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            const particles = [];
            const particleCount = 50;
            
            class Particle {
                constructor() {
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height;
                    this.size = Math.random() * 3 + 1;
                    this.speedX = Math.random() * 0.5 - 0.25;
                    this.speedY = Math.random() * 0.5 - 0.25;
                    this.opacity = Math.random() * 0.3 + 0.1;
                }
                
                update() {
                    this.x += this.speedX;
                    this.y += this.speedY;
                    
                    if (this.x > canvas.width) this.x = 0;
                    if (this.x < 0) this.x = canvas.width;
                    if (this.y > canvas.height) this.y = 0;
                    if (this.y < 0) this.y = canvas.height;
                }
                
                draw() {
                    ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            
            // Crear partículas
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
            
            function animate() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                particles.forEach(particle => {
                    particle.update();
                    particle.draw();
                });
                
                requestAnimationFrame(animate);
            }
            
            animate();
            
            // Redimensionar canvas
            window.addEventListener('resize', () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            });
        }

        // ========================================
        // ANIMACIONES DEL HERO
        // ========================================
        function initHeroAnimations() {
            const exploreBtn = document.getElementById('exploreBtn');
            const subscribeBtn = document.getElementById('subscribeBtn');
            
            if (exploreBtn) {
                exploreBtn.addEventListener('click', () => {
                    document.getElementById('categoriesSection').scrollIntoView({ 
                        behavior: 'smooth' 
                    });
                });
            }
            
            if (subscribeBtn) {
                subscribeBtn.addEventListener('click', () => {
                    document.querySelector('.newsletter-enhanced').scrollIntoView({ 
                        behavior: 'smooth' 
                    });
                });
            }
        }

        // ========================================
        // ROTACIÓN DE FRASES
        // ========================================
        function initQuoteRotation() {
            const quoteText = document.getElementById('quoteText');
            const quoteAuthor = document.getElementById('quoteAuthor');
            const refreshBtn = document.getElementById('refreshQuote');
            
            if (!quoteText || !quoteAuthor || !refreshBtn) return;
            
            function updateQuote() {
                const quote = dailyQuotes[currentQuoteIndex];
                
                // Animación de salida
                quoteText.style.opacity = '0';
                quoteAuthor.style.opacity = '0';
                
                setTimeout(() => {
                    quoteText.textContent = `"${quote.text}"`;
                    quoteAuthor.textContent = `— ${quote.author}`;
                    
                    // Animación de entrada
                    quoteText.style.opacity = '1';
                    quoteAuthor.style.opacity = '1';
                }, 300);
                
                currentQuoteIndex = (currentQuoteIndex + 1) % dailyQuotes.length;
            }
            
            refreshBtn.addEventListener('click', updateQuote);
            
            // Rotación automática cada 10 segundos
            setInterval(updateQuote, 10000);
            
            // Mostrar primera frase
            updateQuote();
        }

        // ========================================
        // FILTROS DE CATEGORÍAS
        // ========================================
function initCategoryFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const categoryCards = document.querySelectorAll('.category-card');

    // Filtros por botones (arriba)
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = btn.getAttribute('data-filter');

            // Actualizar botón activo
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filtrar tarjetas
            categoryCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });

            // Filtrar artículos
            if (filter === 'all') {
                showAllArticles();
            } else {
                filterArticlesByCategory(filter);
            }
        });
    });

    // Clic en botón "Leer más" de categoría → filtrar y hacer scroll
    categoryCards.forEach(card => {
        const readMoreBtn = card.querySelector('.category-read-more');
        const category = card.getAttribute('data-category');

        if (readMoreBtn) {
            readMoreBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation(); // Evita conflicto

                // Filtrar artículos
                filterArticlesByCategory(category);

                // Scroll suave a artículos
                const articlesSection = document.querySelector('.articles-section');
                if (articlesSection) {
                    articlesSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
    });
}

     

        // ========================================
        // GESTIÓN DE ARTÍCULOS
        // ========================================
     function loadArticles() {
    const articlesGrid = document.getElementById('articlesGrid');
    if (!articlesGrid) return;

    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const articlesToShow = filteredArticles.slice(startIndex, endIndex);

    // Solo limpiar si es la primera página
    if (currentPage === 1) {
        articlesGrid.innerHTML = '';
    }

    articlesToShow.forEach((article, index) => {
        const articleCard = createArticleCard(article);
        articleCard.style.animationDelay = `${index * 0.1}s`;
        articlesGrid.appendChild(articleCard);
    });

    // Mostrar/ocultar botón "Cargar más"
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        if (endIndex >= filteredArticles.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-flex';
        }
    }
}


function createArticleCard(article) {
    const card = document.createElement('article');
    card.className = 'article-card';
    card.setAttribute('data-category', article.category);

    // Formatear fecha
    const formattedDate = new Date(article.date).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

  const articleLink = {
    1: 'Cultura1.html',
    2: 'Cultura2.html',
    3: 'Cultura3.html',
    4: 'Gastronomia1.html',
    5: 'Gastronomia2.html',
    6: 'Gastronomia3.html',
    7: 'Viajes1.html',
    8: 'Viajes2.html',
    9: 'Viajes3.html',
    10: 'Eventos1.html',
    11: 'Eventos2.html',
    12: 'Eventos3.html',
     13: 'Decoraciones1.html',
    14: 'Decoraciones2.html',
    15: 'Decoraciones3.html',
     16: 'Bienestar1.html',
    17: 'Bienestar2.html',
    18: 'Bienestar3.html'
    // ... y así con los demás
}[article.id] || `articulo${article.id}.html`;

    // Crear el contenido HTML de la tarjeta con enlace
    card.innerHTML = `
        <img src="${article.image}" alt="${article.title}" class="article-image">
        <div class="article-content">
            <div class="article-meta">
                <span class="article-category">${getCategoryName(article.category)}</span>
                <span class="article-date">${formattedDate}</span>
            </div>
            <h3 class="article-title">${article.title}</h3>
            <p class="article-excerpt">${article.excerpt}</p>
            <a href="${articleLink}" class="read-more-btn">
                <span>Leer más</span>
                <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    `;

    return card;
}
  
        function filterArticlesByCategory(category) {
            filteredArticles = articlesData.filter(article => article.category === category);
            currentPage = 1;
            loadArticles();
            
            // Actualizar contador de artículos en categorías
            updateCategoryCount(category);
        }

        function showAllArticles() {
            filteredArticles = [...articlesData];
            currentPage = 1;
            loadArticles();
        }

        function getCategoryName(category) {
            const categories = {
                'viajes': 'Viajes',
                'gastronomia': 'Gastronomía',
                'eventos': 'Eventos',
                'cultura': 'Cultura'
            };
            return categories[category] || category;
        }

        function updateCategoryCount(category) {
            const count = articlesData.filter(article => article.category === category).length;
            const categoryCard = document.querySelector(`[data-category="${category}"] .category-count`);
            if (categoryCard) {
                categoryCard.textContent = `${count} artículos`;
            }
        }

        // ========================================
        // CARRUSEL POPULAR
        // ========================================
        function initCarousel() {
            const prevBtn = document.getElementById('carouselPrev');
            const nextBtn = document.getElementById('carouselNext');
            const track = document.getElementById('carouselTrack');
            
            if (!prevBtn || !nextBtn || !track) return;
            
            prevBtn.addEventListener('click', () => {
                currentCarouselIndex = Math.max(0, currentCarouselIndex - 1);
                updateCarousel();
            });
            
            nextBtn.addEventListener('click', () => {
                const maxIndex = Math.max(0, mockArticles.filter(a => a.popular).length - 3);
                currentCarouselIndex = Math.min(maxIndex, currentCarouselIndex + 1);
                updateCarousel();
            });
        }

        function loadPopularArticles() {
            const track = document.getElementById('carouselTrack');
            const indicators = document.getElementById('carouselIndicators');
            
            if (!track || !indicators) return;
            
            const popularArticles = mockArticles.filter(article => article.popular);
            
            // Limpiar contenido existente
            track.innerHTML = '';
            indicators.innerHTML = '';
            
            // Crear tarjetas del carrusel
            popularArticles.forEach((article, index) => {
                const card = document.createElement('div');
                card.className = 'carousel-card';
                
                const formattedDate = new Date(article.date).toLocaleDateString('es-ES', {
                    month: 'short',
                    day: 'numeric'
                });
                
                card.innerHTML = `
                    <img src="${article.image}" alt="${article.title}" class="carousel-image">
                    <div class="carousel-content">
                        <h3 class="carousel-title">${article.title}</h3>
                        <p class="carousel-excerpt">${article.excerpt.substring(0, 100)}...</p>
                        <div class="carousel-meta">
                            <span>${getCategoryName(article.category)}</span>
                            <span>${formattedDate}</span>
                        </div>
                    </div>
                `;
                
                card.addEventListener('click', () => {
                    openArticleModal(article);
                });
                
                track.appendChild(card);
                
                // Crear indicador
                const indicator = document.createElement('button');
                indicator.className = 'indicator';
                if (index === 0) indicator.classList.add('active');
                indicator.addEventListener('click', () => {
                    currentCarouselIndex = Math.floor(index / 3);
                    updateCarousel();
                });
                indicators.appendChild(indicator);
            });
            
            updateCarousel();
        }

        function updateCarousel() {
            const track = document.getElementById('carouselTrack');
            const indicators = document.querySelectorAll('.indicator');
            
            if (!track) return;
            
            const cardWidth = 300 + 24; // ancho + margin
            const translateX = -currentCarouselIndex * cardWidth * 3;
            
            track.style.transform = `translateX(${translateX}px)`;
            
            // Actualizar indicadores
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', Math.floor(index / 3) === currentCarouselIndex);
            });
        }

        // ========================================
        // BÚSQUEDA
        // ========================================
        function initSearch() {
            const searchInput = document.getElementById('searchInput');
            const searchBtn = document.getElementById('searchBtn');
            const searchResults = document.getElementById('searchResults');
            const mobileSearchInput = document.querySelector('.mobile-search-input');
            
            if (!searchInput || !searchBtn) return;
            
            let searchTimeout;
            
            function performSearch(query) {
                if (query.length < 2) {
                    searchResults.style.display = 'none';
                    return;
                }
                
                const results = articlesData.filter(article => 
                    article.title.toLowerCase().includes(query.toLowerCase()) ||
                    article.excerpt.toLowerCase().includes(query.toLowerCase()) ||
                    article.category.toLowerCase().includes(query.toLowerCase())
                );
                
                displaySearchResults(results);
            }
            
            function displaySearchResults(results) {
                if (results.length === 0) {
                    searchResults.innerHTML = '<div class="no-results">No se encontraron resultados</div>';
                } else {
                    searchResults.innerHTML = results.slice(0, 5).map(article => `
                        <div class="search-result-item" data-id="${article.id}">
                            <img src="${article.image}" alt="${article.title}" class="result-image">
                            <div class="result-content">
                                <h4>${article.title}</h4>
                                <span class="result-category">${getCategoryName(article.category)}</span>
                            </div>
                        </div>
                    `).join('');
                    
                    // Agregar eventos click a los resultados
                    searchResults.querySelectorAll('.search-result-item').forEach(item => {
                        item.addEventListener('click', () => {
                            const articleId = parseInt(item.getAttribute('data-id'));
                            const article = articlesData.find(a => a.id === articleId);
                            if (article) {
                                openArticleModal(article);
                                searchResults.style.display = 'none';
                                searchInput.value = '';
                            }
                        });
                    });
                }
                
                searchResults.style.display = 'block';
            }
            
            searchInput.addEventListener('input', (e) => {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    performSearch(e.target.value);
                }, 300);
            });
            
            searchBtn.addEventListener('click', () => {
                performSearch(searchInput.value);
            });
            
            // Búsqueda móvil
            if (mobileSearchInput) {
                mobileSearchInput.addEventListener('input', (e) => {
                    clearTimeout(searchTimeout);
                    searchTimeout = setTimeout(() => {
                        filterArticlesBySearch(e.target.value);
                    }, 300);
                });
            }
            
            // Cerrar resultados al hacer clic fuera
            document.addEventListener('click', (e) => {
                if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                    searchResults.style.display = 'none';
                }
            });
        }

        function filterArticlesBySearch(query) {
            if (query.length < 2) {
                showAllArticles();
                return;
            }
            
            filteredArticles = articlesData.filter(article => 
                article.title.toLowerCase().includes(query.toLowerCase()) ||
                article.excerpt.toLowerCase().includes(query.toLowerCase()) ||
                article.category.toLowerCase().includes(query.toLowerCase())
            );
            
            currentPage = 1;
            loadArticles();
        }

        // ========================================
        // FORMULARIO NEWSLETTER
        // ========================================
        function initNewsletterForm() {
            const form = document.getElementById('newsletterForm');
            const nameInput = document.getElementById('subscriberName');
            const emailInput = document.getElementById('subscriberEmail');
            const submitBtn = form?.querySelector('.newsletter-submit');
            
            if (!form) return;
            
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                
                const name = nameInput.value.trim();
                const email = emailInput.value.trim();
                
                if (!name || !email) {
                    showNotification('Por favor completa todos los campos', 'error');
                    return;
                }
                
                if (!isValidEmail(email)) {
                    showNotification('Por favor ingresa un email válido', 'error');
                    return;
                }
                
                // Mostrar loading
                if (submitBtn) {
                    submitBtn.querySelector('.btn-text').style.display = 'none';
                    submitBtn.querySelector('.btn-loading').style.display = 'flex';
                    submitBtn.disabled = true;
                }
                
                // Simular envío
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                // Restaurar botón
                if (submitBtn) {
                    submitBtn.querySelector('.btn-text').style.display = 'inline';
                    submitBtn.querySelector('.btn-loading').style.display = 'none';
                    submitBtn.disabled = false;
                }
                
                // Limpiar formulario
                form.reset();
                
                showNotification('¡Gracias por suscribirte! Recibirás nuestras mejores historias.', 'success');
            });
        }

        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        // ========================================
        // RECOMENDACIONES
        // ========================================
        function loadRecommendations() {
            const recommendationsGrid = document.getElementById('recommendationsGrid');
            if (!recommendationsGrid) return;
            
            // Seleccionar artículos aleatorios para recomendaciones
            const shuffled = [...articlesData].sort(() => 0.5 - Math.random());
            const recommendations = shuffled.slice(0, 3);
            
            recommendationsGrid.innerHTML = recommendations.map(article => `
                <div class="recommendation-card" data-id="${article.id}">
                    <img src="${article.image}" alt="${article.title}" class="recommendation-image">
                    <div class="recommendation-badge">
                        <i class="fas fa-star"></i>
                    </div>
                    <div class="recommendation-content">
                        <h3>${article.title}</h3>
                        <p>${article.excerpt.substring(0, 120)}...</p>
                        <span class="recommendation-category">${getCategoryName(article.category)}</span>
                    </div>
                </div>
            `).join('');
            
            // Agregar eventos click
            recommendationsGrid.querySelectorAll('.recommendation-card').forEach(card => {
                card.addEventListener('click', () => {
                    const articleId = parseInt(card.getAttribute('data-id'));
                    const article = articlesData.find(a => a.id === articleId);
                    if (article) {
                        openArticleModal(article);
                    }
                });
            });
        }

        // ========================================
        // MODAL DE ARTÍCULO
        // ========================================
        function openArticleModal(article) {
            // Crear modal dinámicamente
            const modal = document.createElement('div');
            modal.className = 'article-modal';
            modal.innerHTML = `
                <div class="modal-overlay">
                    <div class="modal-content">
                        <button class="modal-close">
                            <i class="fas fa-times"></i>
                        </button>
                        <div class="modal-header">
                            <img src="${article.image}" alt="${article.title}" class="modal-image">
                            <div class="modal-meta">
                                <span class="modal-category">${getCategoryName(article.category)}</span>
                                <span class="modal-date">${new Date(article.date).toLocaleDateString('es-ES')}</span>
                            </div>
                            <h1 class="modal-title">${article.title}</h1>
                        </div>
                        <div class="modal-body">
                            <p class="modal-excerpt">${article.excerpt}</p>
                            <div class="modal-content-text">
                                <p>Este es un artículo de demostración. En una implementación real, aquí se cargaría el contenido completo del artículo desde una base de datos o API.</p>
                                <p>El contenido incluiría párrafos detallados, imágenes adicionales, y toda la información relevante sobre ${article.title.toLowerCase()}.</p>
                                <p>Puedes imaginar que aquí habría información detallada sobre ${getCategoryName(article.category).toLowerCase()}, con consejos útiles, experiencias personales y recomendaciones expertas.</p>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <div class="modal-share">
                                <span>Compartir:</span>
                                <button class="share-btn" data-platform="facebook">
                                    <i class="fab fa-facebook-f"></i>
                                </button>
                                <button class="share-btn" data-platform="twitter">
                                    <i class="fab fa-twitter"></i>
                                </button>
                                <button class="share-btn" data-platform="pinterest">
                                    <i class="fab fa-pinterest"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            document.body.style.overflow = 'hidden';
            
            // Animación de entrada
            setTimeout(() => {
                modal.classList.add('active');
            }, 10);
            
            // Eventos
            const closeModal = () => {
                modal.classList.remove('active');
                setTimeout(() => {
                    document.body.removeChild(modal);
                    document.body.style.overflow = '';
                }, 300);
            };
            
            modal.querySelector('.modal-close').addEventListener('click', closeModal);
            modal.querySelector('.modal-overlay').addEventListener('click', (e) => {
                if (e.target === modal.querySelector('.modal-overlay')) {
                    closeModal();
                }
            });
            
            // Botones de compartir
            modal.querySelectorAll('.share-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const platform = btn.getAttribute('data-platform');
                    shareArticle(article, platform);
                });
            });
        }

        function shareArticle(article, platform) {
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(article.title);
            const text = encodeURIComponent(article.excerpt);
            
            let shareUrl = '';
            
            switch (platform) {
                case 'facebook':
                    shareUrl = `https://www.facebook.com/share/17HtfHp6Vm/`;
                    break;
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
                    break;
                case 'pinterest':
                    shareUrl = `https://pinterest.com/pin/create/button/?url=${url}&description=${title}`;
                    break;
            }
            
            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }
        }

        // ========================================
        // ANIMACIONES DE SCROLL
        // ========================================
        function initScrollAnimations() {
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
            
            // Observar elementos animados
            const animatedElements = document.querySelectorAll('.animate-fade-up, .animate-slide-right, .animate-zoom-in');
            animatedElements.forEach(el => observer.observe(el));
            
            // Agregar clases de animación a elementos existentes
            setTimeout(() => {
                document.querySelectorAll('.category-card, .article-card, .testimonial-card').forEach((el, index) => {
                    el.classList.add('animate-fade-up');
                    el.style.animationDelay = `${index * 0.1}s`;
                    observer.observe(el);
                });
            }, 1000);
        }

        // ========================================
        // LOADING OVERLAY
        // ========================================
        function initLoadingOverlay() {
            const loadingOverlay = document.getElementById('loadingOverlay');
            
            // Simular carga inicial
            setTimeout(() => {
                if (loadingOverlay) {
                    loadingOverlay.classList.add('hidden');
                }
            }, 2000);
        }

        // ========================================
        // SCROLL TO TOP
        // ========================================
        function initScrollToTop() {
            const scrollToTopBtn = document.getElementById('scrollToTop');
            
            if (!scrollToTopBtn) return;
            
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    scrollToTopBtn.classList.add('visible');
                } else {
                    scrollToTopBtn.classList.remove('visible');
                }
            });
            
            scrollToTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }

        // ========================================
        // CARGAR MÁS ARTÍCULOS
        // ========================================
        document.addEventListener('DOMContentLoaded', () => {
            const loadMoreBtn = document.getElementById('loadMoreBtn');
            
            if (loadMoreBtn) {
                loadMoreBtn.addEventListener('click', () => {
                    const btnText = loadMoreBtn.querySelector('.btn-text');
                    const loading = loadMoreBtn.querySelector('.loading-spinner');
                    
                    // Mostrar loading
                    btnText.style.display = 'none';
                    loading.style.display = 'inline-block';
                    loadMoreBtn.disabled = true;
                    
                    // Simular carga
                    setTimeout(() => {
                        currentPage++;
                        loadArticles();
                        
                        // Restaurar botón
                        btnText.style.display = 'inline';
                        loading.style.display = 'none';
                        loadMoreBtn.disabled = false;
                    }, 1000);
                });
            }
        });

        // ========================================
        // UTILIDADES
        // ========================================
        function showNotification(message, type = 'info') {
            const notification = document.createElement('div');
            notification.className = `notification notification-${type}`;
            notification.innerHTML = `
                <div class="notification-content">
                    <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
                    <span>${message}</span>
                </div>
                <button class="notification-close">
                    <i class="fas fa-times"></i>
                </button>
            `;
            
            document.body.appendChild(notification);
            
            // Mostrar con animación
            setTimeout(() => {
                notification.classList.add('show');
            }, 100);
            
            // Auto remover después de 5 segundos
            setTimeout(() => {
                removeNotification(notification);
            }, 5000);
            
            // Botón cerrar
            notification.querySelector('.notification-close').addEventListener('click', () => {
                removeNotification(notification);
            });
        }

        function removeNotification(notification) {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }

        // Función para formatear fechas
        function formatDate(dateString) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(dateString).toLocaleDateString('es-ES', options);
        }

        // Función para truncar texto
        function truncateText(text, length = 150) {
            if (text.length <= length) return text;
            return text.substring(0, length).trim() + '...';
        }

        // ========================================
// ANIMACIONES DE SCROLL - VERSIÓN MEJORADA
// ========================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);

    // Observar elementos con data-aos
    document.querySelectorAll('[data-aos]').forEach(el => {
        el.classList.add('aos-init');
        observer.observe(el);
    });
    
    // Añadir animaciones específicas para elementos sin data-aos
    setTimeout(() => {
        document.querySelectorAll('.category-card, .article-card, .testimonial-card, .carousel-card').forEach((el, index) => {
            el.classList.add('animate-fade-up');
            el.style.animationDelay = `${index * 0.1}s`;
            observer.observe(el);
        });
    }, 300);
}

// ========================================
// FUNCIONALIDAD CARGAR MÁS ARTÍCULOS
// ========================================
function initLoadMore() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (!loadMoreBtn) return;
    
    loadMoreBtn.addEventListener('click', async () => {
        const btnText = loadMoreBtn.querySelector('.btn-text');
        const spinner = loadMoreBtn.querySelector('.loading-spinner');
        
        // Mostrar estado de carga
        btnText.style.display = 'none';
        spinner.style.display = 'inline-flex';
        loadMoreBtn.disabled = true;
        
        // Simular carga
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Incrementar página y cargar más artículos
        currentPage++;
        loadArticles();
        
        // Restaurar botón
        btnText.style.display = 'inline-flex';
        spinner.style.display = 'none';
        loadMoreBtn.disabled = false;
        
        // Añadir animaciones a nuevos artículos
        setTimeout(() => {
            const newArticles = document.querySelectorAll(`.article-card:nth-child(n+${(currentPage-1)*articlesPerPage + 1})`);
            newArticles.forEach((article, index) => {
                article.classList.add('animate-fade-up');
                article.style.animationDelay = `${index * 0.1}s`;
            });
        }, 100);
    });
}

// ========================================
// VALIDACIÓN NEWSLETTER MEJORADA
// ========================================
function initNewsletterForm() {
    const newsletterForm = document.getElementById('newsletterForm');
    if (!newsletterForm) return;
    
    newsletterForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const submitBtn = document.getElementById('newsletterSubmit');
        const btnText = submitBtn.querySelector('.btn-text');
        const spinner = submitBtn.querySelector('.btn-loading');
        
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        
        // Validación
        if (!name || !email) {
            showNotification('Por favor completa todos los campos', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Por favor ingresa un email válido', 'error');
            return;
        }
        
        // Mostrar estado de carga
        btnText.style.display = 'none';
        spinner.style.display = 'flex';
        submitBtn.disabled = true;
        
        // Simular envío (en producción, aquí iría la llamada a tu API)
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Restaurar botón
        btnText.style.display = 'inline-flex';
        spinner.style.display = 'none';
        submitBtn.disabled = false;
        
        // Mostrar confirmación
        showNotification('¡Gracias por suscribirte! Pronto recibirás nuestro newsletter.', 'success');
        
        // Limpiar formulario
        newsletterForm.reset();
    });
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('🎉 Vintage Charm Blog iniciado');
    
    // Inicializar componentes
    initNavigation();
    initParticles();
    initHeroAnimations();
    initQuoteRotation();
    initCategoryFilters();
    initCarousel();
    initNewsletterForm();
    initScrollAnimations();
    initLoadingOverlay();
    initScrollToTop();
    initLoadMore(); // Nueva función para el botón "Cargar más"
    
    // Cargar datos iniciales
    articlesData = [...mockArticles];
    filteredArticles = [...articlesData];
    currentPage = 1;
    loadArticles();
    loadPopularArticles();
    loadRecommendations();
    
    // Inicializar búsqueda
    initSearch();
    
    console.log('✅ Todos los componentes inicializados');
});
    

// Inicializar AOS
document.addEventListener("DOMContentLoaded", () => {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100,
            delay: 100
        });
    }
});
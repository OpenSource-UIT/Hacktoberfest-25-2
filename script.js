
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header');
    const signInBtn = document.querySelector('.sign-in-btn');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    const faqItems = document.querySelectorAll('.faq-item');

    const emailInputs = document.querySelectorAll('.email-input');
    const getStartedBtns = document.querySelectorAll('.get-started-btn');

    getStartedBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const emailInput = btn.parentElement.querySelector('.email-input');
            const email = emailInput.value.trim();

            if (email) {
                showSignupMessage(email);
            } else {
                showEmailError(emailInput);
            }
        });
    });


    function showSignupMessage(email) {
        const message = document.createElement('div');
        message.className = 'signup-message';
        message.innerHTML = `
            <div class="message-content">
                <h3>Welcome to Netflix!</h3>
                <p>We've sent a confirmation email to ${email}</p>
                <button class="close-message">Close</button>
            </div>
        `;

        message.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
        `;

        const messageContent = message.querySelector('.message-content');
        messageContent.style.cssText = `
            background: #fff;
            color: #000;
            padding: 40px;
            border-radius: 8px;
            text-align: center;
            max-width: 400px;
            width: 90%;
        `;

        const closeBtn = message.querySelector('.close-message');
        closeBtn.style.cssText = `
            background: #e50914;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
            margin-top: 20px;
        `;

        document.body.appendChild(message);

        closeBtn.addEventListener('click', function () {
            document.body.removeChild(message);
        });

        // Close on background click
        message.addEventListener('click', function (e) {
            if (e.target === message) {
                document.body.removeChild(message);
            }
        });
    }

    // Show email error
    function showEmailError(input) {
        input.style.borderColor = '#e50914';
        input.style.backgroundColor = 'rgba(229, 9, 20, 0.1)';

        setTimeout(() => {
            input.style.borderColor = '#333';
            input.style.backgroundColor = 'rgba(0,0,0,0.7)';
        }, 3000);

    }

    // Language selector functionality
    const languageSelectors = document.querySelectorAll('.language-selector select');

    languageSelectors.forEach(selector => {
        selector.addEventListener('change', function () {
            const selectedLanguage = this.value;
            // Simulate language change
            console.log('Language changed to:', selectedLanguage);
        });
    });

    // Sign in button functionality
    signInBtn.addEventListener('click', function () {
        // Simulate sign in process
        showSignInModal();
    });

    // Show sign in modal
    function showSignInModal() {
        const modal = document.createElement('div');
        modal.className = 'signin-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>Sign In</h2>
                    <button class="close-modal">&times;</button>
                </div>
                <div class="modal-body">
                    <form class="signin-form">
                        <input type="email" placeholder="Email or phone number" required>
                        <input type="password" placeholder="Password" required>
                        <button type="submit">Sign In</button>
                    </form>
                    <div class="modal-footer">
                        <p>New to Netflix? <a href="#" class="signup-link">Sign up now</a></p>
                    </div>
                </div>
            </div>
        `;

        // Add styles for the modal
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
        `;

        const modalContent = modal.querySelector('.modal-content');
        modalContent.style.cssText = `
            background: #fff;
            color: #000;
            padding: 0;
            border-radius: 8px;
            max-width: 400px;
            width: 90%;
            overflow: hidden;
        `;

        const modalHeader = modal.querySelector('.modal-header');
        modalHeader.style.cssText = `
            background: #e50914;
            color: #fff;
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        `;

        const closeModal = modal.querySelector('.close-modal');
        closeModal.style.cssText = `
            background: none;
            border: none;
            color: #fff;
            font-size: 24px;
            cursor: pointer;
        `;

        const modalBody = modal.querySelector('.modal-body');
        modalBody.style.cssText = `
            padding: 30px;
        `;

        const form = modal.querySelector('.signin-form');
        form.style.cssText = `
            display: flex;
            flex-direction: column;
            gap: 15px;
        `;

        const inputs = form.querySelectorAll('input');
        inputs.forEach(input => {
            input.style.cssText = `
                padding: 12px;
                border: 1px solid #ccc;
                border-radius: 4px;
                font-size: 16px;
            `;
        });

        const submitBtn = form.querySelector('button');
        submitBtn.style.cssText = `
            background: #e50914;
            color: #fff;
            border: none;
            padding: 12px;
            border-radius: 4px;
            font-size: 16px;
            cursor: pointer;
        `;

        const modalFooter = modal.querySelector('.modal-footer');
        modalFooter.style.cssText = `
            text-align: center;
            margin-top: 20px;
        `;

        const signupLink = modal.querySelector('.signup-link');
        signupLink.style.cssText = `
            color: #e50914;
            text-decoration: none;
        `;

        document.body.appendChild(modal);

        // Close modal functionality
        closeModal.addEventListener('click', function () {
            document.body.removeChild(modal);
        });

        // Close on background click
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });

        // Form submission
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            // Simulate sign in process
            document.body.removeChild(modal);
            showSignupMessage('user@example.com');
        });
    }

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add loading animation for buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        const controlledId = button.getAttribute('aria-controls');
        const target = controlledId ? document.getElementById(controlledId) : null;
        const icon = button.querySelector('i');
        button.addEventListener('click', function () {
            // Close all other FAQ sections
            buttons.forEach(btn => {
                const otherId = btn.getAttribute('aria-controls');
                const otherTarget = otherId ? document.getElementById(otherId) : null;
                const otherIcon = btn.querySelector('i');

                if (btn !== button) {
                    btn.setAttribute('aria-expanded', 'false');
                    if (otherTarget) otherTarget.style.display = 'none';
                    if (otherIcon) {
                        otherIcon.classList.remove('fa-minus');
                        otherIcon.classList.add('fa-plus');
                    }
                }
            });

            // Open Clicked FAQ sections
            if (target) {
                const isOpen = target.style.display === 'block';
                this.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
                target.style.display = isOpen ? 'none' : 'block';
                if (icon) {
                    icon.classList.toggle('fa-plus', isOpen);
                    icon.classList.toggle('fa-minus', !isOpen);
                }
            }
        });
    });

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('button, .faq-question, .footer-column a');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.2s ease';
        });

        element.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    });

    // Add keyboard navigation for FAQ
    faqItems.forEach((item, index) => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                const nextItem = faqItems[index + 1];
                if (nextItem) {
                    nextItem.querySelector('.faq-question').focus();
                }
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                const prevItem = faqItems[index - 1];
                if (prevItem) {
                    prevItem.querySelector('.faq-question').focus();
                }
            }
        });
    });

    // Add focus styles for accessibility
    const focusableElements = document.querySelectorAll('button, input, select, a');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function () {
            this.style.outline = '2px solid #e50914';
            this.style.outlineOffset = '2px';
        });

        element.addEventListener('blur', function () {
            this.style.outline = 'none';
        });
    });

    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe feature sections for animation
    const featureSections = document.querySelectorAll('.feature');
    featureSections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Trending section functionality
    const trendingItems = document.querySelectorAll('.trending-item');
    trendingItems.forEach(item => {
        item.addEventListener('click', function () {
            const title = this.querySelector('h3').textContent;
            showMovieDetails(title);
        });
    });

    // Show movie details modal
    function showMovieDetails(title) {
        const modal = document.createElement('div');
        modal.className = 'movie-details-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>${title}</h2>
                    <button class="close-modal">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="movie-poster">
                        <div class="poster-placeholder">
                            <i class="fas fa-play"></i>
                        </div>
                    </div>
                    <div class="movie-info">
                        <p>This is a trending title on Netflix. Click to start watching!</p>
                        <div class="movie-actions">
                            <button class="play-btn">
                                <i class="fas fa-play"></i> Play
                            </button>
                            <button class="add-to-list-btn">
                                <i class="fas fa-plus"></i> My List
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Add styles for the modal
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
        `;

        const modalContent = modal.querySelector('.modal-content');
        modalContent.style.cssText = `
            background: #141414;
            color: #fff;
            padding: 0;
            border-radius: 8px;
            max-width: 600px;
            width: 90%;
            overflow: hidden;
        `;

        const modalHeader = modal.querySelector('.modal-header');
        modalHeader.style.cssText = `
            background: #e50914;
            color: #fff;
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        `;

        const closeModal = modal.querySelector('.close-modal');
        closeModal.style.cssText = `
            background: none;
            border: none;
            color: #fff;
            font-size: 24px;
            cursor: pointer;
        `;

        const modalBody = modal.querySelector('.modal-body');
        modalBody.style.cssText = `
            padding: 30px;
            display: flex;
            gap: 20px;
        `;

        const moviePoster = modal.querySelector('.movie-poster');
        moviePoster.style.cssText = `
            flex: 1;
            background: linear-gradient(45deg, #e50914, #f40612);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 200px;
        `;

        const posterPlaceholder = modal.querySelector('.poster-placeholder');
        posterPlaceholder.style.cssText = `
            font-size: 3rem;
            color: #fff;
        `;

        const movieInfo = modal.querySelector('.movie-info');
        movieInfo.style.cssText = `
            flex: 1;
        `;

        const movieActions = modal.querySelector('.movie-actions');
        movieActions.style.cssText = `
            display: flex;
            gap: 15px;
            margin-top: 20px;
        `;

        const playBtn = modal.querySelector('.play-btn');
        playBtn.style.cssText = `
            background: #e50914;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
        `;

        const addToListBtn = modal.querySelector('.add-to-list-btn');
        addToListBtn.style.cssText = `
            background: transparent;
            color: #fff;
            border: 1px solid #fff;
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
        `;

        document.body.appendChild(modal);

        // Close modal functionality
        closeModal.addEventListener('click', function () {
            document.body.removeChild(modal);
        });

        // Close on background click
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });

        // Play button functionality
        playBtn.addEventListener('click', function () {
            alert(`Starting playback for ${title}!`);
            document.body.removeChild(modal);
        });

        // Add to list functionality
        addToListBtn.addEventListener('click', function () {
            this.innerHTML = '<i class="fas fa-check"></i> Added to My List';
            this.style.background = '#e50914';
            this.style.border = 'none';
        });
    }

    // Add scroll-to-top functionality
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: #e50914;
        color: #fff;
        border: none;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 1000;
    `;

    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', function () {
        if (window.scrollY > 500) {
            scrollToTopBtn.style.opacity = '1';
        } else {
            scrollToTopBtn.style.opacity = '0';
        }
    });

    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    console.log('Netflix Clone loaded successfully!');
});

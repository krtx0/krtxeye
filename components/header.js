class CustomHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav id="mainNav" class="fixed top-0 w-full bg-navy/95 text-white z-50 py-4 transition-all duration-300">
        <div class="container mx-auto px-4 md:px-8">
          <div class="flex justify-between items-center">

            <!-- Logo -->
            <div class="flex items-center">
              <div class="text-xl md:text-2xl font-bold">
                <span class="text-white">Dr. Siddhesh Bapat</span>
                <span class="text-gold ml-2">|</span>
                <span class="text-gold-light ml-2 text-sm md:text-lg font-medium">Ophthalmologist</span>
              </div>
            </div>

            <!-- Desktop Navigation -->
            <div class="hidden md:flex items-center space-x-8">
              <a href="#home" class="hover:text-gold transition duration-300">Home</a>
              <a href="#about" class="hover:text-gold transition duration-300">About</a>
              <a href="#services" class="hover:text-gold transition duration-300">Services</a>
              <a href="#testimonials" class="hover:text-gold transition duration-300">Testimonials</a>
              <a href="#contact" class="hover:text-gold transition duration-300">Contact</a>
              <a href="#appointment" class="bg-gold text-navy px-6 py-2 rounded-full font-semibold hover:bg-amber transition duration-300 shadow-lg hover:shadow-xl">
                Book Appointment
              </a>
            </div>

            <!-- Mobile Menu Button -->
            <button id="mobileMenuBtn" class="md:hidden text-white">
              <i data-lucide="menu"></i>
            </button>

          </div>

          <!-- Mobile Navigation -->
          <div id="mobileMenu" class="hidden md:hidden mt-4 pb-4">
            <div class="flex flex-col space-y-4">
              <a href="#home" class="hover:text-gold transition duration-300 py-2">Home</a>
              <a href="#about" class="hover:text-gold transition duration-300 py-2">About</a>
              <a href="#services" class="hover:text-gold transition duration-300 py-2">Services</a>
              <a href="#testimonials" class="hover:text-gold transition duration-300 py-2">Testimonials</a>
              <a href="#contact" class="hover:text-gold transition duration-300 py-2">Contact</a>
              <a href="#appointment" class="bg-gold text-navy px-6 py-2 rounded-full font-semibold hover:bg-amber transition duration-300 inline-block text-center">
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </nav>
    `;

    this._initBehavior();
  }

  _initBehavior() {
    const mobileMenuBtn = this.querySelector('#mobileMenuBtn');
    const mobileMenu = this.querySelector('#mobileMenu');
    const nav = this.querySelector('#mainNav');

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      const icon = mobileMenuBtn.querySelector('i');
      const isOpen = !mobileMenu.classList.contains('hidden');
      icon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
      if (typeof lucide !== 'undefined') lucide.createIcons();
    });

    // Shrink nav on scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        nav.classList.add('py-2', 'shadow-lg');
        nav.classList.remove('py-4');
      } else {
        nav.classList.add('py-4');
        nav.classList.remove('py-2', 'shadow-lg');
      }
    });

    // Smooth scroll for anchor links
    this.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          mobileMenu.classList.add('hidden');
          const icon = mobileMenuBtn.querySelector('i');
          icon.setAttribute('data-lucide', 'menu');
          if (typeof lucide !== 'undefined') lucide.createIcons();
          window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
        }
      });
    });
  }
}

customElements.define('custom-header', CustomHeader);
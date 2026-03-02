class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-navy text-white pt-12 pb-8">
        <div class="container mx-auto px-4 md:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

            <!-- Logo & Tagline -->
            <div>
              <h3 class="text-2xl font-bold mb-4">Dr. Siddhesh Bapat</h3>
              <p class="text-gray-300 mb-4">Caring for your vision, one patient at a time.</p>
              <div class="flex space-x-4">
                <a href="#" class="text-gray-300 hover:text-gold transition duration-300">
                  <i data-lucide="facebook"></i>
                </a>
                <a href="#" class="text-gray-300 hover:text-gold transition duration-300">
                  <i data-lucide="twitter"></i>
                </a>
                <a href="#" class="text-gray-300 hover:text-gold transition duration-300">
                  <i data-lucide="linkedin"></i>
                </a>
              </div>
            </div>

            <!-- Quick Links -->
            <div>
              <h4 class="text-lg font-bold mb-4">Quick Links</h4>
              <ul class="space-y-2">
                <li><a href="#home" class="text-gray-300 hover:text-gold transition duration-300">Home</a></li>
                <li><a href="#about" class="text-gray-300 hover:text-gold transition duration-300">About Dr. Bapat</a></li>
                <li><a href="#services" class="text-gray-300 hover:text-gold transition duration-300">Services</a></li>
                <li><a href="#testimonials" class="text-gray-300 hover:text-gold transition duration-300">Patient Testimonials</a></li>
                <li><a href="#appointment" class="text-gray-300 hover:text-gold transition duration-300">Book Appointment</a></li>
              </ul>
            </div>

            <!-- Contact Info -->
            <div>
              <h4 class="text-lg font-bold mb-4">Contact Us</h4>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <i data-lucide="map-pin" class="text-gold mr-2 mt-1 w-4 h-4 shrink-0"></i>
                  <span class="text-gray-300">OPD 201, Allcure Superspeciality Hospital, Jogeshwari East, Mumbai 400060</span>
                </li>
                <li class="flex items-center">
                  <i data-lucide="phone" class="text-gold mr-2 w-4 h-4 shrink-0"></i>
                  <span class="text-gray-300">+91 22 1234 5678</span>
                </li>
                <li class="flex items-center">
                  <i data-lucide="mail" class="text-gold mr-2 w-4 h-4 shrink-0"></i>
                  <span class="text-gray-300">contact@drbapateyeclinic.com</span>
                </li>
              </ul>
            </div>

            <!-- Google Reviews CTA -->
            <div>
              <h4 class="text-lg font-bold mb-4">Share Your Experience</h4>
              <p class="text-gray-300 mb-4">Help others find trusted eye care by sharing your experience.</p>
              <a href="#" class="inline-flex items-center bg-gold text-navy px-6 py-3 rounded-full font-bold hover:bg-amber transition duration-300">
                <i data-lucide="star" class="mr-2"></i>
                Leave us a Review ⭐
              </a>
            </div>

          </div>
    `;

    // Set current year dynamically
    const yearEl = this.querySelector('#footerYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Re-init Lucide icons if available
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }
}

customElements.define('custom-footer', CustomFooter);
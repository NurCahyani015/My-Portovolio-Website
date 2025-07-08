content: ["index.html"],

        // Smooth scrolling for navigation links
         document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
               e.preventDefault();
               
               const targetId = this.getAttribute('href');
               if (targetId === '#') return;
               
               const targetElement = document.querySelector(targetId);
               if (targetElement) {
                     window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                     });
                  
                    // Close mobile menu if open
                     const mobileMenu = document.getElementById('mobile-menu');
                     if (!mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                     }
               }
            });  
         });

// Resume button functionality
const resumeButtons = [document.getElementById('resumeBtn'), document.getElementById('resumeBtnMobile')];
resumeButtons.forEach(button => {
   if (button) {
      button.addEventListener('click', function(e) {
         e.preventDefault();
         // In a real scenario, this would link to your actual CV file
         alert('Downloading CV...');
         // window.open('path-to-your-cv.pdf', '_blank');
      });
   }
});


// Scroll animation trigger
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         entry.target.style.opacity = '1';
         entry.target.style.transform = 'translateY(0)';
      }
});
}, { threshold: 0.1 });

fadeElements.forEach(element => {
   observer.observe(element);
});


//==============Pesan /submit==============
const scriptURL = 'https://script.google.com/macros/s/AKfycbwTh_UXKq6cgTumEh7dRQbSyWnmI1riML_BTZRXV0z0_gY1Kmt0z-s9JGU-q_1D3VXMtg/exec'

const form = document.forms['contact-form']
const btnKirim =document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert =document.querySelector('.my-alert');


form.addEventListener('submit', e => {
   e.preventDefault()
   // ketika tombol submit di klik 
   //Tampilkan tombol loading ,Hilangkan tombol kirim
   btnLoading.classList.toggle('d-none');
   btnKirim.classList.toggle('d-none');

   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
         //Tampilkan tombol kirim ,Hilangkan tombol loading
          btnLoading.classList.toggle('d-none');
         btnKirim.classList.toggle('d-none');
       
         //Tampilkan Alert
         myAlert.classList.toggle('d-none');
         //reset format
         form.reset(); 
         console.log('Success!', response);
      })
      .catch(error => console.error('Error!', error.message));
});
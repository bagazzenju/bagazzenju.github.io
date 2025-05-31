document.addEventListener("DOMContentLoaded", function () {
  const links    = document.querySelectorAll("nav .nav-link");
  const sections = document.querySelectorAll("section.pengalamanhdp");

  function showSection(id) {
  document.querySelectorAll("nav ul li a.selected")
    .forEach(item => item.classList.remove("selected"));

  sections.forEach(sec => sec.classList.remove("active"));

  const target = document.getElementById(id);
  if (target) {
    target.classList.add("active");

    window.scrollTo({
      top: target.offsetTop - 20,
      behavior: "smooth"
    });

    if (typeof AOS !== "undefined") {
      AOS.refresh();
    }
  }

  links.forEach(link => {
    if (link.getAttribute("href") === `#${id}`) {
      link.classList.add("selected");
    }
  });
 }

  // —— Now *outside* showSection() we wire up our clicks —— //
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").slice(1);
      showSection(targetId);

      // close nav if mobile
      if (window.innerWidth < 1250) {
        document.querySelector("nav").classList.remove("open-nav");
      }
    });
  });

    function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  // default on load
  const defaultSection = window.location.hash
    ? window.location.hash.slice(1)
    : "pujasera";
  showSection(defaultSection);

  // hash-change support
  window.addEventListener("hashchange", () => {
    showSection(window.location.hash.slice(1));
  });
<<<<<<< HEAD
=======
});

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');
  const menu = document.querySelector('.menu');
  const closeBtns = document.querySelectorAll('.close');

  if (menu) {
    menu.addEventListener('click', () => {
      nav.classList.add('open-nav');
    });
  }

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      nav.classList.remove('open-nav');
    });
  });
  });
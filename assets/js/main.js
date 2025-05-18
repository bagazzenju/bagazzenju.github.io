(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
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

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

    document.addEventListener("DOMContentLoaded", function () {
     const link = document.createElement("link");
     link.rel = "stylesheet";
     link.href = "assets/css/main.css";
     document.head.appendChild(link);
     const experienceLinks = document.querySelectorAll(".experience-link");
     const experienceContent = document.getElementById("experience-content");

    // Data pengalaman (bisa diganti dengan data dari server atau database)
    const experienceData = {
      1: `
        <div data-aos="fade-up" data-aos-delay="200">
          <img src="assets/img/rumah makan.jpg" alt="" class="img-fluid pengalaman-img">
          <h2>Bekerja di Rumah Makan PUJASERA<br></h2>
          <div class="info-wrap" data-aos="fade-up" data-aos-delay="200">
            <div class="row gy-5">

                <div class="info-alamat d-flex align-items-center">
                  <a href="https://maps.app.goo.gl/87zcfbZygu1i8d1u7" target="_blank" rel="noopener noreferrer"><i class="bi bi-geo-alt flex-shrink-0"></i></a>
                  <div>
                    <h3>Alamat</h3>
                    <p>Jl. Raya Dukuh Kupang Barat No.03, Pakis, Kec. Sawahan, Surabaya, Jawa Timur 60225</p>
                  </div>
                </div>
            </div>
          </div>
          <p>
            Ini adalah pertama kalinya saya bekerja setelah lulus sekolah. Awalnya saya bekerja disini dengan posisi sebagai waiters/pelayan. Saya bekerja disini dari awal rumah makan ini baru dibuka. Rumah makan ini berlokasi di Kota Surabaya, jawa timur. Saya mulai bekerja disini pada oktober akhir 2019. Lalu dua bulan setelahnya saya dipindahkan ke posisi sebagai dishwasher/tukang pencuci piring. Alasan saya dipindahkan karena keterkosongan pada posisi tersebut jadi saya mengajukan diri untuk mengisi posisi tersebut.
          </p>
          <p>
            <strong>Selama bekerja saya memiliki beberapa tugas yang harus di kerjakan, dan di bawah ini adalah tugas-tugas saya:</strong>
          </p>
          <ul>
            <li><i class="bi bi-check-circle"></i> <span>Memastikan kebersihan area dapur dan seluruh area rumah makan dengan standar kebersihan yang tinggi.</span></li>
            <li><i class="bi bi-check-circle"></i> <span>Mengelola pencucian piring dan gelas dengan efisien.</span></li>
            <li><i class="bi bi-check-circle"></i> <span>Menyiapkan bahan makanan dasar, seperti memasak nasi sebelum operasional rumah makan.</span></li>
            <li><i class="bi bi-check-circle"></i> <span>Melayani dan menyambut konsumen dengan ramah dan profesional saat bertemu dimanapun.</span></li>
            <li><i class="bi bi-check-circle"></i> <span>Melayani konsumen yang baru masuk dengan memberikan ucapan selamat datang dan juga memberikan daftar menu ketika konsumen sudah duduk.</span></li>
          </ul>
          <p>
            Saya bekerja disini selama 4 bulan lebih lalu saya keluar pada bulan februari 2020. Alasan saya keluar karena adanya masalah finance di rumah makan tersebut, sehingga rumah makan ini ditutup selamanya dan melakukan pemberhentian semua pekerja.
          <p>
        </div>
        `,
      2: `
        <div data-aos="fade-up" data-aos-delay="200">
          <img src="assets/img/pt merekah sukses.jpg" alt="" class="img-fluid pengalaman-img">
          <h2>Bekerja di PT MEREKAH SUKSES<br></h2>
          <div class="info-alamat d-flex align-items-center">
            <a href="https://maps.app.goo.gl/rv4f5tuStC5XamVb6" target="_blank" rel="noopener noreferrer"><i class="bi bi-geo-alt flex-shrink-0"></i></a>
            <div>
             <h3>Alamat</h3>
             <p>Jl. Raya Wiguna Utara No.34, Gn. Anyar Tambak, Kec. Gn. Anyar, Surabaya, Jawa Timur 60294</p>
            </div>
          </div>
          <h3>PT. Merekah Sukses (MKS), telah dipercaya oleh partner kerja yaitu PT.Tower Bersama Group (Tbk) dalam membangun banyak proyek infrastruktur telekomunikasi di Indonesia. Pembangunan dan pemeliharaan infrastruktur telekomunikasi yang telah dikerjakan antara lain new build, co-location, maintenance(Corrective dan Preventive), akuisi lahan dan perijinan tower BTS yang tersebar diseluruh Indonesia.</h3>
          <p>
            Setelah keluar dari rumah makan pujasera saya mencoba pengalaman baru dengan bekerja di PT Merekah Sukses. Ini merupakan pekerjaan kedua saya setelah menganggur selama 1 tahun, karena pada saat itu terjadi wabah Covid 19 sehingga sangat sulit untuk mencari pekerjaan. Perusahaan ini bergerak di bidang telekomunikasi dan dimana posisi saya di perusahaan ini adalah sebagai Call Center. Saya mulai bekerja di perushaan ini pada April 2021. Perusahaan ini terletak di Surabaya, Jawa Timur.
          </p>
          <p>
            <strong>Berikut adalah beberapa tugas yang harus saya kerjakan saat bekerja di PT Merekah Sukses sebagai call center:</strong>
          </p>
          <ul>
            <li><i class="bi bi-check-circle"></i> <span>Mengelola ticket trouble dengan memantau dan menindaklanjuti masalah yang muncul untuk memastikan penyelesaian yang cepat dan efektif.</span></li>
            <li><i class="bi bi-check-circle"></i> <span>Menganalisis data ticket trouble untuk mengidentifikasi masalah pada tower BTS dan mengusulkan solusi yang tepat.</span></li>
            <li><i class="bi bi-check-circle"></i> <span>Mengkoordinasikan tim lapangan untuk memperbaiki trouble pada tower dan memastikan penyelesaian yang cepat.</span></li>
            <li><i class="bi bi-check-circle"></i> <span>Menangani panggilan dari operator provider dan menyelesaikan masalah yang terkait dengan tower.</span></li>
            <li><i class="bi bi-check-circle"></i> <span>Mengelola pendataan bulanan untuk memantau total ticket trouble dan mengidentifikasi tren masalah.</span></li>
            <li><i class="bi bi-check-circle"></i> <span>Membuat laporan dan bernegosiasi dengan tim atasan untuk membatalkan denda yang tidak perlu.</span></li>
          </ul>
          <p>
            Saya bekerja disini selama 1 tahun dan saya resign pada bulan Maret 2021. Alasan saya keluar karena saya pada saat itu sakit ambeyen dan akhirnya saya berobat dan dokter menyarankan saya untuk istirahat sambil pemulihan diri di rumah sampai benar benar sembuh karena saya saat itu menolak untuk di operasi. Pada akhirnya saya sembuh setelah beberapa bulan. 
          <p>
        </div>
      `,
      3: `
        <div data-aos="fade-up" data-aos-delay="200">
          <img src="assets/img/indomaret.jpg" alt="" class="img-fluid pengalaman-img">
          <h2>Bekerja di PT INDOMARCO PRISMATAMA<br></h2>
          <div class="info-alamat d-flex align-items-center">
            <a href="https://maps.app.goo.gl/j9PdrWF6nK3JB6Gz7" target="_blank" rel="noopener noreferrer"><i class="bi bi-geo-alt flex-shrink-0"></i></a>
            <div>
             <h3>Alamat</h3>
             <p>Janti, Kec. Jogoroto, Kabupaten Jombang, Jawa Timur 61485</p>
            </div>
          </div>
          <h3>PT Indomarco Prismatama, yang dikenal dengan jaringan minimarket Indomaret, adalah perusahaan ritel swasta nasional yang mengelola jaringan minimarket di Indonesia. Perusahaan ini didirikan pada tahun 1988 dan telah menjadi salah satu jaringan minimarket terbesar di Indonesia.</h3>
          <p>
            Setelah dari PT Merekah Sukses saya melamar di PT Indomarco Prismatama sebagai crew store. Saya di terima di perusahaan ini dan mulai bekerja pada 1 desember 2022. Perusahaan ini memiliki banyak cabang dan pada saat itu saya melamar di cabang Jombang yang berlokasi di kabupaten Jombang, Jawa Timur.
          </p>
          <p>
            <strong>Selama bekerja sebagai crew store memiliki beberapa tugas dan tanggung jawab yang harus di kerjakan, dan di bawah ini adalah tugas-tugas saya:</strong>
          </p>
          <ul>
            <li><i class="bi bi-check-circle"></i> <span>Mengelola keamanan dan kebersihan toko, baik di dalam maupun di luar, untuk menciptakan lingkungan yang nyaman bagi pelanggan.</span></li>
            <li><i class="bi bi-check-circle"></i> <span>Melayani pelanggan dengan memberikan informasi produk dan melakukan penawaran yang efektif di kasir dan area produk.</span></li>
            <li><i class="bi bi-check-circle"></i> <span>Mengatur display barang secara teratur dan menarik untuk meningkatkan penjualan.</span></li>
            <li><i class="bi bi-check-circle"></i> <span>Mengoperasikan kasir dengan baik dan melakukan penawaran produk yang ditargetkan perusahaan untuk meningkatkan penjualan.</span></li>
            <li><i class="bi bi-check-circle"></i> <span>Melayani konsumen yang baru masuk dengan memberikan ucapan selamat datang dan juga menjalankan SOP perusahaan dengan disiplin dan konsisten untuk memastikan kualitas pelayanan yang tinggi.</span></li>
          </ul>
          <p>
            Saya bekerja disini selama 1 Tahun lebih lalu saya keluar pada bulan November 2022. Alasan saya keluar karena ada pekerjaan di luar jobdesk yang disuruh oleh atasan saya di toko. Kegiatan itu juga melanggar SOP kerja dan apabila ketahuan akan di kenakan sanksi dari HRD.
          <p>
        </div>
      `,
      4: `
        <div data-aos="fade-up" data-aos-delay="200">
          <img src="assets/img/latihan komputer.jpg" alt="" class="img-fluid pengalaman-img">
          <h2>Mengikuti pelatihan di LAA TANSA<br></h2>
          <div class="info-alamat d-flex align-items-center">
            <a href="https://maps.app.goo.gl/AVwhm5kSbNZkc3my7" target="_blank" rel="noopener noreferrer"><i class="bi bi-geo-alt flex-shrink-0"></i></a>
            <div>
             <h3>Alamat</h3>
             <p>Jl. Jenderal Sudirman, Kerek, Margomulyo, Kec. Ngawi, Kabupaten Ngawi, Jawa Timur 63217</p>
            </div>
          </div>
          <p>
            Pada saat masih bekerja di PT Indomarco Prismatama, saya mengikuti pelatihan Pengoperasian Microsoft Windows Word & Excel untuk menambah wawasan dan pengetahuan. Pada saat melakukan pelatihan ini bisa dibilang saya mengikuti pelatihan privat. Saya mengikuti pelatihan ini pada juni 2023 dan lulus pada juli 2023.
          <p>
            <strong>Selama mengikuti pelatihan disini saya meempelajari beberapa hal yang bermanfaat antara lain:</strong>
          </p>
          <ul>
            <li><i class="bi bi-check-circle"></i> <span>Memahami tentang microsoft windows dan internet.</span></li>
            <li><i class="bi bi-check-circle"></i> <span>Mempelajari cara mengoperasikan Microsoft Word, termasuk pengolahan dokumen, penulisan dan pengeditan, penggunaan template, tabel dan grafik, serta fitur lainnya seperti mail merge dan track changes.</span></li>
            <li><i class="bi bi-check-circle"></i> <span>Mempelajari cara mengoperasikan Microsoft Excel dan memiliki pengetahuan tentang pengolahan data, penggunaan formula dan fungsi seperti IF, VLOOKUP, HLOOKUP, SUM, AVERAGE,PMT, CONCATENATE, NOW, MAX, MIN, COUNT, RIGHT, MID, dan LEFT, serta pembuatan grafik dan tabel untuk analisis data.</span></li>
          </ul>
          <p>
            Setelah menyelesaikan pelatihan selama 1 bulan saya mendapatkan sertifikat dan di nyatakan lulus dengan nilai memuaskan.
          <p>
        </div>
      `
    };

    // Tampilkan pengalaman default (jika ada)
    experienceContent.innerHTML = experienceData[1];

    // Tambahkan event listener ke tiap link
    experienceLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        // Hapus class 'active' dari semua link
        experienceLinks.forEach(el => el.classList.remove("active"));

        // Tambahkan class 'active' ke link yang diklik
        this.classList.add("active");

        // Ambil ID pengalaman
        const id = this.getAttribute("data-id");

        // Ganti konten pengalaman
        experienceContent.innerHTML = experienceData[id];
      });
    });
  });

  
  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();
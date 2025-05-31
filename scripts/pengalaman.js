(function() {
  "use strict";

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
                  <p><a href="https://maps.app.goo.gl/87zcfbZygu1i8d1u7" target="_blank" rel="noopener noreferrer">Jl. Raya Dukuh Kupang Barat No.03, Pakis, Kec. Sawahan, Surabaya, Jawa Timur 60225</a></p>
                </div>
              </div>
            </div>
          <p>
            Ini adalah pertama kalinya saya bekerja setelah lulus sekolah. Awalnya, saya bekerja di rumah makan ini sebagai pelayan atau waiter. Saya mulai bekerja di sini sejak awal rumah makan ini dibuka, yaitu pada akhir Oktober 2019. Lokasi rumah makan ini berada di Kota Surabaya, Jawa Timur. Dua bulan setelahnya, saya dipindahkan ke posisi sebagai tukang pencuci piring atau dishwasher karena adanya kekosongan pada posisi tersebut, dan saya mengajukan diri untuk mengisi posisi tersebut.
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
            Saya bekerja di sini selama lebih dari 4 bulan, lalu saya keluar pada bulan Februari 2020. Alasan saya keluar karena adanya masalah keuangan di rumah makan tersebut, sehingga rumah makan ini ditutup secara permanen dan melakukan pemberhentian semua pekerja.
        </div>
        `,
      2: `
        <div data-aos="fade-up" data-aos-delay="200">
          <img src="assets/img/pt merekah sukses.jpg" alt="" class="img-fluid pengalaman-img">
          <h2>Bekerja di PT MEREKAH SUKSES<br></h2>
            <div class="info-wrap" data-aos="fade-up" data-aos-delay="200">
              <div class="row gy-5">

                <div class="info-alamat d-flex align-items-center">
                  <p><a href="https://maps.app.goo.gl/rv4f5tuStC5XamVb6" target="_blank" rel="noopener noreferrer">Jl. Raya Wiguna Utara No.34, Kec. Gn. Anyar,GN. Anyar Tambak, Surabaya, Jawa Timur 60294</a></p>
                <div>
              </div>
            </div>
          <h3>PT Merekah Sukses (MKS) adalah perusahaan swasta nasional yang berlokasi di Surabaya, Indonesia, dan bergerak di bidang jasa kontraktor infrastruktur telekomunikasi. Perusahaan ini telah dipercaya oleh partner kerja yaitu PT Tower Bersama Group (Tbk) dalam membangun banyak proyek infrastruktur telekomunikasi di Indonesia, termasuk pembangunan dan pemeliharaan infrastruktur seperti new build, co-location, maintenance (corrective dan preventive), akuisisi lahan, dan perizinan tower BTS yang tersebar di seluruh Indonesia.</h3>
          <p>
            Setelah keluar dari rumah makan pujasera, saya mencoba pengalaman baru dengan bekerja di PT Merekah Sukses. Ini merupakan pekerjaan kedua saya setelah menganggur selama 1 tahun karena pandemi Covid-19 yang terjadi pada saat itu, sehingga sangat sulit untuk mencari pekerjaan. Perusahaan ini bergerak di bidang telekomunikasi, dan posisi saya di perusahaan ini adalah sebagai agen Call Center. Saya mulai bekerja di perusahaan ini pada bulan April 2021. Perusahaan ini terletak di Surabaya, Jawa Timur.
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
            Saya bekerja disini selama 1 tahun dan saya resign pada bulan Maret 2021. Alasan saya keluar karena saya pada saat itu sakit ambeien, sampai pada akhirnya saya berobat dan dokter menyarankan saya untuk istirahat sambil pemulihan diri di rumah sampai benar-benar sembuh, karena saya saat itu menolak untuk dioperasi. Pada akhirnya, saya sembuh setelah beberapa bulan.
          <p>
        </div>
      `,
      3: `
        <div data-aos="fade-up" data-aos-delay="200">
          <img src="assets/img/indomaret.jpg" alt="" class="img-fluid pengalaman-img">
          <h2>Bekerja di PT INDOMARCO PRISMATAMA<br></h2>
            <div class="info-wrap" data-aos="fade-up" data-aos-delay="200">
              <div class="row gy-5">

                <div class="info-alamat d-flex align-items-center">
                  <p><a href="https://maps.app.goo.gl/j9PdrWF6nK3JB6Gz7" target="_blank" rel="noopener noreferrer">Janti, Kec. Jogoroto, Kabupaten Jombang, Jawa Timur 61485</a></p>
                <div>
              </div>
            </div>
          <h3>PT Indomarco Prismatama, yang dikenal dengan jaringan minimarket Indomaret, adalah perusahaan ritel swasta nasional yang mengelola jaringan minimarket di Indonesia. Perusahaan ini didirikan pada tahun 1988 dan telah menjadi salah satu jaringan minimarket terbesar di Indonesia.</h3>
          <p>
            Setelah meninggalkan PT Merekah Sukses, saya melamar pekerjaan di PT Indomarco Prismatama sebagai crew store. Saya diterima di perusahaan ini dan mulai bekerja pada tanggal 1 Desember 2022. Perusahaan ini memiliki banyak cabang di berbagai lokasi, dan pada saat itu saya melamar di cabang Jombang yang berlokasi di Kabupaten Jombang, Jawa Timur.
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
            Saya bekerja di PT Indomarco Prismatama selama 1 tahun dan saya keluar pada bulan November 2023. Alasan saya keluar karena ada pekerjaan di luar jobdesk yang disuruh oleh atasan saya di toko. Kegiatan itu juga melanggar SOP kerja dan apabila ketahuan akan dikenakan sanksi dari HRD.
          <p>
        </div>
      `,
      4: `
        <div data-aos="fade-up" data-aos-delay="200">
          <img src="assets/img/latihan komputer.jpg" alt="" class="img-fluid pengalaman-img">
          <h2>Mengikuti pelatihan di LAA TANSA<br></h2>
            <div class="info-wrap" data-aos="fade-up" data-aos-delay="200">
              <div class="row gy-5">

                <div class="info-alamat d-flex align-items-center">
                  <p><a href="https://maps.app.goo.gl/AVwhm5kSbNZkc3my7" target="_blank" rel="noopener noreferrer">Jl. Jenderal Sudirman, Kerek, Margomulyo, Kec. Ngawi, Kabupaten Ngawi, Jawa Timur 63217</a></p>
                <div>
              </div>
            </div>
          <p>
            Selama bekerja di PT Indomarco Prismatama, saya mengikuti pelatihan Pengoperasian Microsoft Word dan Excel untuk menambah wawasan dan pengetahuan. Pelatihan ini dapat dikatakan sebagai pelatihan privat karena sifatnya yang lebih personal. Saya mengikuti pelatihan ini pada bulan Juni 2023 dan berhasil menyelesaikannya pada bulan Juli 2023.
          <p>
            <strong>Selama mengikuti pelatihan disini saya meempelajari beberapa hal yang bermanfaat antara lain:</strong>
          </p>
          <ul>
            <li><i class="bi bi-check-circle"></i> <span>Memahami tentang microsoft windows dan internet.</span></li>
            <li><i class="bi bi-check-circle"></i> <span>Mempelajari cara mengoperasikan Microsoft Word, termasuk pengolahan dokumen, penulisan dan pengeditan, penggunaan template, tabel dan grafik, serta fitur lainnya seperti mail merge dan track changes.</span></li>
            <li><i class="bi bi-check-circle"></i> <span>Mempelajari cara mengoperasikan Microsoft Excel dan memiliki pengetahuan tentang pengolahan data, penggunaan formula dan fungsi seperti IF, VLOOKUP, HLOOKUP, SUM, AVERAGE,PMT, CONCATENATE, NOW, MAX, MIN, COUNT, RIGHT, MID, dan LEFT, serta pembuatan grafik dan tabel untuk analisis data.</span></li>
          </ul>
          <p>
            Setelah menyelesaikan pelatihan selama 1 bulan, saya mendapatkan sertifikat dan dinyatakan lulus dengan nilai yang memuaskan.
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
})();
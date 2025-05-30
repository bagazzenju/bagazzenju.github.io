(function() { emailjs.init('bXY7HtbmJcff0T-XE')})();

const form = document.querySelector(".message-box");

function sendMsg(e) {
    e.preventDefault();

    const name = document.querySelector('.name').value;
    const subject = document.querySelector('.subject').value;
    const message = document.querySelector('.message').value;

    // Format pesan WhatsApp
    const waText = `Hallo saya ${name}%0A${subject}%0A${message}`;
    const phoneNumber = "6285755306576";
    const waURL = `https://wa.me/${phoneNumber}?text=${waText}`;

    // Buka WhatsApp
    window.open(waURL, '_blank');

    form.reset(); // Reset form setelah kirim
}

form.addEventListener('submit', sendMsg);

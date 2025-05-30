document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".myskill").forEach((skill) => {
    const percent = skill.getAttribute("data-percent");
    const arc = skill.querySelector(".arc");
    const deg = percent * 3.6; // 100% = 360deg
    arc.style.setProperty("--percentage", deg + "deg");
  });
});
function showPopup(title, percentage, description) {
  document.getElementById('popup-title').innerText = title;
  document.getElementById('popup-description').innerText = description;
  document.getElementById('popup-progress').style.width = percentage + '%';
  document.getElementById('popup').classList.remove('hidden');
}

function closePopup() {
  document.getElementById('popup').classList.add('hidden');
}
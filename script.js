const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

function showTab(name) {
  tabs.forEach(t => t.classList.toggle("active", t.dataset.tab === name));
  panels.forEach(p => p.classList.toggle("active", p.id === name));
  history.replaceState(null, "", "#" + name); 
}

tabs.forEach(t => t.addEventListener("click", () => showTab(t.dataset.tab)));

const start = location.hash.slice(1);
if (document.getElementById(start)) showTab(start);

document.getElementById("year").textContent = new Date().getFullYear();

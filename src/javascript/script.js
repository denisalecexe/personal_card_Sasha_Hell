document.getElementById("toggleButton").addEventListener("click", function() {
  const card = document.getElementById("characterCard");
  if (card.classList.contains("hidden")) {
      card.classList.remove("hidden");
      this.textContent = "Close folder character of Alexander Nikikaevich Hell";
  } else {
      card.classList.add("hidden");
      this.textContent = "Open folder character of Alexander Nikikaevich Hell";
  }
});
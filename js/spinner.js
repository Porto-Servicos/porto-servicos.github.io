document.addEventListener("DOMContentLoaded", ()=>{
  function change() {
    const spinner = document.getElementById("spinner");
    const items = document.getElementById("items");
    const first = items.firstElementChild;
    items.appendChild(first)
    spinner.innerHTML = "";
    spinner.appendChild(items);
  }
  const loop = setInterval(change, 5000);
})
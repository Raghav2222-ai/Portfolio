document.getElementById("croos").style.display = "none";
document.querySelector(".hambgr").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("sidebargo");
  if (document.querySelector(".sidebar").classList.contains("sidebargo")) {
    document.querySelector("hambgr").style.display = "inline";
    document.querySelector("croos").style.display = "none";
  } else {
    document.querySelector(".hambgr").style.display = "none";
    setTimeout(() => {
      document.querySelector("#croos").style.display = "inline";
    }, 300);
  }
});
document.querySelector("#croos").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("sidebargo");
  if (document.querySelector(".sidebar").classList.contains("sidebargo")) {
    document.querySelector(".hambgr").style.display = "inline";
    document.querySelector("#croos").style.display = "none";
  } else {
    document.querySelector(".hambgr").style.display = "none";
    setTimeout(() => {
      document.querySelector("#croos").style.display = "inline";
    }, 300);
  }
});

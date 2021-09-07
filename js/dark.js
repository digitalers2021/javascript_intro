function darkMode() {
  const estado = window.localStorage.getItem("darkMode")
  if (estado === "false"){
    document.body.classList.add("dark-mode");
    window.localStorage.setItem("darkMode", "true")
  } else {
    document.body.classList.remove("dark-mode")
    window.localStorage.setItem("darkMode", "false")
  }
  // document.body.classList.toggle("dark-mode");
} 
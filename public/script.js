function iniciarServidor() {
  fetch("/start", { method: "POST" })
    .then(res => res.json())
    .then(data => {
      alert(data.message);
      document.getElementById("status").innerText = "Status: Online";
    })
    .catch(() => alert("Erro ao iniciar o servidor."));
}

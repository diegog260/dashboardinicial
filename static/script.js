
const socket = io();
socket.on('atualizar', (data) => {
  document.getElementById('status').textContent = data.mini_indice;
  document.getElementById('prob').textContent = data.probabilidade;
});

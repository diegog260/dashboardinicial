document.addEventListener("DOMContentLoaded", function () {
    const divGrafico = document.getElementById("grafico");

    if (divGrafico) {
        divGrafico.innerHTML = `
            <div style="padding: 20px; background-color: #1e1e1e; color: #00ff99; text-align: center; border-radius: 8px;">
                ✅ Gráfico carregado com sucesso!<br>
                <small>(Conteúdo simulado vindo do script.js)</small>
            </div>
        `;
    } else {
        console.error("❌ Div 'grafico' não encontrada.");
    }
});
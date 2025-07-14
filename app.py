
from flask import Flask, render_template
from flask_socketio import SocketIO
import threading, time

app = Flask(__name__)
socketio = SocketIO(app)

def enviar_dados():
    while True:
        dados = {"mini_indice": "Subindo", "probabilidade": "82% alta"}
        socketio.emit('atualizar', dados)
        time.sleep(1)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    threading.Thread(target=enviar_dados).start()
    socketio.run(app, host='0.0.0.0', port=5000)

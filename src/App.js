import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [resposta, setResposta] = useState({ cep: '', endereco: '' });

  useEffect(() => {

    axios.get(`https://viacep.com.br/ws/${resposta.cep}/json/`).then(response => {
        setResposta({ cep: response.data.cep, endereco: response.data.logradouro })
    });

  }, [resposta.cep, resposta.endereco]);

  return (
    <div>

      <section>

        <h1>DIGITE SEU CEP</h1>

        <div>
          <input type="text" value={resposta.cep} onChange={(event) => {
            setResposta({ cep: event.target.value });
          }} />
        </div>

        <div>
          <p>CEP: {resposta.cep}</p>
          <p>ENDEREÇO: {resposta.endereco}</p>
        </div>

      </section>
    </div>
  );

}

export default App;

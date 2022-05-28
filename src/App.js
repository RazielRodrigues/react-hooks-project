import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [resposta, setResposta] = useState({ cep: '', endereco: '' , bairro: '', localidade: '', uf: '' });

  useEffect(() => {

    axios.get(`https://viacep.com.br/ws/${resposta.cep}/json/`).then(response => {
      setResposta({ 
        cep: response.data.cep, 
        endereco: response.data.logradouro,
        bairro: response.data.bairro,
        localidade: response.data.localidade,
        uf: response.data.uf
      })
    });
  }, [resposta.cep, resposta.endereco, resposta.bairro, resposta.localidade, resposta.uf]);

  return (
    <div>

      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-text m-auto">BUSCA DE CEP</span>
        </div>
      </nav>

      <section className='container mt-5'>
        <label for="cep" class="form-label">CEP</label>
        <input min="9" max="9" id="cep" placeholder="00000-000" className='form-control' type="text" value={resposta.cep} onChange={(event) => {
          setResposta({ cep: event.target.value });
        }} />
      </section>

      {
        resposta.endereco &&

        <section className="container mt-5">
          <div className="card">
            <div className="card-header">
              Resultado
            </div>

            <div className="card-body">
              <p className="card-text">CEP: {resposta.cep}</p>
              <p className="card-text">Logradouro: {resposta.endereco}</p>
              <p className="card-text">Bairro: {resposta.bairro}</p>
              <p className="card-text">Cidade: {resposta.localidade}</p>
              <p className="card-text">Estado: {resposta.uf}</p>
              <button className="btn btn-outline-primary form-control" onClick={() => {window.print()}}>
                Imprimir
              </button>
            </div>
          </div>
        </section>

      }

    </div>
  );

}

export default App;

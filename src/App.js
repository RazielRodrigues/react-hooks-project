import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  // bairro: "Vila Santista"
  // cep: "17054-500"
  // complemento: ""
  // ddd: "14"
  // gia: "2094"
  // ibge: "3506003"
  // localidade: "Bauru"
  // logradouro: "Rua Seiti Takeda"
  // siafi: "6219"
  // uf: "SP"

  const [resposta, setResposta] = useState({ cep: '', endereco: '' });

  useEffect(() => {

    axios.get(`https://viacep.com.br/ws/${resposta.cep}/json/`).then(response => {
      setResposta({ 
        cep: response.data.cep, 
        endereco: response.data.logradouro 
      })
    });
  }, [resposta.cep, resposta.endereco]);

  return (
    <div>

      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-text m-auto">BUSCA DE CEP</span>
        </div>
      </nav>

      <section className='container mt-5'>
        <label for="cep" class="form-label">Digite seu CEP</label>
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
              <h5 className="card-title">{resposta.cep}</h5>
              <p className="card-text">{resposta.endereco}</p>
              {/* <p className="card-text">Logradaouro: {resposta.endereco}</p>
              <p className="card-text">Logradaouro: {resposta.endereco}</p>
              <p className="card-text">Logradaouro: {resposta.endereco}</p>
              <p className="card-text">Logradaouro: {resposta.endereco}</p>
              <p className="card-text">Logradaouro: {resposta.endereco}</p>
              <p className="card-text">Logradaouro: {resposta.endereco}</p>
              <p className="card-text">Logradaouro: {resposta.endereco}</p> */}
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

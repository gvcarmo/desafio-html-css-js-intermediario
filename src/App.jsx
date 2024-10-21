import './css/reset.css'
import './css/style.css'

import { useForm } from 'react-hook-form'

function App() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleSubmitForm = (data) => {
    console.log(data)
  }

  return (
    <>
      <main>
        <div className="container">
          <div className="textos">
            <h1>FICOU COM DÚVIDA? NOS MANDE UMA MENSAGEM!</h1>
            <p>caso tenha ficado com qualquer dúvida basta nos mandar uma mensagem e entraremos em contato em menos
              de 24h.</p>
          </div>

          <div className="formulario">
            <form className="form" onSubmit={handleSubmit(handleSubmitForm)}>
              <div className="todos-inputs">

                <label htmlFor="nome" />
                <input
                  className={`allInputs ${errors.nome ? "obrigatorio-n" : "obrigatorio-ok"}`}
                  type="text"
                  placeholder="Nome completo *"
                  {
                  ...register('nome', {
                    required: "Campo obrigatório",
                  })
                  } />
                {errors.nome && <p className="obrigatorio no-text">{errors.nome.message}</p>}

              </div>
              <div className="todos-inputs">
                <label htmlFor="email" />
                <input
                  className={`allInputs ${errors.email ? "obrigatorio-n" : "obrigatorio-ok"}`}
                  type="text"
                  placeholder="Email *"
                  {
                  ...register('email', {
                    required: "Campo obrigatório",
                  })
                  } />
                {errors.email && <p className="obrigatorio no-text">{errors.email.message}</p>}
              </div>
              <div className="todos-inputs">
                <label htmlFor="telefone" />
                <input
                  className={`allInputs ${errors.telefone ? "obrigatorio-n" : "obrigatorio-ok"}`}
                  type="number"
                  placeholder="Telefone *"
                  {
                  ...register('telefone', {
                    required: "Campo obrigatório",
                  })
                  } />
                {errors.telefone && <p className="obrigatorio no-text">{errors.telefone.message}</p>}
              </div>
              <div className="todos-inputs">
                <label htmlFor="mensagem" />
                <textarea
                  className={`allInputs ${errors.mensagem ? "obrigatorio-n" : "obrigatorio-ok"}`}
                  type="text"
                  cols="35"
                  rows="5"
                  placeholder="Mensagem *"
                  {
                  ...register('mensagem', {
                    required: "Campo obrigatório",
                  })
                  } ></textarea>
                {errors.mensagem && <p className="obrigatorio obrigatorio-last no-text">{errors.mensagem.message}</p>}
              </div>
              <p className="required-field">* campos obrigatórios</p>
              <button className="btn">Enviar</button>
            </form>
          </div>

        </div>
      </main >
    </>
  )
}

export default App

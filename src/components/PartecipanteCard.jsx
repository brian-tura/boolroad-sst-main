import React from 'react'

const PartecipanteCard = ({nome, cognome, codice_fiscale, telefono, email, numero_emergenza}) => {
  return (
    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                >
                                    <p>{nome} {cognome}</p>
                                </button>
                            </h2>
                            <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    <ul>
                                        <li>Codice Fiscale: {codice_fiscale}</li>
                                        <li>Telefono: {telefono}</li>
                                        <li>Email: {email}</li>
                                        <li>Numero di emergenza: {numero_emergenza}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
  )
}

export default PartecipanteCard
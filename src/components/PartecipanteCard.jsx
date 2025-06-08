import React from 'react'

const PartecipanteCard = ({ nome, cognome, codice_fiscale, telefono, email, index }) => {
    return (
        <div key={index} className="accordion mb-2">
            <div className="accordion-item">
                <h2 className="accordion-header" id={`heading-${index}`}>
                    <button
                        className="accordion-button collapsed bg-white"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${index}`}
                        aria-expanded="false"
                        aria-controls={`collapse-${index}`}
                    >
                        {nome} {cognome}
                    </button>
                </h2>
                <div
                    id={`collapse-${index}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`heading-${index}`}
                >
                    <div className="info accordion-body">
                        <ul>
                            <li>Codice Fiscale: {codice_fiscale}</li>
                            <li>Telefono: {telefono}</li>
                            <li>Email: {email}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartecipanteCard
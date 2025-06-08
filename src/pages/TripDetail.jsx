import React from 'react'
import { useState, useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import tripContext from '../contexts/TripContext'
import PartecipanteCard from '../components/PartecipanteCard'

const TripDetail = () => {
    const { viaggi } = useContext(tripContext)

    const { id } = useParams()

    const [trip, setTrip] = useState({})

    useEffect(() => {

        const foundTrip = viaggi.find((viaggio) => (viaggio.id.toString() === id))

        if (foundTrip) {
            setTrip(foundTrip)
        }
    }, [])


    return (
        <>

            <h4 className='tripTitle'>{`Partecipanti alla gita a ${trip.nome}`}</h4>
            <div className="input-group">
                <div className="form-outline d-flex" >
                    <input type="text" placeholder='Cerca partecipante...' className="form-control border border-2 border-primary rounded-0 rounded-start" />
                    <button type="submit" className="btn btn-primary rounded-0 rounded-end">
                        <i className="fas fa-search" /> Cerca
                    </button>
                </div>
            </div>
            <hr />
            {trip.partecipanti && trip.partecipanti.map((partecipante) => {
                return (
                    <PartecipanteCard nome={partecipante.nome} cognome={partecipante.cognome} codice_fiscale={partecipante.codice_fiscale} telefono={partecipante.telefono} email={partecipante.email} numero_emergenza={partecipante.numero_emergenza} />
                )
            })}
            <Link to={`/viaggi`}>
                <button
                    type="button"
                    className="btn btn-primary btn-rounded"
                    data-mdb-ripple-init=""
                >
                    Torna alla lista gite
                </button>
            </Link>
        </>
    )
}

export default TripDetail
import React from 'react'
import { useState, useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import tripContext from '../contexts/TripContext'
import PartecipanteCard from '../components/PartecipanteCard'

const TripDetail = () => {
    const { viaggi } = useContext(tripContext)

    const { id } = useParams()

    const [trip, setTrip] = useState({})

    const [searchInput, setSearchInput] = useState("")

    const [partecipantiFiltrati, setPartecipantiFiltrati] = useState([])

    useEffect(() => {
        const foundTrip = viaggi.find((viaggio) => (viaggio.id.toString() === id))

        if (foundTrip) {
            setTrip(foundTrip)
            setPartecipantiFiltrati(foundTrip.partecipanti)
        }
    }, [])


    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value)
    }

    useEffect(() => {
        if (trip.partecipanti) {
            const filtered = trip.partecipanti.filter((partecipante) => {
                const fullName = `${partecipante.nome} ${partecipante.cognome}`.toLowerCase()
                return fullName.includes(searchInput.toLowerCase())
            })
            setPartecipantiFiltrati(filtered)
        }
    }, [searchInput, trip.partecipanti])

    return (
        <>
            <div className='d-flex justify-content-between align-items-center mt-2'>
                <div>
                    <div className="input-group mb-2">
                        <div className="form-outline d-flex" >
                            <input type="text" placeholder='Cerca partecipante...' onChange={handleChange} value={searchInput} className="form-control border border-2 border-primary rounded-0 rounded-start" />
                        </div>
                    </div>
                    <Link to={`/viaggi`}>
                        <button
                            type="button"
                            className="btn btn-primary btn-rounded"
                            data-mdb-ripple-init=""
                        >
                            Torna alla lista gite
                        </button>
                    </Link >
                </div>
                <h4 className='tripTitle'>{`Partecipanti alla gita a ${trip.nome}`}</h4>
            </div>
            <hr />
            {partecipantiFiltrati && partecipantiFiltrati.map((partecipante) => {
                return (
                    <PartecipanteCard nome={partecipante.nome} cognome={partecipante.cognome} codice_fiscale={partecipante.codice_fiscale} telefono={partecipante.telefono} email={partecipante.email} index={partecipante.id} />
                )
            })
            }
        </>
    )
}

export default TripDetail
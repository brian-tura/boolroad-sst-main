import { useContext } from "react"
import tripContext from "../contexts/TripContext"
import TripCard from "../components/TripCard"


const Homepage = () => {

  const { viaggi } = useContext(tripContext)

  return (
    <div className="row mt-2 px-3 gy-3">
      <div className="col-12 text-end">
        <h1 className="fw-semibold text-white">Gite in corso</h1>
      </div>
      {viaggi.map((viaggio) => (
        <TripCard id={viaggio.id} nome={viaggio.nome} luogo={viaggio.luogo} data_partenza={viaggio.data_partenza} data_arrivo={viaggio.data_arrivo} />
      ))}
    </div>
  )
}

export default Homepage
import { useContext } from "react"
import tripContext from "../contexts/TripContext"
import { Link } from "react-router-dom"


const Homepage = () => {

  const { viaggi } = useContext(tripContext)

  return (
    <div className="row mt-2 px-3 gy-3">
      <div className="col-12 text-end">
        <h1 className="fw-semibold text-white">Gite in corso</h1>
      </div>
      {viaggi.map(elem => (
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <Link className="link-trip" to={`/viaggi/${elem.id}`}>
                <h3 className="card-title">{elem.nome}</h3>
              </Link>
              <h6 className="card-title fw-semibold">{elem.luogo}</h6>
              <div className="card-text">
                <i className="fa-regular fa-calendar me-1"></i>{elem.data_partenza}
                <i className="fa-regular fa-calendar ms-5 me-1"></i>{elem.data_arrivo}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Homepage
import React from 'react'
import { Link } from 'react-router-dom'

const TripCard = ({id, nome, luogo, data_partenza, data_arrivo}) => {
  return (
    <div key={id} className="col-12">
          <div className="card">
            <div className="card-body">
              <Link className="link-trip" to={`/viaggi/${id}`}>
                <h3 className="card-title">{nome}</h3>
              </Link>
              <h6 className="card-title fw-semibold">{luogo}</h6>
              <div className="card-text">
                <i className="fa-regular fa-calendar me-1"></i>{data_partenza}
                <i className="fa-regular fa-calendar ms-5 me-1"></i>{data_arrivo}
              </div>
            </div>
          </div>
        </div>
  )
}

export default TripCard
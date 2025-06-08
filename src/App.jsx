import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Homepage from "./pages/Homepage";
import TripDetail from "./pages/TripDetail";
import tripContext from "./contexts/TripContext";

  const viaggi = [
    {
      id: 1,
      nome: "Gran Paradiso",
      data_partenza: "2025-07-15",
      data_arrivo: "2025-07-21",
      tipologia: "Avventure wild",
      luogo: "Valle d'Aosta",
      coordinatore: "Luca Moretti",
      accompagnatori: ["Giulia Ferri", "Marco Neri"],
      partecipanti: [
        {
          id: 1,
          nome: "Mario",
          cognome: "Rossi",
          codice_fiscale: "RSSMRA97A16700Q",
          telefono: 1234567890,
          email: "example@gmail.com"
        },
        {
          id: 2,
          nome: "Paolo",
          cognome: "Casadei",
          codice_fiscale: "RSSMRA97A16700Q",
          telefono: 1234567890,
          email: "example@gmail.com"
        }]
    },
    {
      id: 2,
      nome: "Firenze",
      data_partenza: "2025-08-03",
      data_arrivo: "2025-08-08",
      tipologia: "Visite guidate soft",
      luogo: "Firenze, Siena, Pisa",
      coordinatore: "Elena Bianchi",
      accompagnatori: ["Francesca Rossi"],
      partecipanti: [
        {
          id: 1,
          nome: "Mario",
          cognome: "Rossi",
          codice_fiscale: "RSSMRA97A16700Q",
          telefono: 1234567890,
          email: "example@gmail.com"
        },
        {
          id: 2,
          nome: "Paolo",
          cognome: "Casadei",
          codice_fiscale: "RSSMRA97A16700Q",
          telefono: 1234567890,
          email: "example@gmail.com"
        }]
    },
    {
      id: 3,
      nome: "Dolomiti",
      data_partenza: "2025-06-22",
      data_arrivo: "2025-06-28",
      tipologia: "Avventure wild",
      luogo: "Val di Fassa, Trentino-Alto Adige",
      coordinatore: "Davide Conti",
      accompagnatori: ["Lucia Verdi", "Andrea Gallo"],
      partecipanti: [
        {
          id: 1,
          nome: "Mario",
          cognome: "Rossi",
          codice_fiscale: "RSSMRA97A16700Q",
          telefono: 1234567890,
          email: "example@gmail.com"
        },
        {
          id: 2,
          nome: "Paolo",
          cognome: "Casadei",
          codice_fiscale: "RSSMRA97A16700Q",
          telefono: 1234567890,
          email: "example@gmail.com"
        }]
    },
    {
      id: 4,
      nome: "Roma",
      data_partenza: "2025-09-10",
      data_arrivo: "2025-09-13",
      tipologia: "Visite guidate soft",
      luogo: "Roma",
      coordinatore: "Sara Mancini",
      accompagnatori: ["Federico Romano"],
      partecipanti: [
        {
          id: 1,
          nome: "Mario",
          cognome: "Rossi",
          codice_fiscale: "RSSMRA97A16700Q",
          telefono: 1234567890,
          email: "example@gmail.com"
        },
        {
          id: 2,
          nome: "Paolo",
          cognome: "Casadei",
          codice_fiscale: "RSSMRA97A16700Q",
          telefono: 1234567890,
          email: "example@gmail.com"
        }]
    },
    {
      id: 5,
      nome: "Firenze",
      data_partenza: "2025-06-06",
      data_arrivo: "2025-06-08",
      tipologia: "Avventure wild",
      luogo: "Toscana",
      coordinatore: "Matteo Ricci",
      accompagnatori: ["Chiara De Luca"],
      partecipanti: [
        {
          id: 1,
          nome: "Mario",
          cognome: "Rossi",
          codice_fiscale: "RSSMRA97A16700Q",
          telefono: 1234567890,
          email: "example@gmail.com"
        },
        {
          id: 2,
          nome: "Paolo",
          cognome: "Casadei",
          codice_fiscale: "RSSMRA97A16700Q",
          telefono: 1234567890,
          email: "example@gmail.com"
        }]
    }
  ];


const App = () => {



  return (
    <>
      <tripContext.Provider value={{ viaggi }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/viaggi" element={<Homepage />} />
              <Route path="/viaggi/:id" element={<TripDetail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </tripContext.Provider>
    </>
  )
}

export default App

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
      { id: 1, nome: "Mario", cognome: "Rossi", codice_fiscale: "RSSMRA80A01H501U", telefono: "3331112233", email: "mario.rossi@example.com" },
      { id: 2, nome: "Luisa", cognome: "Bianchi", codice_fiscale: "BNCLSU85B41H501W", telefono: "3332223344", email: "luisa.bianchi@example.com" },
      { id: 3, nome: "Giulia", cognome: "Verdi", codice_fiscale: "VRDGLI90C20H501E", telefono: "3333334455", email: "giulia.verdi@example.com" },
      { id: 4, nome: "Alessandro", cognome: "Neri", codice_fiscale: "NREALX75D10H501H", telefono: "3334445566", email: "alessandro.neri@example.com" },
      { id: 5, nome: "Sofia", cognome: "Costa", codice_fiscale: "CSTSOF92E30H501A", telefono: "3335556677", email: "sofia.costa@example.com" },
      { id: 6, nome: "Luca", cognome: "Ferrari", codice_fiscale: "FRRLUC88F12H501Y", telefono: "3336667788", email: "luca.ferrari@example.com" },
      { id: 7, nome: "Martina", cognome: "Romano", codice_fiscale: "RMNMRT86G25H501L", telefono: "3337778899", email: "martina.romano@example.com" },
      { id: 8, nome: "Davide", cognome: "Conti", codice_fiscale: "CNTDVD84H15H501N", telefono: "3338889900", email: "davide.conti@example.com" },
      { id: 9, nome: "Chiara", cognome: "Greco", codice_fiscale: "GRCCHR91I10H501M", telefono: "3339990011", email: "chiara.greco@example.com" },
      { id: 10, nome: "Francesco", cognome: "Lombardi", codice_fiscale: "LMBFNC87L01H501X", telefono: "3340001122", email: "francesco.lombardi@example.com" },
      { id: 11, nome: "Elena", cognome: "Barbieri", codice_fiscale: "BRBLNE85M20H501C", telefono: "3341112233", email: "elena.barbieri@example.com" },
      { id: 12, nome: "Giorgio", cognome: "Mariani", codice_fiscale: "MRIGRG83N05H501R", telefono: "3342223344", email: "giorgio.mariani@example.com" },
      { id: 13, nome: "Simona", cognome: "De Luca", codice_fiscale: "DLCSMN79P18H501B", telefono: "3343334455", email: "simona.deluca@example.com" },
      { id: 14, nome: "Marco", cognome: "Galli", codice_fiscale: "GLLMRC80Q25H501U", telefono: "3344445566", email: "marco.galli@example.com" },
      { id: 15, nome: "Alessia", cognome: "Rizzo", codice_fiscale: "RZZLSS82R12H501T", telefono: "3345556677", email: "alessia.rizzo@example.com" },
      { id: 16, nome: "Paolo", cognome: "Esposito", codice_fiscale: "SPSPLA78S28H501F", telefono: "3346667788", email: "paolo.esposito@example.com" },
      { id: 17, nome: "Valentina", cognome: "Colombo", codice_fiscale: "CLBVLT93T04H501V", telefono: "3347778899", email: "valentina.colombo@example.com" },
      { id: 18, nome: "Stefano", cognome: "Martini", codice_fiscale: "MRTSFN76U17H501N", telefono: "3348889900", email: "stefano.martini@example.com" },
      { id: 19, nome: "Serena", cognome: "Vitale", codice_fiscale: "VTLsRN81V30H501G", telefono: "3349990011", email: "serena.vitale@example.com" },
      { id: 20, nome: "Nicola", cognome: "Fontana", codice_fiscale: "FNTNCL89W08H501E", telefono: "3350001122", email: "nicola.fontana@example.com" }
    ]
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
      { id: 1, nome: "Mario", cognome: "Rossi", codice_fiscale: "RSSMRA80A01H501U", telefono: "3331112233", email: "mario.rossi@example.com" },
      { id: 2, nome: "Luisa", cognome: "Bianchi", codice_fiscale: "BNCLSU85B41H501W", telefono: "3332223344", email: "luisa.bianchi@example.com" },
      { id: 3, nome: "Giulia", cognome: "Verdi", codice_fiscale: "VRDGLI90C20H501E", telefono: "3333334455", email: "giulia.verdi@example.com" },
      { id: 4, nome: "Alessandro", cognome: "Neri", codice_fiscale: "NREALX75D10H501H", telefono: "3334445566", email: "alessandro.neri@example.com" },
      { id: 5, nome: "Sofia", cognome: "Costa", codice_fiscale: "CSTSOF92E30H501A", telefono: "3335556677", email: "sofia.costa@example.com" },
      { id: 6, nome: "Luca", cognome: "Ferrari", codice_fiscale: "FRRLUC88F12H501Y", telefono: "3336667788", email: "luca.ferrari@example.com" },
      { id: 7, nome: "Martina", cognome: "Romano", codice_fiscale: "RMNMRT86G25H501L", telefono: "3337778899", email: "martina.romano@example.com" },
      { id: 8, nome: "Davide", cognome: "Conti", codice_fiscale: "CNTDVD84H15H501N", telefono: "3338889900", email: "davide.conti@example.com" },
      { id: 9, nome: "Chiara", cognome: "Greco", codice_fiscale: "GRCCHR91I10H501M", telefono: "3339990011", email: "chiara.greco@example.com" },
      { id: 10, nome: "Francesco", cognome: "Lombardi", codice_fiscale: "LMBFNC87L01H501X", telefono: "3340001122", email: "francesco.lombardi@example.com" },
      { id: 11, nome: "Elena", cognome: "Barbieri", codice_fiscale: "BRBLNE85M20H501C", telefono: "3341112233", email: "elena.barbieri@example.com" },
      { id: 12, nome: "Giorgio", cognome: "Mariani", codice_fiscale: "MRIGRG83N05H501R", telefono: "3342223344", email: "giorgio.mariani@example.com" },
      { id: 13, nome: "Simona", cognome: "De Luca", codice_fiscale: "DLCSMN79P18H501B", telefono: "3343334455", email: "simona.deluca@example.com" },
      { id: 14, nome: "Marco", cognome: "Galli", codice_fiscale: "GLLMRC80Q25H501U", telefono: "3344445566", email: "marco.galli@example.com" },
      { id: 15, nome: "Alessia", cognome: "Rizzo", codice_fiscale: "RZZLSS82R12H501T", telefono: "3345556677", email: "alessia.rizzo@example.com" },
      { id: 16, nome: "Paolo", cognome: "Esposito", codice_fiscale: "SPSPLA78S28H501F", telefono: "3346667788", email: "paolo.esposito@example.com" },
      { id: 17, nome: "Valentina", cognome: "Colombo", codice_fiscale: "CLBVLT93T04H501V", telefono: "3347778899", email: "valentina.colombo@example.com" },
      { id: 18, nome: "Stefano", cognome: "Martini", codice_fiscale: "MRTSFN76U17H501N", telefono: "3348889900", email: "stefano.martini@example.com" },
      { id: 19, nome: "Serena", cognome: "Vitale", codice_fiscale: "VTLsRN81V30H501G", telefono: "3349990011", email: "serena.vitale@example.com" },
      { id: 20, nome: "Nicola", cognome: "Fontana", codice_fiscale: "FNTNCL89W08H501E", telefono: "3350001122", email: "nicola.fontana@example.com" }
    ]
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
      { id: 1, nome: "Mario", cognome: "Rossi", codice_fiscale: "RSSMRA80A01H501U", telefono: "3331112233", email: "mario.rossi@example.com" },
      { id: 2, nome: "Luisa", cognome: "Bianchi", codice_fiscale: "BNCLSU85B41H501W", telefono: "3332223344", email: "luisa.bianchi@example.com" },
      { id: 3, nome: "Giulia", cognome: "Verdi", codice_fiscale: "VRDGLI90C20H501E", telefono: "3333334455", email: "giulia.verdi@example.com" },
      { id: 4, nome: "Alessandro", cognome: "Neri", codice_fiscale: "NREALX75D10H501H", telefono: "3334445566", email: "alessandro.neri@example.com" },
      { id: 5, nome: "Sofia", cognome: "Costa", codice_fiscale: "CSTSOF92E30H501A", telefono: "3335556677", email: "sofia.costa@example.com" },
      { id: 6, nome: "Luca", cognome: "Ferrari", codice_fiscale: "FRRLUC88F12H501Y", telefono: "3336667788", email: "luca.ferrari@example.com" },
      { id: 7, nome: "Martina", cognome: "Romano", codice_fiscale: "RMNMRT86G25H501L", telefono: "3337778899", email: "martina.romano@example.com" },
      { id: 8, nome: "Davide", cognome: "Conti", codice_fiscale: "CNTDVD84H15H501N", telefono: "3338889900", email: "davide.conti@example.com" },
      { id: 9, nome: "Chiara", cognome: "Greco", codice_fiscale: "GRCCHR91I10H501M", telefono: "3339990011", email: "chiara.greco@example.com" },
      { id: 10, nome: "Francesco", cognome: "Lombardi", codice_fiscale: "LMBFNC87L01H501X", telefono: "3340001122", email: "francesco.lombardi@example.com" },
      { id: 11, nome: "Elena", cognome: "Barbieri", codice_fiscale: "BRBLNE85M20H501C", telefono: "3341112233", email: "elena.barbieri@example.com" },
      { id: 12, nome: "Giorgio", cognome: "Mariani", codice_fiscale: "MRIGRG83N05H501R", telefono: "3342223344", email: "giorgio.mariani@example.com" },
      { id: 13, nome: "Simona", cognome: "De Luca", codice_fiscale: "DLCSMN79P18H501B", telefono: "3343334455", email: "simona.deluca@example.com" },
      { id: 14, nome: "Marco", cognome: "Galli", codice_fiscale: "GLLMRC80Q25H501U", telefono: "3344445566", email: "marco.galli@example.com" },
      { id: 15, nome: "Alessia", cognome: "Rizzo", codice_fiscale: "RZZLSS82R12H501T", telefono: "3345556677", email: "alessia.rizzo@example.com" },
      { id: 16, nome: "Paolo", cognome: "Esposito", codice_fiscale: "SPSPLA78S28H501F", telefono: "3346667788", email: "paolo.esposito@example.com" },
      { id: 17, nome: "Valentina", cognome: "Colombo", codice_fiscale: "CLBVLT93T04H501V", telefono: "3347778899", email: "valentina.colombo@example.com" },
      { id: 18, nome: "Stefano", cognome: "Martini", codice_fiscale: "MRTSFN76U17H501N", telefono: "3348889900", email: "stefano.martini@example.com" },
      { id: 19, nome: "Serena", cognome: "Vitale", codice_fiscale: "VTLsRN81V30H501G", telefono: "3349990011", email: "serena.vitale@example.com" },
      { id: 20, nome: "Nicola", cognome: "Fontana", codice_fiscale: "FNTNCL89W08H501E", telefono: "3350001122", email: "nicola.fontana@example.com" }
    ]
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
      { id: 1, nome: "Mario", cognome: "Rossi", codice_fiscale: "RSSMRA80A01H501U", telefono: "3331112233", email: "mario.rossi@example.com" },
      { id: 2, nome: "Luisa", cognome: "Bianchi", codice_fiscale: "BNCLSU85B41H501W", telefono: "3332223344", email: "luisa.bianchi@example.com" },
      { id: 3, nome: "Giulia", cognome: "Verdi", codice_fiscale: "VRDGLI90C20H501E", telefono: "3333334455", email: "giulia.verdi@example.com" },
      { id: 4, nome: "Alessandro", cognome: "Neri", codice_fiscale: "NREALX75D10H501H", telefono: "3334445566", email: "alessandro.neri@example.com" },
      { id: 5, nome: "Sofia", cognome: "Costa", codice_fiscale: "CSTSOF92E30H501A", telefono: "3335556677", email: "sofia.costa@example.com" },
      { id: 6, nome: "Luca", cognome: "Ferrari", codice_fiscale: "FRRLUC88F12H501Y", telefono: "3336667788", email: "luca.ferrari@example.com" },
      { id: 7, nome: "Martina", cognome: "Romano", codice_fiscale: "RMNMRT86G25H501L", telefono: "3337778899", email: "martina.romano@example.com" },
      { id: 8, nome: "Davide", cognome: "Conti", codice_fiscale: "CNTDVD84H15H501N", telefono: "3338889900", email: "davide.conti@example.com" },
      { id: 9, nome: "Chiara", cognome: "Greco", codice_fiscale: "GRCCHR91I10H501M", telefono: "3339990011", email: "chiara.greco@example.com" },
      { id: 10, nome: "Francesco", cognome: "Lombardi", codice_fiscale: "LMBFNC87L01H501X", telefono: "3340001122", email: "francesco.lombardi@example.com" },
      { id: 11, nome: "Elena", cognome: "Barbieri", codice_fiscale: "BRBLNE85M20H501C", telefono: "3341112233", email: "elena.barbieri@example.com" },
      { id: 12, nome: "Giorgio", cognome: "Mariani", codice_fiscale: "MRIGRG83N05H501R", telefono: "3342223344", email: "giorgio.mariani@example.com" },
      { id: 13, nome: "Simona", cognome: "De Luca", codice_fiscale: "DLCSMN79P18H501B", telefono: "3343334455", email: "simona.deluca@example.com" },
      { id: 14, nome: "Marco", cognome: "Galli", codice_fiscale: "GLLMRC80Q25H501U", telefono: "3344445566", email: "marco.galli@example.com" },
      { id: 15, nome: "Alessia", cognome: "Rizzo", codice_fiscale: "RZZLSS82R12H501T", telefono: "3345556677", email: "alessia.rizzo@example.com" },
      { id: 16, nome: "Paolo", cognome: "Esposito", codice_fiscale: "SPSPLA78S28H501F", telefono: "3346667788", email: "paolo.esposito@example.com" },
      { id: 17, nome: "Valentina", cognome: "Colombo", codice_fiscale: "CLBVLT93T04H501V", telefono: "3347778899", email: "valentina.colombo@example.com" },
      { id: 18, nome: "Stefano", cognome: "Martini", codice_fiscale: "MRTSFN76U17H501N", telefono: "3348889900", email: "stefano.martini@example.com" },
      { id: 19, nome: "Serena", cognome: "Vitale", codice_fiscale: "VTLsRN81V30H501G", telefono: "3349990011", email: "serena.vitale@example.com" },
      { id: 20, nome: "Nicola", cognome: "Fontana", codice_fiscale: "FNTNCL89W08H501E", telefono: "3350001122", email: "nicola.fontana@example.com" }
    ]
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
      { id: 1, nome: "Mario", cognome: "Rossi", codice_fiscale: "RSSMRA80A01H501U", telefono: "3331112233", email: "mario.rossi@example.com" },
      { id: 2, nome: "Luisa", cognome: "Bianchi", codice_fiscale: "BNCLSU85B41H501W", telefono: "3332223344", email: "luisa.bianchi@example.com" },
      { id: 3, nome: "Giulia", cognome: "Verdi", codice_fiscale: "VRDGLI90C20H501E", telefono: "3333334455", email: "giulia.verdi@example.com" },
      { id: 4, nome: "Alessandro", cognome: "Neri", codice_fiscale: "NREALX75D10H501H", telefono: "3334445566", email: "alessandro.neri@example.com" },
      { id: 5, nome: "Sofia", cognome: "Costa", codice_fiscale: "CSTSOF92E30H501A", telefono: "3335556677", email: "sofia.costa@example.com" },
      { id: 6, nome: "Luca", cognome: "Ferrari", codice_fiscale: "FRRLUC88F12H501Y", telefono: "3336667788", email: "luca.ferrari@example.com" },
      { id: 7, nome: "Martina", cognome: "Romano", codice_fiscale: "RMNMRT86G25H501L", telefono: "3337778899", email: "martina.romano@example.com" },
      { id: 8, nome: "Davide", cognome: "Conti", codice_fiscale: "CNTDVD84H15H501N", telefono: "3338889900", email: "davide.conti@example.com" },
      { id: 9, nome: "Chiara", cognome: "Greco", codice_fiscale: "GRCCHR91I10H501M", telefono: "3339990011", email: "chiara.greco@example.com" },
      { id: 10, nome: "Francesco", cognome: "Lombardi", codice_fiscale: "LMBFNC87L01H501X", telefono: "3340001122", email: "francesco.lombardi@example.com" },
      { id: 11, nome: "Elena", cognome: "Barbieri", codice_fiscale: "BRBLNE85M20H501C", telefono: "3341112233", email: "elena.barbieri@example.com" },
      { id: 12, nome: "Giorgio", cognome: "Mariani", codice_fiscale: "MRIGRG83N05H501R", telefono: "3342223344", email: "giorgio.mariani@example.com" },
      { id: 13, nome: "Simona", cognome: "De Luca", codice_fiscale: "DLCSMN79P18H501B", telefono: "3343334455", email: "simona.deluca@example.com" },
      { id: 14, nome: "Marco", cognome: "Galli", codice_fiscale: "GLLMRC80Q25H501U", telefono: "3344445566", email: "marco.galli@example.com" },
      { id: 15, nome: "Alessia", cognome: "Rizzo", codice_fiscale: "RZZLSS82R12H501T", telefono: "3345556677", email: "alessia.rizzo@example.com" },
      { id: 16, nome: "Paolo", cognome: "Esposito", codice_fiscale: "SPSPLA78S28H501F", telefono: "3346667788", email: "paolo.esposito@example.com" },
      { id: 17, nome: "Valentina", cognome: "Colombo", codice_fiscale: "CLBVLT93T04H501V", telefono: "3347778899", email: "valentina.colombo@example.com" },
      { id: 18, nome: "Stefano", cognome: "Martini", codice_fiscale: "MRTSFN76U17H501N", telefono: "3348889900", email: "stefano.martini@example.com" },
      { id: 19, nome: "Serena", cognome: "Vitale", codice_fiscale: "VTLsRN81V30H501G", telefono: "3349990011", email: "serena.vitale@example.com" },
      { id: 20, nome: "Nicola", cognome: "Fontana", codice_fiscale: "FNTNCL89W08H501E", telefono: "3350001122", email: "nicola.fontana@example.com" }
    ]
  }
];


const App = () => {



  return (
    <>
      <tripContext.Provider value={{ viaggi }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index element={<Homepage />} />
              <Route path="/viaggi/:id" element={<TripDetail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </tripContext.Provider>
    </>
  )
}

export default App

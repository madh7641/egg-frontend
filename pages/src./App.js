import Sidebar from "./components/Sidebar";

function App() {
  return (
  
  <div className="main">
    <Sidebar />
    <div className="container">
      <h1 className="title"> EEG DataBase</h1>
      <p className="info">
      Electroencephalography is a method to record an 
      electrogram of the electrical activity on the scalp
     that has been shown to represent the macroscopic activity 
     of the surface layer of the brain underneath. It is typically 
     non-invasive, with the electrodes placed along the scalp
      </p>
      <button className="btn">Explore NOW</button>
      </div>
      </div>
  )
}
export default App;

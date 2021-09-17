import "./App.css";
import CardComponent from "./CardComponent";

function App() {
  return (
    <div className="App">
      <CardComponent
        imgSource="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
        summary="   You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like."
      />
    </div>
  );
}

export default App;

import './App.css';
import Banner from './Component/Banner'
import Exhibit from './Component/Exhibit';

function App() {
  return (
    <div>
      <div className="App">
        <Banner/>
      </div>
      <div className="App">
        <Exhibit>
          content
        </Exhibit>
      </div>
    </div>
  );
}

export default App;

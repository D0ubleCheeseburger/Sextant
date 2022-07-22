import './App.css';
import Banner from './Component/Banner';
import Exhibit from './Component/Exhibit';
import IP from './Component/IP';

function App() {
  return (
    <div>
      <div className="App">
        <Banner/>
      </div>
      <div>
        <Exhibit>
          <IP type='ipv4'/>
          <IP type='ipv6'/>
        </Exhibit>
      </div>
    </div>
  );
}

export default App;

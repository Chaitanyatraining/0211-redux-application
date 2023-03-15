import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import RoutingComp from './components/Routing';

function App() {
  return (
    <div className="App">
      <Header />
      <RoutingComp />
    </div>
  );
}

export default App;

import TopView from './components/TopView'
import SalesView from './components/SalesView/index'

import './App.css'

function App() {
  return (
    <div className="dashboard">
      <TopView />
      <SalesView />
    </div>
  );
}

export default App;

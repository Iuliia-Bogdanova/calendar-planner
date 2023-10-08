import './styles/base.scss'

import Header from './components/Header/Header';
import Monitor from './components/Monitor/Monitor';
import CalendarGrid from './components/CalendarGrid/CalendarGrid';

function App() {

  return (
    <div className='App'>
        <div className="container">
          
          <Header />
          <Monitor />
          <CalendarGrid />
            
        </div>
    </div>
  );
}

export default App

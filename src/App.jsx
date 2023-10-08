import './styles/base.scss'

import Header from './components/Header/Header';
import CalendarGrid from './components/CalendarGrid/CalendarGrid';

function App() {

  return (
    <div className='App'>
        <div className="container">
          
          <Header />
          
          <CalendarGrid />
            
        </div>
    </div>
  );
}

export default App

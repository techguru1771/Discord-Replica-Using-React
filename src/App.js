import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Download from './Page/Download';
import Homepage from './Page/Homepage';

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/download' element={<Download/>}/>
    </Routes>
   </Router>
  
    
  );
}

export default App;

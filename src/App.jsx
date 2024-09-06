import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Tuner from './components/Tuner';
import Starter from './components/Starter';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import Toast styles

function App() {
  const initialStarters = {
    starter1: { isShown: true, text: 'I can see the', partnerType: 'single noun' },
    starter2: { isShown: true, text: 'I can see a', partnerType: 'single noun' },
    starter3: { isShown: true, text: 'I see my', partnerType: 'single noun' },
    starter4: { isShown: true, text: 'We like', partnerType: 'plural noun' },
    starter5: { isShown: true, text: 'We are', partnerType: 'adjective' },
    starter6: { isShown: true, text: 'We can', partnerType: 'verb' },
    starter7: { isShown: true, text: 'Go to the', partnerType: 'noun/place' },
    starter8: { isShown: true, text: 'Come to the', partnerType: 'noun/place' },
    starter9: { isShown: true, text: 'Look up at the', partnerType: 'single noun' },
    starter10: { isShown: true, text: 'Look at me in the', partnerType: 'body part' },
    starter11: { isShown: true, text: 'I like to go to', partnerType: 'plural noun/places' },
    starter12: { isShown: true, text: 'I like', partnerType: 'plural noun' },
    starter13: { isShown: true, text: 'This is the', partnerType: 'single noun' },
    starter14: { isShown: true, text: 'Here is my', partnerType: 'single noun' },
    starter15: { isShown: true, text: 'Can you', partnerType: 'verb' },
    starter16: { isShown: true, text: 'Can you see a', partnerType: 'single noun' },
    starter17: { isShown: true, text: 'Can you see the', partnerType: 'single noun' },
    starter18: { isShown: true, text: 'Can you see my', partnerType: 'single noun' },
    starter19: { isShown: true, text: 'I look at', partnerType: 'single noun' },
    starter20: { isShown: true, text: 'I was', partnerType: 'adjective' },
    starter21: { isShown: true, text: 'I play', partnerType: 'game/sport' },
    starter22: { isShown: true, text: 'I run to', partnerType: 'place' },
    starter23: { isShown: true, text: 'I go into the', partnerType: 'place' },
    starter24: { isShown: true, text: 'We have', partnerType: 'object' },
    starter25: { isShown: true, text: 'I have', partnerType: 'object' },
    starter26: { isShown: true, text: 'She is', partnerType: 'adjective' },
    starter27: { isShown: true, text: 'He is', partnerType: 'adjective' },
    starter28: { isShown: false, text: 'We go to', partnerType: 'place' },
  };

  const [startersSelected, setStartersSelected] = useState(initialStarters);

  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/tuner'
          element={
            <Tuner
              setStartersSelected={setStartersSelected}
              startersSelected={startersSelected}
            />
          }
        />
        {/* Ensure startersSelected is passed correctly */}
        <Route path='/starter' element={<Starter startersSelected={startersSelected} />} />
      </Routes>
      {/* Add ToastContainer to render toasts */}
      <ToastContainer />
    </div>
  );
}

export default App;

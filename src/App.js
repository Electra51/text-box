import './App.css';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';


function App() {
  return (
    <div className="App">
      <RouterProvider  router={router} />
      <Toaster />
    </div>
  );
}

export default App;

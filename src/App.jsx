import { Outlet } from 'react-router';
import './styles/components/App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


// Functional component representing the main App
function App() {
  // Render the main App component
  return (
    <>
      {/* Root container with 'App' class */}
      <div className='App'>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

// Export the App component
export default App;

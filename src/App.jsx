import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Work from './pages/Work';
import Contact from './pages/Contact';

// Placeholder Pages components until they are created
// This allows App to compile/run even if pages aren't fully populated yet.
// I will overwrite these file placeholders in subsequent steps with real content, 
// but for now I need to make sure the imports work.

function App() {
    return (
        <Router>
            <ScrollToTop behavior="smooth" />
            <div className="flex flex-col min-h-screen bg-background-light text-text-main font-sans antialiased dark:bg-background-dark dark:text-gray-100 transition-colors duration-300">
                <Header />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/work" element={<Work />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

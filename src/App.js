import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home, ProductDetails, Purchases } from './pages';
import LoadingScreen from './components/LoadingScreen';
import { useSelector } from 'react-redux';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
    const isLoading = useSelector(state => state.isLoading);

    return (
        <div className="App">
            <HashRouter>

                {isLoading && <LoadingScreen /> }
                <NavBar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/product/:id' element={<ProductDetails />} />
                    <Route path='/purchases' element={<Purchases />}/>
                </Routes>
                
                <Footer />
            </HashRouter>
        </div>
    );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import MainPage from './pages/MainPage';
import Dashboard from './pages/Dashboard';
import Search from './pages/SearchPage';
import MyGatherings from './pages/MyGatherings';
import MyPage from './pages/MyPage';
import MyCellar from './pages/MyCellar';
import Wishlist from './pages/Wishlist';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/main" element={<MainPage />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="search" element={<Search />} />
                    <Route path="mygatherings" element={<MyGatherings />} />
                    <Route path="mypage" element={<MyPage />} />
                    <Route path="mycellar" element={<MyCellar />} />
                    <Route path="wishlist" element={<Wishlist />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import MainPage from './pages/MainPage';
import Dashboard from './pages/Dashboard';
import Search from './pages/SearchPage';
import MyGatherings from './pages/MyGatherings';
import MyPage from './pages/MyPage';
import MyCellar from './pages/MyCellar';
import Wishlist from './pages/Wishlist';
import CreatePage1 from './features/createGathering/CreatePage1';
import CreatePage2 from './features/createGathering/CreatePage2';
import CreatePage3 from './features/createGathering/CreatePage3';
import CreatePage4 from './features/createGathering/CreatePage4';
import CreatePage5 from './features/createGathering/CreatePage5';
import CreatePage6 from './features/createGathering/CreatePage6';
import CreatePage7 from './features/createGathering/CreatePage7';
import CreatePageIntro from './features/createGathering/CreatePageIntro';

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
                <Route path="/create">
                    <Route path="intro" element={<CreatePageIntro />}></Route>
                    <Route path="1" element={<CreatePage1 />}></Route>
                    <Route path="2" element={<CreatePage2 />}></Route>
                    <Route path="3" element={<CreatePage3 />}></Route>
                    <Route path="4" element={<CreatePage4 />}></Route>
                    <Route path="5" element={<CreatePage5 />}></Route>
                    <Route path="6" element={<CreatePage6 />}></Route>
                    <Route path="7" element={<CreatePage7 />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

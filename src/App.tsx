import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { MainPage } from './App/layouts/Mainpage';
import { Navigation } from './App/components/Navigation';

const App: React.FC = () => {
    return (
        <>
            <Router>
                <Navigation />
                <Routes>
                    <Route path='/' element={<MainPage />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;

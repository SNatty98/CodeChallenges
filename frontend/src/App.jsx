import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ClerkProviderWithRoutes from "./auth/ClerkProviderWithRoutes.jsx";
import {Routes, Route} from "react-router-dom";
import {AuthenticationPage} from "./auth/AuthenticationPage.jsx";
import {GenerateChallenge} from "./challenge/GenerateChallenge.jsx";
import {HistoryInfo} from "./history/HistoryInfo.jsx";
import {Layout} from "./layout/Layout.jsx";
import './App.css'


function App() {

    return <ClerkProviderWithRoutes>
        <Routes>
            <Route path="/sign-in/*" element={<AuthenticationPage />} />
            <Route path="/sign-up" element={<AuthenticationPage />} />
            <Route element={<Layout/>}>
                <Route path="/" element={<GenerateChallenge/>}/>
                <Route path="/history" element={<HistoryInfo/>}/>
            </Route>
        </Routes>
    </ClerkProviderWithRoutes>
}

export default App

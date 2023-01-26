import React from 'react';
import { ReactDOM } from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import {ChainId,ThirdwebProvider} from '@thirdweb-dev/react';
import App from './App';
import './index.css'
import { StateContextProvider } from './context';


const activeChainId = ChainId.Goerli;
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
       
<React.StrictMode>
    <ThirdwebProvider desiredChainId={activeChainId}>        
        <Router>
            <StateContextProvider>
                <App/>
            </StateContextProvider>
        </Router>
    </ThirdwebProvider>
</React.StrictMode> 
)
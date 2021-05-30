import './styles/index.css'
import '@fontsource/dm-sans/index.css'
import 'react-tabs/style/react-tabs.css'
import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './pages/App'
import store from './state'
import ApplicationUpdater from './state/application/updater'
import ThemeProvider, { ThemedGlobalStyle } from './theme'
import getLibrary from './utils/getLibrary'
import { NetworkContextName } from './connectors'

require('dotenv').config()

const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName)

if (!!window.ethereum) {
    window.ethereum.autoRefreshOnNetworkChange = false
}

function Updaters() {
    return (
        <>
            <ApplicationUpdater />
        </>
    )
}

ReactDOM.render(
    <StrictMode>
        <Web3ReactProvider getLibrary={getLibrary}>
            <Web3ProviderNetwork getLibrary={getLibrary}>
                    <Provider store={store}>
                        <Updaters />
                            <ThemeProvider>
                                <ThemedGlobalStyle />
                                    <Router>
                                        <App />
                                    </Router>
                            </ThemeProvider>
                    </Provider>
            </Web3ProviderNetwork>
        </Web3ReactProvider>
    </StrictMode>,
    document.getElementById('root')
)

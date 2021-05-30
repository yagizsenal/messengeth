import Mainnet from '../assets/networks/mainnet-network.jpg'
import Fantom from '../assets/networks/fantom-network.jpg'
import Bsc from '../assets/networks/bsc-network.jpg'
import Polygon from '../assets/networks/polygon-network.jpg'
import xDai from '../assets/networks/xdai-network.jpg'
import Arbitrum from '../assets/networks/arbitrum-network.jpg'
import Moonbeam from '../assets/networks/moonbeam-network.jpg'
import Avalanche from '../assets/networks/avalanche-network.jpg'
import Heco from '../assets/networks/heco-network.jpg'
import Harmony from '../assets/networks/harmonyone-network.jpg'
import OKEx from '../assets/networks/okex-network.jpg'

export enum ChainId {
    MAINNET = 1,
    MATIC = 137,
    FANTOM = 250,
    XDAI = 100,
    BSC = 56,
    ARBITRUM = 79377087078960,
    MOONBASE = 1287,
    AVALANCHE = 43114,
    FUJI = 43113,
    HECO = 128,
    HARMONY = 1666600000,
    OKEX = 66,
}

export const NETWORK_ICON = {
    [ChainId.MAINNET]: Mainnet,
    [ChainId.FANTOM]: Fantom,
    [ChainId.BSC]: Bsc,
    [ChainId.MATIC]: Polygon,
    [ChainId.XDAI]: xDai,
    [ChainId.ARBITRUM]: Arbitrum,
    [ChainId.MOONBASE]: Moonbeam,
    [ChainId.AVALANCHE]: Avalanche,
    [ChainId.FUJI]: Avalanche,
    [ChainId.HECO]: Heco,
    [ChainId.HARMONY]: Harmony,
    [ChainId.OKEX]: OKEx,
}

export const NETWORK_LABEL: { [chainId in ChainId]?: string } = {
    [ChainId.MAINNET]: 'Ethereum',
    [ChainId.FANTOM]: 'Fantom',
    [ChainId.MATIC]: 'Polygon (Matic)',
    [ChainId.XDAI]: 'xDai',
    [ChainId.BSC]: 'BSC',
    [ChainId.MOONBASE]: 'Moonbase',
    [ChainId.AVALANCHE]: 'Avalanche',
    [ChainId.FUJI]: 'Fuji',
    [ChainId.HECO]: 'HECO',
    [ChainId.HARMONY]: 'Harmony',
    [ChainId.OKEX]: 'OKExChain',
}
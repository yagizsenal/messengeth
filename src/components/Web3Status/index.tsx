import { AbstractConnector } from '@web3-react/abstract-connector'
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core'
import { darken } from 'polished'
import { Activity } from 'react-feather'
import styled, { css } from 'styled-components'
import CoinbaseWalletIcon from '../../assets/images/coinbaseWalletIcon.svg'
import LatticeIcon from '../../assets/images/gridPlusWallet.png'
import PortisIcon from '../../assets/images/portisIcon.png'
import WalletConnectIcon from '../../assets/images/walletConnectIcon.svg'
import { injected, lattice, NetworkContextName, portis, walletconnect, walletlink } from '../../connectors'
import { useWalletModalToggle } from '../../state/application/hooks'
import { shortenAddress } from '../../utils'
import { ButtonSecondary } from '../Button'
import Identicon from '../Identicon'
import WalletModal from '../WalletModal'

const IconWrapper = styled.div<{ size?: number }>`
    ${({ theme }) => theme.flexColumnNoWrap};
    align-items: center;
    justify-content: center;
    & > * {
        height: ${({ size }) => (size ? size + 'px' : '32px')};
        width: ${({ size }) => (size ? size + 'px' : '32px')};
    }
`

const Web3StatusGeneric = styled(ButtonSecondary)`
    ${({ theme }) => theme.flexRowNoWrap}
    width: 100%;
    align-items: center;
    padding: 0.5rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    cursor: pointer;
    user-select: none;
    :focus {
        outline: none;
    }
`
const Web3StatusError = styled(Web3StatusGeneric)`
    background-color: ${({ theme }) => theme.red1};
    border: 1px solid ${({ theme }) => theme.red1};
    color: ${({ theme }) => theme.white};
    font-weight: 500;
    :hover,
    :focus {
        background-color: ${({ theme }) => darken(0.1, theme.red1)};
    }
`

const Web3StatusConnect = styled(Web3StatusGeneric) <{ faded?: boolean }>`
    background-color: ${({ theme }) => theme.primary4};
    border: none;
    color: ${({ theme }) => theme.primaryText1};
    font-weight: 500;

    :hover,
    :focus {
        border: 1px solid ${({ theme }) => darken(0.05, theme.primary4)};
        color: ${({ theme }) => theme.primaryText1};
    }

    ${({ faded }) =>
        faded &&
        css`
            background-color: ${({ theme }) => theme.primary5};
            border: 1px solid ${({ theme }) => theme.primary5};
            color: ${({ theme }) => theme.primaryText1};

            :hover,
            :focus {
                border: 1px solid ${({ theme }) => darken(0.05, theme.primary4)};
                color: ${({ theme }) => darken(0.05, theme.primaryText1)};
            }
        `}
`

const Text = styled.p`
    flex: 1 1 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0 0.5rem 0 0.25rem;
    font-size: 1rem;
    width: fit-content;
    font-weight: 500;
`

const NetworkIcon = styled(Activity)`
    margin-left: 0.25rem;
    margin-right: 0.5rem;
    width: 16px;
    height: 16px;
`

// eslint-disable-next-line react/prop-types
function StatusIcon({ connector }: { connector: AbstractConnector }) {
    if (connector === injected) {
        return <Identicon />
    } else if (connector === walletconnect) {
        return (
            <IconWrapper size={16}>
                <img src={WalletConnectIcon} alt={'Wallet Connect'} />
            </IconWrapper>
        )
    } else if (connector === lattice) {
        return (
            <IconWrapper size={16}>
                <img src={LatticeIcon} alt={'Lattice'} />
            </IconWrapper>
        )
    } else if (connector === walletlink) {
        return (
            <IconWrapper size={16}>
                <img src={CoinbaseWalletIcon} alt={'Coinbase Wallet'} />
            </IconWrapper>
        )
    } else if (connector === portis) {
        return (
            <IconWrapper size={16}>
                <img src={PortisIcon} alt={'Portis'} />
            </IconWrapper>
        )
    }
    return null
}

function Web3StatusInner() {
    const { account, connector, error } = useWeb3React()

    const toggleWalletModal = useWalletModalToggle()

    if (account) {
        return (
            <div
                id="web3-status-connected"
                className="flex items-center rounded-lg bg-dark-1000 text-sm text-secondary py-2 px-3"
                onClick={toggleWalletModal}
            >
                <div className="mr-2">{shortenAddress(account)}</div>
                {connector && <StatusIcon connector={connector} />}
            </div>
        )
    } else if (error) {
        return (
            <Web3StatusError onClick={toggleWalletModal}>
                <NetworkIcon />
                <Text>
                    {error instanceof UnsupportedChainIdError
                        ? "You are on the wrong network"
                        : "Error"
                    }
                </Text>
            </Web3StatusError>
        )
    } else {
        return (
            <Web3StatusConnect id="connect-wallet" onClick={toggleWalletModal} faded={!account}>
                <Text>{`Connect to a wallet`}</Text>
            </Web3StatusConnect>
        )
    }
}

export default function Web3Status(): JSX.Element | null {
    const { active } = useWeb3React()
    const contextNetwork = useWeb3React(NetworkContextName)

    if (!contextNetwork.active && !active) {
        return null
    }

    return (
        <div className="w-auto flex items-center rounded bg-dark-900 hover:bg-dark-800 p-0.5 whitespace-nowrap text-sm font-bold cursor-pointer select-none pointer-events-auto">
            <Web3StatusInner />
            <WalletModal />
        </div>
    )
}

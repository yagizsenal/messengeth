import {ExternalLink as LinkIcon} from 'react-feather'
import styled from 'styled-components'
import CoinbaseWalletIcon from '../../assets/images/coinbaseWalletIcon.svg'
import PortisIcon from '../../assets/images/portisIcon.png'
import TorusIcon from '../../assets/images/torusIcon.png'
import WalletConnectIcon from '../../assets/images/walletConnectIcon.svg'
import {ReactComponent as Close} from '../../assets/images/x.svg'
import {injected, portis, SUPPORTED_WALLETS, torus, walletconnect, walletlink} from '../../connectors'
import {useActiveWeb3React} from '../../hooks/useActiveWeb3React'
import {ExternalLink} from '../../theme'
import {getExplorerLink, shortenAddress} from '../../utils'
import {ButtonSecondary} from '../Button'
import Identicon from '../Identicon'
import Copy from './Copy'

const HeaderRow = styled.div`
    ${({theme}) => theme.flexRowNoWrap};
    padding: 1rem 1rem;
    font-weight: 500;
    color: ${props => (props.color === 'blue' ? ({theme}) => theme.primary1 : 'inherit')};
    ${({theme}) => theme.mediaWidth.upToMedium`
    padding: 1rem;
  `};
`

const UpperSection = styled.div`
    position: relative;

    h5 {
        margin: 0;
        margin-bottom: 0.5rem;
        font-size: 1rem;
        font-weight: 400;
    }

    h5:last-child {
        margin-bottom: 0;
    }

    h4 {
        margin-top: 0;
        font-weight: 500;
    }
`

const InfoCard = styled.div`
    // padding: 1rem;
    // border: 1px solid ${({theme}) => theme.bg3};
    // border-radius: 10px;
    position: relative;
    display: grid;
    grid-row-gap: 12px;
    margin-bottom: 20px;
`

const AccountGroupingRow = styled.div`
    ${({theme}) => theme.flexRowNoWrap};
    justify-content: space-between;
    align-items: center;
    font-weight: 400;
    color: ${({theme}) => theme.text1};

    div {
        ${({theme}) => theme.flexRowNoWrap}
        align-items: center;
    }
`

const AccountSection = styled.div`
    // background-color: ${({theme}) => theme.bg1};
    padding: 0 1rem;
    ${({theme}) => theme.mediaWidth.upToMedium`padding: 0rem 1rem 1.5rem 1rem;`};
`

const YourAccount = styled.div`
    h5 {
        margin: 0 0 1rem 0;
        font-weight: 400;
    }

    h4 {
        margin: 0;
        font-weight: 500;
    }
`

const AccountControl = styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 0;
    width: 100%;

    font-weight: 500;
    font-size: 1.25rem;

    a:hover {
        text-decoration: underline;
    }

    p {
        min-width: 0;
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`

const AddressLink = styled(ExternalLink)`
    font-size: 0.825rem;
    color: ${({theme}) => theme.text3};
    margin-left: 1rem;
    display: flex;
    :hover {
        color: ${({theme}) => theme.text2};
    }
`

const CloseIcon = styled.div`
    position: absolute;
    right: 1rem;
    top: 14px;
    &:hover {
        cursor: pointer;
        opacity: 0.6;
    }
`

const CloseColor = styled(Close)`
    path {
        stroke: ${({theme}) => theme.text4};
    }
`

const WalletName = styled.div`
    width: initial;
    font-size: 0.825rem;
    font-weight: 500;
    color: ${({theme}) => theme.text3};
`

const IconWrapper = styled.div<{ size?: number }>`
    ${({theme}) => theme.flexColumnNoWrap};
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    & > img,
    span {
        height: ${({size}) => (size ? size + 'px' : '32px')};
        width: ${({size}) => (size ? size + 'px' : '32px')};
    }
    ${({theme}) => theme.mediaWidth.upToMedium`
    align-items: flex-end;
  `};
`

const WalletAction = styled(ButtonSecondary)`
    width: fit-content;
    font-weight: 400;
    margin-left: 8px;
    font-size: 0.825rem;
    padding: 4px 6px;
    :hover {
        cursor: pointer;
        text-decoration: underline;
    }
`

const MainWalletAction = styled(WalletAction)`
    color: ${({theme}) => theme.primary1};
`

interface AccountDetailsProps {
    toggleWalletModal: () => void
    openOptions: () => void
}

export default function AccountDetails({
                                           toggleWalletModal,
                                           openOptions
                                       }: AccountDetailsProps): JSX.Element {
    const {chainId, account, connector} = useActiveWeb3React()

    function formatConnectorName() {
        const {ethereum} = window
        const isMetaMask = !!(ethereum && ethereum.isMetaMask)
        const name = Object.keys(SUPPORTED_WALLETS)
            .filter(
                k =>
                    SUPPORTED_WALLETS[k].connector === connector &&
                    (connector !== injected || isMetaMask === (k === 'METAMASK'))
            )
            .map(k => SUPPORTED_WALLETS[k].name)[0]
        return <WalletName>Connected with {name}</WalletName>
    }

    function getStatusIcon() {
        if (connector === injected) {
            return (
                <IconWrapper size={16}>
                    {account && <Identicon address={account}/>}
                </IconWrapper>
            )
        } else if (connector === walletconnect) {
            return (
                <IconWrapper size={16}>
                    <img src={WalletConnectIcon} alt={'wallet connect logo'}/>
                </IconWrapper>
            )
        } else if (connector === walletlink) {
            return (
                <IconWrapper size={16}>
                    <img src={CoinbaseWalletIcon} alt={'coinbase wallet logo'}/>
                </IconWrapper>
            )
        } else if (connector === portis) {
            return (
                <>
                    <IconWrapper size={16}>
                        <img src={PortisIcon} alt={'portis logo'}/>
                        <MainWalletAction
                            onClick={() => {
                                portis.portis.showPortis()
                            }}
                        >
                            Show Portis
                        </MainWalletAction>
                    </IconWrapper>
                </>
            )
        } else if (connector === torus) {
            return (
                <IconWrapper size={16}>
                    <img src={TorusIcon} alt={'torus logo'}/>
                </IconWrapper>
            )
        }
        return null
    }

    return (
        <>
            <UpperSection>
                <CloseIcon onClick={toggleWalletModal}>
                    <CloseColor/>
                </CloseIcon>
                <HeaderRow>Account</HeaderRow>
                <AccountSection>
                    <YourAccount>
                        <InfoCard>
                            <AccountGroupingRow>
                                {formatConnectorName()}
                                <div>
                                    {connector !== injected && connector !== walletlink && (
                                        <WalletAction
                                            style={{fontSize: '.825rem', fontWeight: 400, marginRight: '8px'}}
                                            onClick={() => {
                                                ;(connector as any).close()
                                            }}
                                        >
                                            Disconnect
                                        </WalletAction>
                                    )}
                                    <WalletAction
                                        style={{fontSize: '.825rem', fontWeight: 400}}
                                        onClick={() => {
                                            openOptions()
                                        }}
                                    >
                                        Change
                                    </WalletAction>
                                </div>
                            </AccountGroupingRow>
                            <AccountGroupingRow id="web3-account-identifier-row">
                                <AccountControl>
                                    <>
                                        <div>
                                            {getStatusIcon()}
                                            <p> {account && shortenAddress(account)}</p>
                                        </div>
                                    </>
                                </AccountControl>
                            </AccountGroupingRow>
                            <AccountGroupingRow>
                                <>
                                    <AccountControl>
                                        <div>
                                            {account && (
                                                <Copy toCopy={account}>
                                                    <span style={{marginLeft: '4px'}}>Copy Address</span>
                                                </Copy>
                                            )}
                                            {chainId && account && (
                                                <AddressLink
                                                    href={getExplorerLink(chainId, account, 'address')}
                                                >
                                                    <LinkIcon size={16}/>
                                                    <span style={{marginLeft: '4px'}}>View on explorer</span>
                                                </AddressLink>
                                            )}
                                        </div>
                                    </AccountControl>
                                </>
                            </AccountGroupingRow>
                        </InfoCard>
                    </YourAccount>
                </AccountSection>
            </UpperSection>
        </>
    )
}

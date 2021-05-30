import { Spinner, type } from '../theme'
import { useActiveWeb3React } from '../hooks/useActiveWeb3React'
import { useBlockNumber } from '../state/application/hooks'
import { useEffect, useState } from 'react'
import { Disclosure } from '@headlessui/react'
import styled from 'styled-components'
import { getExplorerLink } from '../utils'
import { ExternalLink } from '../theme'

const StyledPolling = styled.div`
    position: fixed;
    display: flex;
    right: 0;
    bottom: 0;
    padding: 1rem;
    transition: opacity 0.25s ease;
    color: ${({ theme }) => theme.green1};
    :hover {
        opacity: 1;
    }
`

const StyledPollingDot = styled.div`
    width: 8px;
    height: 8px;
    min-height: 8px;
    min-width: 8px;
    margin-left: 0.5rem;
    margin-top: 3px;
    border-radius: 50%;
    position: relative;
    background-color: ${({ theme }) => theme.green1};
`

function Footer(): JSX.Element {
    const { chainId } = useActiveWeb3React()

    const blockNumber = useBlockNumber()

    const [isMounted, setIsMounted] = useState(true)

    const [navClassList] = useState(
        'w-screen bg-transparent nt z-10 backdrop-filter backdrop-blur'
    )

    useEffect(
        () => {
            const timer1 = setTimeout(() => setIsMounted(true), 1000)

            // this will clear Timeout when component unmount like in willComponentUnmount
            return () => {
                setIsMounted(false)
                clearTimeout(timer1)
            }
        },
        [blockNumber] //useEffect will run only one time
        //if you pass a value to array, like this [data] than clearTimeout will run every time this value changes (useEffect re-run)
    )

    return (
        <footer className="flex flex-row flex-nowrap justify-between w-screen">
            <Disclosure as="nav" className={navClassList}>
                {() => (
                    <>
                        <div className="px-4 py-1.5">
                            <div className="flex items-center justify-between h-16">
                                <div className="flex items-center justify-between space-x-2">
                                    <ExternalLink href={chainId && blockNumber ? getExplorerLink(chainId, blockNumber.toString(), 'block') : ''}>
                                        <StyledPolling>
                                            <type.small style={{ opacity: isMounted ? '0.2' : '0.6' }}>{blockNumber}</type.small>
                                            <StyledPollingDot>{!isMounted && <Spinner />}</StyledPollingDot>
                                        </StyledPolling>
                                    </ExternalLink>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </Disclosure>
        </footer>
    )
}

export default Footer
import { useActiveWeb3React } from '../hooks/useActiveWeb3React'
import Web3Network from './Web3Network'
import Web3Status from './Web3Status'
import { Disclosure } from '@headlessui/react'
import { useState } from 'react'

function AppBar(): JSX.Element {
    const { library, account } = useActiveWeb3React()

    const [navClassList] = useState(
        'w-screen bg-transparent nt z-10 backdrop-filter backdrop-blur'
    )

    return (
        <header className="flex flex-row flex-nowrap justify-between w-screen">
            <Disclosure as="nav" className={navClassList}>
                {() => (
                    <>
                        <div className="px-4 py-1.5">
                            <div className="flex items-center justify-between h-16">
                                <div className="flex items-center justify-between space-x-2">
                                    {library && account && (
                                        <>
                                            {library.provider.isMetaMask && (
                                                <Web3Network />
                                            )}
                                        </>
                                    )}
                                    <Web3Status />
                                </div>
                            </div>
                        </div>
                    </>
                )}
                </Disclosure>
        </header>
    )
}

export default AppBar
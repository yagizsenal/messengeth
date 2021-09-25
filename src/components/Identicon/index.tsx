import {useEffect, useRef} from 'react'
import styled from 'styled-components'
import {useActiveWeb3React} from '../../hooks/useActiveWeb3React'

const jazzicon = require('@metamask/jazzicon')

const StyledIdenticonContainer = styled.div`
    height: 1rem;
    width: 1rem;
    border-radius: 1.125rem;
    background-color: ${({theme}) => theme.bg4};
`

export default function Identicon(): JSX.Element {
    const ref = useRef<HTMLDivElement>()

    const {account} = useActiveWeb3React()

    useEffect(() => {
        if (account && ref.current) {
            ref.current.innerHTML = ''
            ref.current.appendChild(jazzicon(16, parseInt(account.slice(2, 10), 16)))
        }
    }, [account])

    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451
    return <StyledIdenticonContainer ref={ref as any}/>
}

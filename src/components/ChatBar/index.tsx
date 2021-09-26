import Identicon from "../Identicon";

interface ChatBarProps {
    account: string
}

export function ChatBar({account}: ChatBarProps): JSX.Element {
    return (
        <div className='flex flex-row w-full bg-theme-tertiary place-self-center p-4 space-x-4'>
            <div className='w-6 h-6'>
                <Identicon address={account}/>
            </div>
            <div className='place-self-center'>
                {account}
            </div>
        </div>
    )
}
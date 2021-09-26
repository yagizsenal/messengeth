import useActiveWeb3React from "../../hooks/useActiveWeb3React";

export interface MessageProps {
    sender: string,
    timestamp: number
    content: string
}

export function Message({sender, timestamp, content}: MessageProps): JSX.Element {

    const {account} = useActiveWeb3React()
    const defaultClasses = 'flex'

    return (
        <div className={account === sender ? defaultClasses + ' justify-end' : defaultClasses + ' justify-start'}>
            <div className='flex flex-row rounded-full p-2 bg-theme-secondary text-black'>
                {sender} {timestamp} {content}
            </div>
        </div>
    )

}
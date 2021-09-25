import Identicon from "../Identicon";

export interface ChatProps {
    account: string,
    lastMessage: string,
    lastMessageTimestamp: number
}

export function Chat(
    {
        account,
        lastMessage,
        lastMessageTimestamp
    }: ChatProps): JSX.Element {
    return (<div className="flex p-2 flex-row px-4 py-3 w-full">
        <div className='w-8 h-8 place-self-center'>
            <Identicon address={account}/>
        </div>
        <div className="flex flex-col pl-4 flex-grow">
            <div className="flex flex-row space-x-2 w-full justify-between">
                <div className="text-lg font-bold">
                    {account}
                </div>
                <div className="text-base self-end">
                    {new Date(lastMessageTimestamp * 1000).toLocaleDateString()}
                </div>
            </div>
            <div className="w-full text-lg">
                {lastMessage}
            </div>
        </div>
    </div>)
}

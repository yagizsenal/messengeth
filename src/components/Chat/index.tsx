export interface ChatProps {
    username: string,
    lastMessage: string,
    lastMessageTimestamp: number
}

export function Chat(
    {
        username,
        lastMessage,
        lastMessageTimestamp
    }: ChatProps): JSX.Element {
    return (<div className="flex p-2 flex-row space-x-2 w-full">
        <div className="flex flex-col w-full">
            <div className="flex flex-row space-x-2 w-full justify-between">
                <div className="text-lg font-bold">
                    {username}
                </div>
                <div className="text-base self-end">
                    {lastMessageTimestamp}
                </div>
            </div>
            <div className="flex flex-grow flex-row w-full justify-between text-lg">
                {lastMessage}
            </div>
        </div>
    </div>)
}

export interface ChatProps {
    username: string,
    lastMessage: string,
    lastMessageTimestamp: string
}

export function Chat(
    {
        username,
        lastMessage,
        lastMessageTimestamp
    }: ChatProps): JSX.Element {
    return (<div>
        {username} {lastMessage} {lastMessageTimestamp}
    </div>)
}

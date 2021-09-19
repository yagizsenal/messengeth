import { Chat, ChatProps } from '../Chat'

interface ChatListProps {
    chats: Array<ChatProps>
}

export default function ChatList(
    {
        chats

    }: ChatListProps
): JSX.Element {
    return (
        <div className="flex flex-col">
            {
                chats.map((props: ChatProps) => {
                    return (
                        <Chat key={props.username} username={props.username}
                              lastMessage={props.lastMessage}
                              lastMessageTimestamp={props.lastMessageTimestamp} />
                    )
                })
            }
        </div>
    )
}


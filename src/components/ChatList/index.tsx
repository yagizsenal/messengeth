import {Chat, ChatProps} from '../Chat'

interface ChatListProps {
    chats: Array<ChatProps>
}

export default function ChatList(
    {
        chats

    }: ChatListProps
): JSX.Element {
    return (
        <div className="flex flex-col divide-y-2 divide-gray-500 w-full h-full border-2 border-gray-900">
            {
                chats.map((props: ChatProps) => {
                    return (
                        <Chat key={props.username} username={props.username}
                              lastMessage={props.lastMessage}
                              lastMessageTimestamp={props.lastMessageTimestamp}/>
                    )
                })
            }
        </div>
    )
}


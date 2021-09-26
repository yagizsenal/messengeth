import {Chat, ChatProps} from '../ChatItem'

interface ChatListProps {
    chats: Array<ChatProps>
}

export default function ChatList(
    {
        chats

    }: ChatListProps
): JSX.Element {
    return (
        <div className="flex flex-col flex-grow divide-y-2 divide-gray-500 border-2 border-gray-900 overflow-y-auto">
            {
                chats.map((props: ChatProps) => {
                    return (
                        <Chat key={props.account} account={props.account}
                              lastMessage={props.lastMessage}
                              lastMessageTimestamp={props.lastMessageTimestamp}/>
                    )
                })
            }
        </div>
    )
}


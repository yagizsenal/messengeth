import {Message, MessageProps} from "../Message";

interface MessageListProps {
    messages: Array<MessageProps>
}

export function MessageList({messages}: MessageListProps): JSX.Element {
    return (
        <div className='flex flex-col justify-end px-4 overflow-y-auto'>
            {
                messages.map((message: MessageProps) => {
                    return (
                        <Message key={message.timestamp} sender={message.sender} timestamp={message.timestamp}
                                 content={message.content}/>)
                })
            }
        </div>
    )

}
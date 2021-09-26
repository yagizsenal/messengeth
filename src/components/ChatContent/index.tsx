import {ChatBar} from "../ChatBar";
import {MessageList} from "../MessageList";
import {MessageBar} from "../MessageBar";

interface ChatContentProps {
    account: string
}

export function ChatContent({account}: ChatContentProps): JSX.Element {
    return (
        <div className='flex flex-col justify-start'>
            <div className='flex-grow-0'>
                <ChatBar account={account}/>
            </div>
            <div className='flex-grow overflow-y-auto'>
                <MessageList messages={
                    [{sender: 'hello2', content: 'hey how are you2', timestamp: 1632578949},
                        {sender: 'hello2', content: 'hey how are you', timestamp: 1632578943},
                        {sender: 'hello2', content: 'hey how are you', timestamp: 1632578942},
                        {sender: 'hello2', content: 'hey how are you', timestamp: 1632578942},
                        {sender: 'hello2', content: 'hey how are you', timestamp: 1632578942},
                        {sender: 'hello2', content: 'hey how are you', timestamp: 1632578942},
                        {sender: 'hello2', content: 'hey how are you', timestamp: 1632578941},
                        {sender: 'hello2', content: 'hey how are you', timestamp: 1632578940},
                        {sender: 'hello2', content: 'hey how are you', timestamp: 1632578939},
                        {
                            sender: '0xF435E979b893A30f52F41E416E983d5a3bA3e20A',
                            content: 'hey how are you',
                            timestamp: 1632578951
                        },
                        {sender: 'hello2', content: 'hey how are you', timestamp: 1632578952}]
                }/>
            </div>
            <div className='flex-grow-0'>
                <MessageBar/>
            </div>
        </div>
    )
}
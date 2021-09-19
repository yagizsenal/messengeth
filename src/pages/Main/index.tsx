import ChatList from '../../components/ChatList'

export default function Main(): JSX.Element {

    return (
        <div className='flex w-1/4'>
            <ChatList chats={[
                {
                    username: 'hello1',
                    lastMessage: 'lastMessage1',
                    lastMessageTimestamp: '1632081803'
                },
                {
                    username: 'hello2',
                    lastMessage: 'lastMessage2',
                    lastMessageTimestamp: '1632081813'
                },
                {
                    username: 'hello3',
                    lastMessage: 'lastMessage3',
                    lastMessageTimestamp: '1632081823'
                }
            ]
            } />
        </div>
    )
}

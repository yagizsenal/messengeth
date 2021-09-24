import ChatList from '../../components/ChatList'

export default function Main(): JSX.Element {

    return (
        <div className='grid grid-cols-3 w-full h-full'>
            <div className='flex flex-grow'>
                <ChatList chats={[
                    {
                        username: 'hello1',
                        lastMessage: 'lastMessage1',
                        lastMessageTimestamp: 1632081803
                    },
                    {
                        username: 'hello2',
                        lastMessage: 'lastMessage2',
                        lastMessageTimestamp: 1632081813
                    },
                    {
                        username: 'hello3',
                        lastMessage: 'lastMessage3',
                        lastMessageTimestamp: 1632081823
                    }
                ]
                }/>
            </div>
            <div className="col-span-2">
                Chat Content Will Come Here
            </div>
        </div>
    )
}

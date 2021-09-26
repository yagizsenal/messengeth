import ChatList from '../../components/ChatList'
import {Profile} from "../../components/Profile";
import {ChatContent} from "../../components/ChatContent";

export default function Main(): JSX.Element {

    return (
        <div className='grid grid-cols-5 w-full h-full mx-8 my-5 bg-theme-surface-1'>
            <div className='flex flex-col w-full'>
                <Profile key="profile"/>
                <ChatList chats={[
                    {
                        account: 'hello1',
                        lastMessage: 'lastMessage1',
                        lastMessageTimestamp: 1632081803
                    },
                    {
                        account: 'hello2',
                        lastMessage: 'lastMessage2',
                        lastMessageTimestamp: 1632081813
                    },
                    {
                        account: 'hello3',
                        lastMessage: 'lastMessage3',
                        lastMessageTimestamp: 1632081823
                    }
                ]
                }/>
            </div>
            <div className="col-span-4">
                <ChatContent account={'hello2'}/>
            </div>
        </div>
    )
}

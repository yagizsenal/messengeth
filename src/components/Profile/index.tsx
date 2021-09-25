import Identicon from "../Identicon";
import useActiveWeb3React from "../../hooks/useActiveWeb3React";
import {shortenAddress} from "../../utils";
import MessageIcon from "../../assets/images/message.svg";

export function Profile(): JSX.Element {

    const {account} = useActiveWeb3React()

    return (
        <div className="flex w-full flex-row bg-theme-secondary py-5 px-6 justify-between">
            <div className='flex flex-row'>
                <div className='w-12 h-12'>
                    {account && <Identicon key="identicon" address={account}/>}
                </div>
                <div className="text-black font-semibold place-self-center pl-2">
                    {account && shortenAddress(account)}
                </div>
            </div>
            <img className="w-5 h-5 place-self-center" src={MessageIcon} alt="message"/>

        </div>
    )
}
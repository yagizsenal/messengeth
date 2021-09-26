import SendIcon from '../../assets/images/send.svg'
import {useState} from "react";

export function MessageBar(): JSX.Element {


    const [textValue, onTextChanged] = useState<string>()

    return (
        <div className='flex flex-row w-full bg-theme-tertiary p-2'>
            <textarea className='h-12 flex flex-grow bg-theme-secondary rounded-full resize-none text-black px-4'
                      value={textValue}
                      onChange={(event) => onTextChanged(event.target.value)}/>
            <img className='w-12 h-12' src={SendIcon} alt='send button'/>
        </div>
    )
}
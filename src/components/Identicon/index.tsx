import {createAvatar} from "@dicebear/avatars";
import * as style from '@dicebear/personas';

interface IdenticonProps {
    address: string
}

export default function Identicon({address}: IdenticonProps): JSX.Element {
    const avatar = createAvatar(style, {
        seed: address, translateY: -10, backgroundColor: "#ffffff", radius: 50, scale: 75
    })
    return (
        <img src={"data:image/svg+xml;utf8," + encodeURIComponent(avatar)} alt="avatar"/>
    )
}


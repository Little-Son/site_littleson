import useScript from '../lib/useScripts'
import { ButtonLarge } from './Button'
import { FiFacebook, FiTwitter, FiPocket } from 'react-icons/fi'

export default function ShareButtons(props) {
    useScript('/assets/scripts/sharer.min.js')
    return(
        <section className="grid grid-cols-3 gap-2">
            <ButtonLarge provider="facebook" title={`"${props.title}"`} url={props.url}>
                <FiFacebook />
            </ButtonLarge>

            <ButtonLarge provider="twitter" title={`"${props.title}"`} url={props.url}>
                <FiTwitter />
            </ButtonLarge>

            <ButtonLarge provider="pocket" title={`"${props.title}"`} url={props.url}>
                <FiPocket />
            </ButtonLarge>
        </section>
    )
}
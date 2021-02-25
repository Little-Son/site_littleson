import { ButtonLarge } from './Button'
import { FiFacebook, FiTwitter, FiPocket } from 'react-icons/fi'

export default function ShareButtons() {
    return(
        <section className="grid grid-cols-3 gap-2">
            <ButtonLarge>
                <FiFacebook />
            </ButtonLarge>

            <ButtonLarge>
                <FiTwitter />
            </ButtonLarge>

            <ButtonLarge>
                <FiPocket />
            </ButtonLarge>
        </section>
    )
}
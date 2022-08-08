import Image from '@/components/share/image'
import { setClassName } from '@/utils'
import styles from '@/styles/share/icon.module.scss'

interface Props {
    src: string
    alt?: string
    className?: string
    [restProps: string]: any
}

const Icon = ({ src, alt = '', className = '', ...rest }: Props) => {
    return (
        <div className={setClassName([styles.icon, className])} {...rest}>
            <i>
                <Image
                    src={src}
                    alt={alt}
                    layout='fill'
                    priority={true}
                />
            </i>
        </div>
    )
}

export default Icon
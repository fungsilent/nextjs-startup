import Image from 'next/image'
import { setClassName } from '@/utils'
import styles from '@/styles/share/icon.module.scss'

type Props = {
    src: string
    alt?: string
    className?: string
    [restProps: string]: any
}

const Icon = ({
    src,
    alt = '',
    className = '',
    ...rest
}: Props) => {
    return (
        <div className={setClassName([styles.icon, className])} {...rest}>
            <i>
                <Image
                    src={src}
                    alt={alt}
                    layout='fill'
                    priority={true}
                    objectFit='contain'
                />
            </i>
        </div>
    )
}

export default Icon
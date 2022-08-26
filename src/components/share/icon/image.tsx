import _split from 'lodash/split'
import NextImage, { ImageProps } from '@/components/share/image'
import { setClassName } from '@/utils'
import styles from '@/styles/share/icon/image.module.scss'

export type IconProps = Omit<ImageProps, 'className'> & {
    src?: string
    size?: number
    className?: {
        root?: string
        icon?: string
        image?: string
    }
}

const Icon = ({
    src,
    size = 20,
    className: {
        root: rootClassName,
        icon: iconClassName,
        image: imageClassName,
    } = {},
    ...rest
}: IconProps) => {
    const isFullPath = _split(src, '/').length > 1
    return (
        <i className={setClassName([styles.icon, rootClassName])} {...rest}>
            <NextImage
                {...rest}
                src={isFullPath ? src : `images/icon/${src}`}
                className={{
                    root: iconClassName,
                    image: imageClassName,
                }}
                objectFit='contain'
                width={size}
                height={size}
                unoptimized
            />
        </i>
    )
}

export default Icon
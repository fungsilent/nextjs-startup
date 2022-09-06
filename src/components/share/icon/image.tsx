import { split } from 'lodash'
import NextImage, { ImageProps } from '@/components/share/image'
import { setClassName } from '@/utils'
import styles from '@/styles/share/icon/image.module.scss'

export type IconProps = Omit<ImageProps, 'classes'> & {
    src?: string
    size?: number
    classes?: {
        root?: string
        icon?: string
        image?: string
    }
}

const Icon = ({
    src,
    size = 20,
    classes: {
        root: rootClassName,
        icon: iconClassName,
        image: imageClassName,
    } = {},
    ...rest
}: IconProps) => {
    const isFullPath = split(src, '/').length > 1
    return (
        <i className={setClassName([styles.icon, rootClassName])} {...rest}>
            <NextImage
                {...rest}
                src={isFullPath ? src : `images/icon/${src}`}
                classes={{
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
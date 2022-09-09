import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { setClassName } from '@/utils'
import styles from '@/styles/share/image.module.scss'

export type ImageProps = Omit<NextImageProps, 'className'> & {
    classes?: {
        root?: ClassName
        image?: ClassName
    }
}

const Image = ({
    classes: {
        root: rootClassName,
        image: imageClassName,
    } = {},
    unoptimized = true,
    src, alt, layout, sizes, priority, loading, lazyRoot, lazyBoundary, quality, width, height, style, objectFit, objectPosition, onLoadingComplete, placeholder, blurDataURL,
    ...rest
}: ImageProps) => {
    return (
        <div className={setClassName([styles.image, rootClassName])} {...rest}>
            <NextImage
                className={imageClassName}
                // No handling props
                src={src}
                alt={alt}
                layout={layout}
                sizes={sizes}
                unoptimized={unoptimized}
                priority={priority}
                loading={loading}
                lazyRoot={lazyRoot}
                lazyBoundary={lazyBoundary}
                quality={quality}
                width={width}
                height={height}
                style={style}
                objectFit={objectFit}
                objectPosition={objectPosition}
                onLoadingComplete={onLoadingComplete}
                placeholder={placeholder}
                blurDataURL={blurDataURL}
            />
        </div>
    )
}

export default Image
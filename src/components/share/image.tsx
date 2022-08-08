import NextImage, { ImageProps } from 'next/image'
import { setClassName } from '@/utils'
import styles from '@/styles/share/image.module.scss'

type Props = ImageProps & {
    imageClassName?: string
}

const Image = ({
    className = '',
    imageClassName = '',
    unoptimized = true,
    src, alt, layout, sizes, priority, loading, lazyRoot, lazyBoundary, quality, width, height, style, objectFit, objectPosition, onLoadingComplete, placeholder, blurDataURL,
    ...rest
}: Props) => {
    return (
        <div className={setClassName([styles.image, className])} {...rest}>
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
import { Splide, SplideTrack, SplideSlide, SplideProps } from '@splidejs/react-splide'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { setClassName } from '@/utils'
import styles from '@/styles/share/slider.module.scss'

type SlideProps = Children & {
    className?: string
}
type SliderProps = Omit<SplideProps, 'className'> & {
    layout?: 'default'
    classes?: {
        root?: string
        slides?: string
        arrows?: string
    }
}

const Slide = ({
    children,
    className,
}: SlideProps) => (
    <SplideSlide className={setClassName([styles.slide, className])}>
        {children}
    </SplideSlide>
)

const Slider = ({
    children,
    options = {},
    layout = 'default',
    classes: {
        root: rootClassName,
        slides: slidesClassName,
        arrows: arrowsClassName,
    } = {},
    ...rest
}: SliderProps) => {
    const pagination = (
        <ul className={setClassName(['splide__pagination', styles.pagination])}/>
    )

    const arrows = (
        <div className={setClassName(['splide__arrows', styles.arrows, arrowsClassName])}>
            <FontAwesomeIcon
                icon={faAngleLeft}
                className={setClassName(['splide__arrow splide__arrow--prev', styles.prev])}
            />
            <FontAwesomeIcon
                icon={faAngleRight}
                className={setClassName(['splide__arrow splide__arrow--next', styles.next])}
            />
        </div>
    )

    return (
        <Splide
            {...rest}
            options={{
                ...options,
                classes: {
                    ...options.classes ?? {},
                    page: styles.page
                }
            }}
            className={setClassName([styles.slider, styles[`layout-${layout}`], rootClassName])}
            hasTrack={false}
        >
            <SplideTrack className={setClassName([styles.slides, slidesClassName])}>
                {children}
            </SplideTrack>
            {pagination}
            {arrows}
        </Splide>
    )
}

export {
    Slider,
    Slide
}
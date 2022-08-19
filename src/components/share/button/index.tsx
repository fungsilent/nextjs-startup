import { ReactNode, MouseEventHandler } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import Link from '@/components/share/link'
import { setClassName } from '@/utils'
import styles from '@/styles/share/button/default.module.scss'

/* TODO: use HTMLElement type */
export type ButtonProps = {
    link?: string
    target?: string
    children?: ReactNode
    loading?: boolean
    success?: boolean
    error?: boolean
    onClick?: MouseEventHandler
    className?: {
        root?: string
        loader?: string
        success?: string
        error?: string
    }
    layout?: 'default' | 'hollow' | 'solid'
}

const DefaultButton = ({
    link,
    children,
    loading = false,
    success = false,
    error = false,
    onClick,
    className: {
        root: rootClassName = '',
        loader: loaderClassName = '',
        success: successClassName = '',
        error: errorClassName = '',
    } = {},
    layout = 'default',
    ...rest
}: ButtonProps) => {
    // Function
    const handleClick: MouseEventHandler = event => {
        if (onClick && !loading) {
            onClick(event)
        }
    }

    // Render
    const content = (
        <>
            {children}
            {loading ? (
                <CircularProgress
                    size={30}
                    color='inherit'
                    classes={{
                        root: setClassName([styles.loader, loaderClassName]),
                    }}
                />
            ) : null}
            {success ? (
                <i className={setClassName(['fa-layers fa-fw', styles.success, successClassName])}>
                    <FontAwesomeIcon
                        icon={faCircle}
                        className={setClassName([styles.bg])}
                    />
                    <FontAwesomeIcon
                        icon={faCheck}
                        inverse
                        transform='shrink-6'
                        className={setClassName([styles.icon])}
                    />
                </i>
            ) : null}
            {error ? (
                <i className={setClassName(['fa-layers fa-fw', styles.error, errorClassName])}>
                    <FontAwesomeIcon
                        icon={faCircle}
                        className={setClassName([styles.bg])}
                    />
                    <FontAwesomeIcon
                        icon={faXmark}
                        inverse
                        transform='shrink-6'
                        className={setClassName([styles.icon])}
                    />
                </i>
            ) : null}
        </>
    )
    if (link) {
        return (
            <Link
                href={link}
                className={setClassName([styles.button, styles[`layout-${layout}`], rootClassName])}
                onClick={handleClick}
                {...rest}
            >
                {content}
            </Link>
        )
    } else {
        return (
            <button
                className={setClassName([styles.button, styles[`layout-${layout}`], rootClassName])}
                onClick={handleClick}
                {...rest}
            >
                {content}
            </button>
        )
    }
}

export default DefaultButton
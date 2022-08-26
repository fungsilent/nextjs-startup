import { ReactNode, MouseEventHandler } from 'react'
import LoaderIcon from '@/components/share/icon/loader'
import SuccessIcon from '@/components/share/icon/success'
import ErrorIcon from '@/components/share/icon/error'
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
            <div className={styles.status}>
                {loading ? <LoaderIcon className={{ root: loaderClassName }}/> : null}
                {success ? <SuccessIcon className={{ root: successClassName }}/> : null}
                {error ? <ErrorIcon className={{ root: errorClassName }}/> : null}
            </div>
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
                type='button'
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
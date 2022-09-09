import { MouseEventHandler } from 'react'
import StatusIcon, { StatusIconProps } from '@/components/share/icon/status'
import Link from '@/components/share/link'
import { setClassName } from '@/utils'
import styles from '@/styles/share/button/default.module.scss'

export type ButtonProps = Children & NoClassName<StatusIconProps> & {
    link?: string
    target?: string
    loading?: boolean
    success?: boolean
    error?: boolean
    onClick?: MouseEventHandler
    classes?: {
        root?: ClassName
        loader?: ClassName
        success?: ClassName
        error?: ClassName
    }
    layout?: 'default'
}

const DefaultButton = ({
    link,
    children,
    onClick,
    loading = false,
    success = false,
    error = false,
    classes: {
        root: rootClassName,
        loader: loaderClassName,
        success: successClassName,
        error: errorClassName,
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
            <StatusIcon
                loading={loading}
                success={success}
                error={error}
                classes={{
                    root: styles.status,
                    icon: styles.icon,
                    loader: loaderClassName,
                    success: successClassName,
                    error: errorClassName,
                }}
            />
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
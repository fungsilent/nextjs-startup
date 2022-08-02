import { ReactNode } from 'react'
import Link from 'next/link'
import Text from '@/components/share/text'
import { setClassName } from '@/utils'
import styles from '@/styles/share/button/solid.module.scss'

const SollidButton = (props: {
    text?: [string, string]
    link?: string
    children?: ReactNode
    className?: string
    [restProps: string]: any
}) => {
    const {
        text,
        link,
        children,
        className = '',
        ...rest
    } = props

    const content = (
        <>
            <Text
                className={styles.text}
                isRow={false}
                textCenter={true}
                text={text}
            />
            <div>{children}</div>
        </>
    )
    if (link) {
       return (
            <Link href={link}>
                <a className={setClassName([styles.button, className])} {...rest}>
                    {content}
                </a>
            </Link>
       )
    } else {
        return (
            <button className={setClassName([styles.button, className])} {...rest}>
                {content}
            </button>
        )
    }
}

export default SollidButton
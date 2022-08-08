import { ReactNode } from 'react'
import NextLink, { LinkProps } from 'next/link'

type Props = LinkProps & {
    className?: string,
    children?: ReactNode
}

const Link = ({
    className = '',
    children,
    href, as, replace, scroll, shallow, passHref, prefetch, locale, legacyBehavior, onMouseEnter, onClick,
    ...rest
}: Props) => {
    return (
        <NextLink
            // No handling props
            href={href}
            as={as}
            replace={replace}
            scroll={scroll}
            shallow={shallow}
            passHref={passHref}
            prefetch={prefetch}
            locale={locale}
            legacyBehavior={legacyBehavior}
            onMouseEnter={onMouseEnter}
            onClick={onClick}
        >
            <a className={className} {...rest}>
                {children}
            </a>
        </NextLink>
    )
}

export default Link
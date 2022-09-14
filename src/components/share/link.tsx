import NextLink, { LinkProps as NextLinkProps } from 'next/link'

type LinkProps = NextLinkProps & Children & {
    className?: ClassName
    classes?: {
        root?: ClassName
    }
}

const Link = ({
    className,
    classes: {
        root: rootClassName,
    } = {},
    children,
    href, as, replace, scroll, shallow, passHref, prefetch, locale, legacyBehavior,
    ...rest
}: LinkProps) => {
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
            // onMouseEnter={onMouseEnter}
            // onClick={onClick}
        >
            <a className={rootClassName ?? className} {...rest}>
                {children}
            </a>
        </NextLink>
    )
}

export default Link
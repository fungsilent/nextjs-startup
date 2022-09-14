import _ from 'lodash'
import useResponsive from '@/hooks/useResponsive'
import DesktopHeader from '@/components/part/header/desktop'
import MobileHeader from '@/components/part/header/mobile'
import { HeaderProps, MenuItem } from '@/types/app'

const menuList: MenuItem[] = [
    {
        name: 'Home',
        link: '/', 
    },
    {
        name: 'Example',
        link: '/example', 
    },
]

const Header = ({
    classes: {
        desktop: desktopClassName,
        mobile: mobileClassName,
    } = {}
}: HeaderProps) => {
    const { isDesktop, isResponsive } = useResponsive()
    return (
        <>
            {isDesktop ? (
                <DesktopHeader
                    menu={menuList}
                    classes={{
                        root: desktopClassName
                    }}
                />
            ): null}
            {isResponsive ? (
                <MobileHeader
                    menu={menuList}
                    classes={{
                        root: mobileClassName
                    }}
                />
            ): null}
        </>
    )
}

export default Header
import _ from 'lodash'
import DesktopHeader from '@/components/part/header/desktop'
import MobileHeader from '@/components/part/header/mobile'
import { setClassName } from '@/utils'
import styles from '@/styles/part/header.module.scss'

export type MenuItem = {
    name: string
    link: string
}

const menuList = [
    {
        name: 'Page 1',
        link: '/', 
    },
    {
        name: 'Page 2',
        link: '/', 
    },
]

const Header = ({ className }: { className?: string }) => {
    
    return (
        <header className={setClassName([styles.header, className])}>
            <DesktopHeader menuList={menuList}/>
            <MobileHeader menuList={menuList}/>
        </header>
    )
}

export default Header
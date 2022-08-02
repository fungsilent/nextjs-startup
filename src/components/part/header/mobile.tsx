import _ from 'lodash'
import { useToggle } from 'react-use'
import Image from 'next/image'
import Link  from 'next/link'
import Drawer from '@mui/material/Drawer'
import { setClassName } from '@/utils'
import { MenuItem } from '@/components/part/header'
import styles from '@/styles/part/header.module.scss'

const MobileHeader = (props: {
    menuList: Array<MenuItem>
}) => {
    const {
        menuList
    } = props
    const [isShow, toggleShow] = useToggle(false)

    const closeMenu = () => toggleShow(false)

    const menuItem = _.map(menuList, (item, key) => (
        <Link href={item.link} key={key}>
            <a onClick={closeMenu}>
                {item.name}
            </a>
        </Link>
    ))

    return (
        <div className={setClassName(['container', styles.mobileContainer])}>
            <Link href='/'>
                <a className={styles.logo}>
                    <Image
                        src='/images/logo.png'
                        alt='logo'
                        layout='fill'
                    />
                </a>
            </Link>
            <i className={styles.menuButton} onClick={toggleShow}>
                <Image
                    src='/images/icon/meun_button.svg'
                    alt='menu button'
                    layout='fill'
                />
            </i>
            <Drawer
                anchor='right'
                open={isShow}
                onClose={closeMenu}
            >
                <div className={styles.sideMenu}>
                    {menuItem}
                </div>
            </Drawer>
        </div>
    )
}

export default MobileHeader
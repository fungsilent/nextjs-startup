import _ from 'lodash'
import Image from 'next/image'
import Link  from 'next/link'
import { setClassName } from '@/utils'
import { MenuItem } from '@/components/part/header'
import styles from '@/styles/part/header.module.scss'

const DesktopHeader = (props: {
    menuList: Array<MenuItem>
}) => {
    const {
        menuList
    } = props

    const menuItem = _.map(menuList, (item, key) => (
        <Link href={item.link} key={key}>
            <a>
                {item.name}
            </a>
        </Link>
    ))

    return (
        <div className={setClassName(['container', styles.desktopContainer])}>
            <Link href='/'>
                <a className={styles.logo}>
                    <Image
                        src='/images/logo.png'
                        alt='logo'
                        layout='fill'
                    />
                </a>
            </Link>
            <div className={styles.menu}>
                {menuItem}
            </div>
        </div>
    )
}

export default DesktopHeader
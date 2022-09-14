import { map } from 'lodash'
import Image from '@/components/share/image'
import Link  from '@/components/share/link'
import { setClassName } from '@/utils'
import { MenuItem } from '@/types/app'
import styles from '@/styles/part/header.module.scss'

type DesktopHeaderProps = {
    menuList: MenuItem[]
    classes: {
        root?: ClassName
    }
}

const DesktopHeader = ({
    menuList,
    classes: {
        root: rootClassName
    } = {}
}: DesktopHeaderProps) => {
    const menuItem = map(menuList, (item, key) => (
        <Link href={item.link} key={key} className={styles.item}>
            {item.name}
        </Link>
    ))

    return (
        <header className={setClassName([styles.desktop, rootClassName])}>
            <div className={setClassName(['container', styles.container])}>
                <Link href='/' className={styles.logo}>
                    <Image
                        src='/images/logo.png'
                        alt='logo'
                        objectFit='contain'
                        width={100}
                        height={50}
                        unoptimized
                    />
                </Link>
                <div className={styles.menu}>
                    {menuItem}
                </div>
            </div>
        </header>
    )
}

export default DesktopHeader
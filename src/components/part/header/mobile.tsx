import _ from 'lodash'
import { useRef, useEffect } from 'react'
import { useToggle } from 'react-use'
import Image from '@/components/share/image'
import Link  from '@/components/share/link'
import Drawer from '@mui/material/Drawer'
import { setClassName } from '@/utils'
import { MenuItem } from '@/types/app'
import styles from '@/styles/part/header.module.scss'

type MobileHeaderProps = {
    menuList: MenuItem[]
    classes: {
        root?: ClassName
    }
}

const MobileHeader = ({
    menuList,
    classes: {
        root: rootClassName
    } = {}
}: MobileHeaderProps) => {
    const bar = useRef<HTMLDivElement>(null)
    const barHeight = useRef<number>(0)
    const [isShow, toggleShow] = useToggle(false)

    useEffect(() => {
        const height = bar.current?.clientHeight
        if (_.isNumber(height)) {
            barHeight.current = height
        }
    }, [])

    const closeMenu = () => toggleShow(false)

    const menuItem = _.map(menuList, (item, key) => (
        <Link
            key={key}
            href={item.link}
            className={styles.item}
            onClick={closeMenu}
        >
            {item.name}
        </Link>
    ))

    return (
        <header className={setClassName([styles.mobile, rootClassName])} ref={bar}>
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
            <i className={styles.menuButton} onClick={toggleShow} data-show={isShow}>
                <span data-line='1'/>
                <span data-line='2'/>
                <span data-line='3'/>
            </i>
            <Drawer
                anchor='left'
                open={isShow}
                onClose={closeMenu}
                hideBackdrop={true}
            >
                <div className={styles.sideMenu} style={{ marginTop: barHeight.current }}>
                    {menuItem}
                </div>
            </Drawer>
        </header>
    )
}

export default MobileHeader
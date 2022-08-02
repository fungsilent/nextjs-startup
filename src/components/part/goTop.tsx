import Icon from '@/components/share/icon'
import styles from '@/styles/part/top.module.scss'

const GoTop = () => {
    const go = () => window.scrollTo(0, 0)
    return (
        <Icon
            className={styles.goTop}
            src='/images/icon/go_top.svg'
            alt='go top'
            onClick={go}
        />
    )
}

export default GoTop
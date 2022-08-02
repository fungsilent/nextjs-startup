import { setClassName } from '@/utils'
import styles from '@/styles/part/footer.module.scss'

const Footer = () => {
    const renderBottom = () => (
        <div className={styles.bottom}>
            <div className={styles.copyright}>
                <span>Copyright © {(new Date).getFullYear()} company. All rights reserved.</span>
            </div>
            <div className={styles.designBy}>
                Web designed by Innpression
            </div>
            {/* <div className={styles.terms}>
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
            </div> */}
        </div>
    )

    return (
        <footer className={styles.footer}>
            <div className={setClassName(['container', styles.container])}>
                {renderBottom()}
            </div>
        </footer>
    )
}

export default Footer
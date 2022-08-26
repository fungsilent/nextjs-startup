import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faXmark } from '@fortawesome/free-solid-svg-icons'
import { setClassName } from '@/utils'
import styles from '@/styles/share/icon/status.module.scss'

type ErrorIconProps = {
    className?: {
        root?: string,
    }
}

const ErrorIcon = ({
    className: {
        root: rootClassName,
    } = {},
}: ErrorIconProps) => (
    <i className={setClassName(['fa-layers fa-fw', styles.status, styles.error, rootClassName])}>
        <FontAwesomeIcon
            icon={faCircle}
            className={setClassName([styles.bg])}
        />
        <FontAwesomeIcon
            icon={faXmark}
            inverse
            transform='shrink-6'
            className={setClassName([styles.icon])}
        />
    </i>
)

export default ErrorIcon
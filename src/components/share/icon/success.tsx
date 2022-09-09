import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCheck } from '@fortawesome/free-solid-svg-icons'
import { setClassName } from '@/utils'
import styles from '@/styles/share/icon/status.module.scss'

type SuccessIconProps = {
    classes?: {
        root?: ClassName
    }
}

const SuccessIcon = ({
    classes: {
        root: rootClassName,
    } = {},
}: SuccessIconProps) => (
    <i className={setClassName(['fa-layers fa-fw', styles.status, styles.success, rootClassName])}>
        <FontAwesomeIcon
            icon={faCircle}
            className={setClassName([styles.bg])}
        />
        <FontAwesomeIcon
            icon={faCheck}
            inverse
            transform='shrink-6'
            className={setClassName([styles.icon])}
        />
    </i>
)

export default SuccessIcon
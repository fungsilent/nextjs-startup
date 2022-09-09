import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { setClassName } from '@/utils'
import styles from '@/styles/share/icon/status.module.scss'

type LoaderIconProps = {
    classes?: {
        root?: string
    }
}

const LoaderIcon = ({
    classes: {
        root: rootClassName,
    } = {},
}: LoaderIconProps) => (
    <i className={setClassName([styles.status, styles.loader, rootClassName])}>
        <FontAwesomeIcon
            icon={faCircleNotch}
            className={setClassName([styles.bg])}
            spin
        />
    </i>
)

export default LoaderIcon
import CircularProgress from '@mui/material/CircularProgress'
import { setClassName } from '@/utils'
import styles from '@/styles/share/icon/status.module.scss'

type LoaderIconProps = {
    classes?: {
        root?: string,
    }
}

const LoaderIcon = ({
    classes: {
        root: rootClassName,
    } = {},
}: LoaderIconProps) => (
    <i className={setClassName([styles.status, styles.loader, rootClassName])}>
        <CircularProgress
            size={20}
            color='inherit'
            classes={{
                root: setClassName([styles.icon]),
            }}
        />
    </i>
)

export default LoaderIcon
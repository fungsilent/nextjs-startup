import _ from 'lodash'
import styles from '@/styles/page/example.module.scss'

const Display = ({ v }) => {
    const key = _.chain(v).keys().head().value()
    let value = v[key]
    if (_.isBoolean(value)) value = (new Boolean(value)).toString()
    return (
        <div className={styles.display}>
            <span>{key}</span>
            <span>=</span>
            <span>{value}</span>
        </div>
    )
}

export default Display
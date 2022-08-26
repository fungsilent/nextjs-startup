import _ from 'lodash'
import Accordion from '@/components/share/accordion'
import Display from '@/components/page/example/display'
import styles from '@/styles/page/example.module.scss'

const Share = () => {
    
    return (
        <div className={styles.layout}>
            <h2>Share Components</h2>
            {_.map(Array.from({ length: 3 }), (i, key) => (
                <Accordion
                    key={key}
                    header={<span>Header</span>}
                >
                    <span>Content</span>
                </Accordion>
            ))}
        </div>
    )
}

export default Share

import _ from 'lodash'
import Accordion from '@/components/share/accordion'
import styles from '@/styles/page/example.module.scss'

const Share = () => {
    
    return (
        <div>
            <h2>Share Components</h2>
            <div>
                {_.map(Array.from({ length: 3 }), (i, key) => (
                    <Accordion
                        key={key}
                        header={<span>Header</span>}
                    >
                        <span>Content</span>
                    </Accordion>
                ))}
            </div>
        </div>
    )
}

export default Share

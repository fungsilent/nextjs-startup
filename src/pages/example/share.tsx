import _ from 'lodash'
import Accordion from '@/components/share/accordion'
import { Slider, Slide } from '@/components/share/slider'
import Display from '@/components/page/example/display'
import styles from '@/styles/page/example.module.scss'
import '@splidejs/react-splide/css/core'
// type
import { Page } from '@/types/app'

const Share: Page = () => {
    
    return (
        <div className={styles.layout}>
            <h2>Share Components</h2>
            <h3>Accordion</h3>
            {_.map(Array.from({ length: 2 }), (i, key) => (
                <Accordion
                    key={key}
                    header={<span>Header</span>}
                >
                    <span>Content</span>
                </Accordion>
            ))}
            <br/>
            <h3>Slider</h3>
            <Slider
                options={{
                    type: 'loop',
                }}
            >
                {_.map(Array.from({ length: 5 }), (i, key) => (
                    <Slide key={key}>
                        <picture>
                            <img src='/images/logo.png' alt={`image ${key}`}/>
                        </picture>
                    </Slide>
                ))}
            </Slider>
        </div>
    )
}

export default Share

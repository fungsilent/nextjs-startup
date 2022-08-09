import _ from 'lodash'
import Link from '@/components/share/link'
import styles from '@/styles/page/example.module.scss'

const Demo = () => {
    return (
        <div className={styles.page}>
            <h2>Example page</h2>
            <Link href='/example/config'>
                useConfig
            </Link>
            <Link href='/example/seo'>
                SEO
            </Link>
            <Link href='/example/dynamic-route-export/param-1'>
                Dynamic Route Export
            </Link>
        </div>
    )
}

export default Demo

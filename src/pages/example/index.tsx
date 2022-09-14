import _ from 'lodash'
import { NextPage } from 'next'
import Link from '@/components/share/link'
import styles from '@/styles/page/example.module.scss'

const routes = [
    { name: 'Config', link: '/example/config' },
    { name: 'SEO', link: '/example/seo' },
    { name: 'Dynamic Route Export', link: '/example/dynamic-route-export/param-1' },
    { name: 'Form', link: '/example/form' },
    { name: 'Store', link: '/example/store' },
    { name: 'Api', link: '/example/api' },
    { name: 'Share', link: '/example/share'},
    { name: 'Util', link: '/example/util'},
]

const Demo: NextPage = () => {
    return (
        <div className={styles.page}>
            <h2>Example page</h2>
            {_.map(routes, (route, key) => (
                <Link key={key} href={route.link}>
                    {route.name}
                </Link>
            ))}
        </div>
    )
}

export default Demo

import useConfig from '@/hooks/useConfig'
import Display from '@/components/page/example/display'
// type
import { GetStaticProps } from 'next'
import { AppProps, Page } from '@/types/app'
import styles from '@/styles/page/example.module.scss'

const Config: Page = ({ env }) => {
    const { seo: { siteName }} = useConfig()
    return (
        <div className={styles.layout}>
            <h2>Config</h2>
            <Display v={{ env }}/>
            <Display v={{ siteName }}/>
        </div>
    )
}

export const getStaticProps: GetStaticProps<AppProps> = async context => {
    return {
        props: {
            header: {
                className: 'home-header',
            }
        }
    }
}

export default Config
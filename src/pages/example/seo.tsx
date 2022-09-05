import { NextSeo } from 'next-seo'
import _ from 'lodash'
import axios from 'axios'
import Display from '@/components/page/example/display'
import styles from '@/styles/page/example.module.scss'
// type
import { Page } from '@/types/app'

type Props = {
    response: any
    title: string
    description: string
}

const SEO: Page<Props> = ({ response, title, description }) => {
    console.log(response)
    return (
        <div className={styles.layout}>
            <NextSeo
                title={title}
                description={description}
            />
            <h2>SEO</h2>
            <Display v={{ title }}/>
            <Display v={{ description }}/>
        </div>
    )
}
  
export const getServerSideProps = async () => {
    const response = await axios.get('https://restcountries.com/v3.1/all')
    const c = _.sample(response.data)
    return {
        props: {
            page: {
                response: c,
                title: c.altSpellings[0],
                description: _.last(c.altSpellings),
            }
        },
    }
}

export default SEO
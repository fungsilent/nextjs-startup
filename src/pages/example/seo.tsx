import Head from 'next/head'
import _ from 'lodash'
import Display from '@/components/page/example/display'
import styles from '@/styles/page/example.module.scss'

export default function SEO({ response, title, description }) {
    console.log(response)
    return (
        <div className={styles.layout}>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
            </Head>
            <h2>SEO</h2>
            <Display v={{ title }}/>
            <Display v={{ description }}/>
        </div>
    )
  }
  
export async function getServerSideProps() {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const demoData = await response.json();
    const c = _.sample(demoData)
  
    return {
        props: {
            response: c,
            title: c.altSpellings[0],
            description: _.last(c.altSpellings),
        },
    }
}
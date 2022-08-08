import Head from 'next/head'
import _ from 'lodash'

export default function SEO({ response, title, description }) {
    console.log(response)
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
            </Head>
            <div>
                <p>title: {title}</p>
                <p>description: {description}</p>
            </div>
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
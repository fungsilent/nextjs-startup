import Display from '@/components/page/example/display'
import { mapData } from '@/utils'
// type
import { Page } from '@/types/app'
import styles from '@/styles/page/example.module.scss'

const mapDataFn = () => {
    type Data = {
        name: string
        email: string
        company_name: string
        company_address: string
    }
    type MappedData = {
        name: string
        emailemail: string
        company: {
            name: string
            address: string
        }
    }
    const responseData = {
        name: 'name',
        email: 'email',
        company_name: 'company_name',
        company_address: 'company_address',
    }
    const map = {
        email: 'emailemail',
        company_name: 'company.name',
        company_address: 'company.address',
    }
    const mapper = mapData<Data, MappedData>(map)
    const convert = mapper.convert(responseData)
    const reverse = mapper.reverse(convert)
    return {
        convert,
        reverse,
    }
}

const Util: Page = () => {
    /* mapData */
    const mapDataTest = mapDataFn()
    console.log('mapDataTest', mapDataTest)
    return (
        <div className={styles.layout}>
            <h2>Util</h2>
            <Display v={{ 'convert.company.name': mapDataTest.convert.company.name}}/>
            <Display v={{ 'reverse.company_name': mapDataTest.reverse.company_name}}/>
        </div>
    )
}

export default Util
import moment from 'moment'
import { useEffect } from 'react'
import { useFirstMountState, useUpdate } from 'react-use'
import { useDispatch, useSelector } from '@/hooks/useStore'
import useSystem from '@/hooks/useSystem'
import { fetchTest } from '@/store/reducer/api/test'
import { useApiAction, useApi } from '@/hooks/useStore'
import Display from '@/components/page/example/display'
import Button from '@/components/share/button'
import styles from '@/styles/page/example.module.scss'
// type
import { Page } from '@/types/app'

const Api: Page = () => {
    const isMount = useFirstMountState()
    const doReRender = useUpdate()
    const dispatch = useDispatch()
    const appState = useSelector(state => state)
    const fetchSystemState = useSystem()
   
    /* fetch test state */
    const fetchTestAction = useApiAction(fetchTest)
    const fetchTestState = useApi('fetchTest', fetchTest)
    const fetchTestStateWithSelector = useApi('fetchTest', fetchTest, { handleData: d => d })
    const fetchTestStateWithCustSelector = useApi('fetchTest', fetchTest, { handleData: d => ({ abc: 1 }) })
    const fetchTestType = {
        data: fetchTestState.data,
        dataWithSelector: fetchTestStateWithSelector.data,
        dataWithCustSelector: fetchTestStateWithCustSelector.data,
    }

    console.groupCollapsed('Api State')
    console.log('appState', appState)
    console.log('fetchTest', fetchTestState)
    console.log('fetchSystem', fetchSystemState)
    console.groupEnd()

    useEffect(() => {
        doReRender()
    }, [])

    const doFetchTest = () => {
        // dispatch(fetchTest({ key: 'HK' }))
        fetchTestState.action({ key: 'HK' })
    }

    return (
        <div className={styles.layout}>
            <h2>Api</h2>
            <Button onClick={doReRender}>Render - {isMount ? '' : moment().format()}</Button>
            <br/>
            <h3>fetchTest</h3>
            <Display v={{ isLoading: fetchTestState.isLoading }}/>
            <Display v={{ isSuccessed: fetchTestState.isSuccessed }}/>
            <Display v={{ isFailed: fetchTestState.isFailed }}/>
            <Button onClick={doFetchTest}>do fetchTest</Button>
            <br/>
            <h3>fetchSystem</h3>
            <Display v={{ isLoading: fetchSystemState.isLoading }}/>
            <Display v={{ isSuccessed: fetchSystemState.isSuccessed }}/>
            <Display v={{ isFailed: fetchSystemState.isFailed }}/>
            <br/>
        </div>
    )
}

export default Api

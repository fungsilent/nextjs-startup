import moment from 'moment'
import { useUpdate } from 'react-use'
import { useDispatch, useSelector } from '@/hooks/useStore'
import { FetchSystemData } from '@/store/reducer/api/system'
import useSystem from '@/hooks/useSystem'
import Display from '@/components/page/example/display'
import Button from '@/components/share/button'
import styles from '@/styles/page/example.module.scss'

const Api = () => {
    const doReRender = useUpdate()
    // const dispatch = useDispatch()
    const appState = useSelector(state => state)
    const fetchSystemState = useSystem()

    console.groupCollapsed('Api State')
    console.log('appState', appState)
    console.log('fetchSystem', fetchSystemState)
    console.groupEnd()

    return (
        <div className={styles.layout}>
            <h2>Api</h2>
            <h3>fetchSystem</h3>
            <Display v={{ isLoading: fetchSystemState.isLoading }}/>
            <Display v={{ isSuccessed: fetchSystemState.isSuccessed }}/>
            <Display v={{ isFailed: fetchSystemState.isFailed }}/>
            <br/>
            <h3>fetchSystem</h3>
            <Display v={{ isLoading: fetchSystemState.isLoading }}/>
            <Display v={{ isSuccessed: fetchSystemState.isSuccessed }}/>
            <Display v={{ isFailed: fetchSystemState.isFailed }}/>
            <Button onClick={doReRender}>Render - {moment().format()}</Button>
        </div>
    )
}

export default Api

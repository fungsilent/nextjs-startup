import moment from 'moment'
import { useUpdate } from 'react-use'
import { useDispatch, useSelector } from '@/hooks/useStore'
import { FetchSystemData } from '@/store/reducer/api/system'
import useSystem from '@/hooks/useSystem'
import Button from '@/components/share/button'

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
        <div>
            <h2>Api</h2>
            <br/>
            <ul>
                <h3>fetchSystem</h3>
                <li>isLoading = [{fetchSystemState.isLoading ? 'true' : 'false'}]</li>
                <li>isSuccessed = [{fetchSystemState.isSuccessed ? 'true' : 'false'}]</li>
                <li>isFailed = [{fetchSystemState.isFailed ? 'true' : 'false'}]</li>
            </ul>
            <br/>
            <ul>
                <h3>fetchSystem</h3>
                <li>isLoading = [{fetchSystemState.isLoading ? 'true' : 'false'}]</li>
                <li>isSuccessed = [{fetchSystemState.isSuccessed ? 'true' : 'false'}]</li>
                <li>isFailed = [{fetchSystemState.isFailed ? 'true' : 'false'}]</li>
            </ul>
            <Button onClick={doReRender}>Render<br/>{moment().format()}</Button>
        </div>
    )
}

export default Api

import { useDispatch, useSelector } from '@/hooks/useStore'
import { FetchSystemData } from '@/store/reducer/api/system'
import useSystem from '@/hooks/useSystem'

const Api = () => {
    // const dispatch = useDispatch()
    // const counter = useSelector(state => state.normal.counter)
    // const add = () => dispatch(addCounter())
    const fetchSystemState = useSystem()

    console.groupCollapsed()
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
        </div>
    )
}

export default Api

import { useEffect } from 'react'
import { fetchSystem } from '@/store/reducer/api/system'
import { useDispatch, useApi, ApiReuslt } from '@/hooks/useStore'
import { FetchSystemData } from '@/store/reducer/api/system'

const useSystem = <Data = FetchSystemData>(handleData?: (data: FetchSystemData) => Data): ApiReuslt<Data> => {
    const dispatch = useDispatch()
    const fetchSystemState = useApi<Data>('fetchSystem', { handleData })

    useEffect(() => {
        dispatch(fetchSystem())
    }, [])

    return fetchSystemState
}

export default useSystem
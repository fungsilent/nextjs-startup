import { useEffect } from 'react'
import { fetchSystem } from '@/store/reducer/api/system'
import { useApi } from '@/hooks/useStore'
import { FetchSystemData } from '@/store/reducer/api/system'

const useSystem = <Data = FetchSystemData>(handleData?: (data: FetchSystemData) => Data) => {
    const { action, ...fetchSystemState } = useApi('fetchSystem', fetchSystem, { handleData })

    useEffect(() => {
        action()
    }, [])

    return fetchSystemState
}

export default useSystem
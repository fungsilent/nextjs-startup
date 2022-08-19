import { get } from 'lodash'
import { useEffect, useMemo } from 'react'
import { fetchSystem } from '@/store/reducer/api/system'
import { useDispatch, useApi, ApiReuslt } from '@/hooks/useStore'

const useSystem = <Data>(selector?: string): ApiReuslt<Data> => {
    const dispatch = useDispatch()
    const fetchSystemState = useApi('fetchSystem')

    useEffect(() => {
        dispatch(fetchSystem())
    }, [])

    /* TODO: preventing unnecessary re-renders. needed? how? useMemo? */
    const returnObject = useMemo<ApiReuslt<Data>>(() => ({
        ...fetchSystemState,
            data: selector
                ? get(fetchSystemState.data, selector) as Data
                : (fetchSystemState.data || {}) as Data,
    }), [fetchSystemState])

    return returnObject
}

export default useSystem
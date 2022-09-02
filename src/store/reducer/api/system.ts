import { createApiThunk, applyApi, setApiData, handleResponse } from '@/store/utils/api'

export type FetchSystemData = {
    itemA: []
    itemB: number
}

// Actions
export const fetchSystem = createApiThunk<void, FetchSystemData>(
    'fetchSystem',
    async () => {
        const response = await applyApi.post<FetchSystemData>('get_system', {})
        return handleResponse(response)
    },
)
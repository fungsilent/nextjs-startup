import { createApiThunk, applyApi } from '@/store/utils/api'

export type FetchSystemData = {
    itemA: []
    itemB: number
}

// Actions
export const fetchSystem = createApiThunk<void, FetchSystemData>(
    'fetchSystem',
    async () => {
        const response = await applyApi.post<FetchSystemData>('get_system', {})
        return applyApi.handleResponse(response)
    },
)
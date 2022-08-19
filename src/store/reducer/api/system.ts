import { createApiThunk, applyApi, handleResponse } from '@/store/utils/api'

export type FetchSystemData = {
    itemA: []
    itemB: number
}

// Actions
export const fetchSystem = createApiThunk<void>(
    'fetchSystem',
    async () => {
        const response = await applyApi.post<void>('get_system', {})
        return handleResponse(response)
    },
)
import { createApiThunk, applyApi } from '@/store/utils/api'
import { ApiStatus } from '@/types/api'

export type AddContactData = {
    name: string
    phone: string
    email: string
    content: string
}

// Actions
export const addContact = createApiThunk<AddContactData>(
    'addContact',
    async (arg) => {
        const data = applyApi.setData(arg, 'contact_us_data')
        const response = await applyApi.post<AddContactData>('add_contact_us', data)
        return applyApi.handleResponse(response)
    },
    {
        debug: true,
        status: ApiStatus.successed,
        delay: 1000,
    }
)
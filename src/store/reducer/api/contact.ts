import { createApiThunk, applyApi, setApiData, handleResponse } from '@/store/utils/api'

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
        const data = setApiData(arg, 'contact_us_data')
        const response = await applyApi.post<AddContactData>('add_contact_us', data)
        return handleResponse(response)
    },
    // async (arg: AddContactData, { rejectWithValue }) => {
    //     createAsyncFlow<AddContactData>(
    //         async () => {
    //             const data = setApiData(arg, 'contact_us_data')
    //             return applyApi.post<AddContactData>('add_contact_us', data)
    //         },
    //         error => {
    //             return rejectWithValue(error.message)
    //         }
    //     )
    // }
)
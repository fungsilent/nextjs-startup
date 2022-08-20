import { useForm } from 'react-hook-form'
import { TextField, EmailField, PhoneField, SelectField, MenuItem, CalendarField } from '@/components/share/form'
import Button from '@/components/share/button'

type FormData = {
    text: string
    email: string
    phone: string
    select: string
    calendar: Date
}

const Form = () => {
    const  { watch, control, handleSubmit } = useForm<FormData>({ mode: 'all' })
    
    const logFormData = () => {
        console.log('FormData', watch())
    }

    const onSubmit = (data: FormData) => {
        console.log('onSubmit', data)
    }

    return (
        <div>
            <h2>Form</h2>
            <form>
                <TextField
                    name='text'
                    label='text'
                    control={control}
                />
                <EmailField
                    name='email'
                    label='email'
                    control={control}
                />
                <PhoneField
                    name='phone'
                    label='phone'
                    control={control}
                />
                <SelectField
                    name='select'
                    label='select'
                    control={control}
                >
                    <MenuItem value=''>-</MenuItem>
                    <MenuItem value='1'>Option 1</MenuItem>
                    <MenuItem value='2'>Option 2</MenuItem>
                </SelectField>
                <CalendarField
                    name='calendar'
                    control={control}
                    required={true}
                />
                <Button onClick={logFormData}>FormData</Button>
                <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
            </form>
        </div>
    )
}

export default Form

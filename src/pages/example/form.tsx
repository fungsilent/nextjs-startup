import { useForm, FormProvider } from 'react-hook-form'
import { TextField, EmailField, PhoneField, SelectField, MenuItem, CalendarField } from '@/components/share/form'
import Display from '@/components/page/example/display'
import Button from '@/components/share/button'
import styles from '@/styles/page/example.module.scss'
import _ from 'lodash'
// type
import { Page } from '@/types/app'

type FormData = {
    text: string
    email: string
    phone: string
    select: number
    calendar: Date
}

const Form: Page = () => {
    const  methods = useForm<FormData>({ mode: 'all' })
    const  { watch, control, handleSubmit } = methods
    
    const logFormData = () => {
        console.log('FormData', watch())
    }

    const onSubmit = (data: FormData) => {
        console.log('onSubmit', data)
    }

    return (
        <form className={styles.layout}>
            <h2>Form</h2>
            <FormProvider {...methods}>
                <TextField
                    name='text'
                    label='text'
                    control={control}
                    success
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
                    <MenuItem value={0}>-</MenuItem>
                    <MenuItem value={1}>Option 1</MenuItem>
                    <MenuItem value={2}>Option 2</MenuItem>
                    <MenuItem value={3}>Option 3</MenuItem>
                </SelectField>
                <SelectField
                    name='select'
                    label='select'
                    control={control}
                    list={_.map(Array.from({ length: 4 }), (i, key) => ({
                        value: key + 1,
                        content: `Option ${key + 1}`
                    }))}
                />
                <CalendarField
                    name='calendar'
                    control={control}
                    required={true}
                    minDate={new Date()}
                />
                <div>
                    <Button loading>Loading</Button>
                </div>
                <div>
                    <Button success>Success</Button>
                </div>
                <div>
                    <Button error>Error</Button>
                </div>
                <Button onClick={logFormData} loading>FormData</Button>
                <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
            </FormProvider>
        </form>
    )
}

export default Form

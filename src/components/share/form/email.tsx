import { FieldValues } from 'react-hook-form'
import TextField, { TextFieldProps } from '@/components/share/form/text'

const EmailField = <FV extends FieldValues = FieldValues>({
    pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    ...rest
}: TextFieldProps<FV>) => (
    <TextField
        {...rest}
        pattern={pattern}
    />
)
export default EmailField
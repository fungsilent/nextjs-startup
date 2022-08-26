import { FieldValues } from 'react-hook-form'
import TextField, { TextFieldProps } from '@/components/share/form/text'

const PhoneField = <FV extends FieldValues = FieldValues>({
    pattern = /^[2-9][0-9]{7}$/,
    ...rest
}: TextFieldProps<FV>) => (
    <TextField
        {...rest}
        pattern={pattern}
    />
)
export default PhoneField
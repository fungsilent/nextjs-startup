import { FieldValues } from 'react-hook-form'
import TextField, { TextFieldProps } from '@/components/share/form/text'

const PhoneField = <FV extends FieldValues = FieldValues>({
    name,
    control,
    label,
    placeholder,
    required,
    pattern = /^[0-9]{8}$/i,
    layout,
    ...rest
}: TextFieldProps<FV>) => (
    <TextField
        {...rest}
        name={name}
        label={label}
        placeholder={placeholder}
        control={control}
        required={required}
        pattern={pattern}
        layout={layout}
    />
)
export default PhoneField
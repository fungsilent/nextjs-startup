import { FieldPath, FieldValues } from 'react-hook-form'
import TextField, { TextFieldProps } from '@/components/share/form/text'

const PhoneField = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
    name,
    control,
    label,
    placeholder,
    required,
    pattern = /^[0-9]{8}$/i,
    layout,
    ...rest
}: TextFieldProps<TFieldValues, TName>) => (
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
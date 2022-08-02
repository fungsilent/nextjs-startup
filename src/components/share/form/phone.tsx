import { Control } from 'react-hook-form'
import TextField from '@/components/share/form/text'

const PhoneField = (props: {
    name: string,
    control: Control,
    label?: string,
    placeholder?: string,
    required?: boolean,
    pattern?: RegExp,
    [restProps: string]: any
}) => {
    const {
        name,
        control,
        label,
        placeholder,
        required,
        // pattern = /^[23569][0-9]{7}$/i,
        pattern = /^[0-9]{8}$/i,
        ...rest
    } = props
    return (
        <TextField
            {...rest}
            name={name}
            label={label}
            placeholder={placeholder}
            control={control}
            required={required}
            pattern={pattern}
        />
    )
}
export default PhoneField
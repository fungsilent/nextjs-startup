import MuiOutlinedInput, { OutlinedInputProps } from '@mui/material/OutlinedInput'
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form'
import { setClassName } from '@/utils'
import styles from '@/styles/share/form/text.module.scss'

export type TextFieldProps<FV> = UseControllerProps<FV> & OutlinedInputProps & {
    label?: string
    placeholder?: string
    required?: boolean
    pattern?: RegExp
    layout?: 'default'
}

const TextField = <FV extends FieldValues = FieldValues>({
    name,
    control,
    label = '',
    placeholder = '',
    required = false,
    pattern = null,
    layout = 'default',
    ...rest
}: TextFieldProps<FV>) => (
    <Controller
        name={name}
        control={control}
        rules={{
            required,
            pattern,
        }}
        render={({
            field: { onChange, onBlur, value, name },
            fieldState: { error },
        }) => (
            <div className={setClassName([styles.text, styles[`layout-${layout}`]])} data-field={name}>
                {label ? (
                    <label>{label}</label>
                ) : null}
                <MuiOutlinedInput
                    {...rest}
                    name={name}
                    value={value ?? ''}
                    onChange={onChange}
                    onBlur={onBlur}
                    placeholder={placeholder}
                    required={required}
                    error={!!error}
                    fullWidth={true}
                    classes={{
                        root: styles.root,
                        notchedOutline: styles.outline,
                        focused: styles.focused,
                        error: styles.error,
                        input: styles.input,
                    }}
                />
            </div>
        )}
    />
)

export default TextField
import MuiOutlinedInput, { OutlinedInputProps } from '@mui/material/OutlinedInput'
import { Controller, FieldPath, FieldValues, UseControllerProps } from 'react-hook-form'
import { setClassName } from '@/utils'
import styles from '@/styles/share/form/text.module.scss'

export type TextFieldProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = UseControllerProps<TFieldValues, TName> & OutlinedInputProps & {
    label?: string
    placeholder?: string
    required?: boolean
    pattern?: RegExp
    layout?: 'default'
}

const TextField = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
    name,
    control,
    label = '',
    placeholder = '',
    required = false,
    pattern = null,
    layout = 'default',
    ...rest
}: TextFieldProps<TFieldValues, TName>) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={{
                required: required,
                pattern: pattern,
            }}
            render={({
                field: { onChange, onBlur, value, name },
                fieldState: { error },
            }) => {
                return (
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
                            }}
                            inputProps={{
                                sx: {
                                    padding: '12px 22px'
                                }
                            }}
                        />
                    </div>
                )}
            }
        />
    )
}
export default TextField
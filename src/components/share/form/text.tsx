import { styled } from '@mui/material/styles'
import OutlinedInput, { outlinedInputClasses } from '@mui/material/OutlinedInput'
import { Controller, Control } from 'react-hook-form'
import styles from '@/styles/share/form/text.module.scss'
import theme from '@/styles/export.module.scss'

const CustOutlinedInput = styled(OutlinedInput)(() => ({
    fontFamily: theme['font-family'],
    color: theme['color-primary'],
    backgroundColor: theme['color-while'],
    border: `1px solid ${theme['color-primary']}`,
    borderRadius: 0,
    padding: 0,
    [`& .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: 'unset',
        transition: 'border .1s ease-in',
    },
    [`&.${outlinedInputClasses.error} .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: theme['color-error'],
        borderLeftWidth: 6,
    },
    [`&.${outlinedInputClasses.focused}:not(.${outlinedInputClasses.error}) .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: theme['color-secondary'],
    },
}))

const TextField = (props: {
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
        label = '',
        placeholder = '',
        required = false,
        pattern = null,
        ...rest
    } = props
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
                    <div className={styles.text} data-field={name}>
                        {label ? (
                            <label>{label}</label>
                        ) : null}
                        <CustOutlinedInput
                            {...rest}
                            name={name}
                            value={value ?? ''}
                            onChange={onChange}
                            onBlur={onBlur}
                            placeholder={placeholder}
                            required={required}
                            error={!!error}
                            fullWidth={true}
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
import { ReactNode } from 'react'
import { styled } from '@mui/material/styles'
import Select, { selectClasses } from '@mui/material/Select'
import { outlinedInputClasses } from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import { Controller, Control } from 'react-hook-form'
import styles from '@/styles/share/form/select.module.scss'
import theme from '@/styles/export.module.scss'

const CustSelect = styled(Select)(() => ({
    fontFamily: theme['font-family'],
    color: theme['color-primary'],
    backgroundColor: theme['color-while'],
    border: `1px solid ${theme['color-primary']}`,
    borderRadius: 0,
    padding: 0,
    width: '100%',
    [`& .${selectClasses.select}`]: {
        padding: '12px 22px'
    },
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

const SelectField = (props: {
    name: string
    control: Control
    children?: ReactNode
    label?: string
    required?: boolean
    [restProps: string]: any
}) => {
    const {
        name,
        control,
        children,
        label = '',
        required = false,
        ...rest
    } = props
    return (
        <Controller
            name={name}
            control={control}
            rules={{
                required: required,
            }}
            render={({
                field: { onChange, value, name },
                fieldState: { error },
            }) => {
                return (
                    <div className={styles.select} data-field={name}>
                        {label ? (
                            <label>{label}</label>
                        ) : null}
                        <CustSelect
                            {...rest}
                            name={name}
                            value={value ?? ''}
                            onChange={onChange}
                            displayEmpty
                            required={required}
                            error={!!error}
                        >
                            {children}
                        </CustSelect>
                    </div>
                )}
            }
        />
    )
}
export default SelectField

export {
    MenuItem
}
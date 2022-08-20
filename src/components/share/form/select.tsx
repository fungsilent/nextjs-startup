import { ReactNode } from 'react'
import MuiSelect, { SelectProps } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import MuiOutlinedInput, { OutlinedInputProps } from '@mui/material/OutlinedInput'
import { Controller, FieldPath, FieldValues, UseControllerProps } from 'react-hook-form'
import { setClassName } from '@/utils'
import styles from '@/styles/share/form/select.module.scss'

export type SelectFieldProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = UseControllerProps<TFieldValues, TName> & SelectProps & {
    name: string
    label?: string
    required?: boolean
    children?: ReactNode
    layout?: 'default'
}

const Input = (props: OutlinedInputProps) => (
    <MuiOutlinedInput
        {...props}
        fullWidth={true}
        classes={{
            root: styles.root,
            notchedOutline: styles.outline,
            focused: styles.focused,
            error: styles.error,
            input: styles.input,
        }}
    />
)

const SelectField = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
    name,
    control,
    children,
    label = '',
    required = false,
    layout = 'default',
    ...rest
}: SelectFieldProps<TFieldValues, TName>) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={{
                required,
            }}
            render={({
                field: { onChange, value, name },
                fieldState: { error },
            }) => (
                <div className={setClassName([styles.select, styles[`layout-${layout}`]])} data-field={name}>
                        {label ? (
                            <label>{label}</label>
                        ) : null}
                        <MuiSelect
                            {...rest}
                            name={name}
                            value={value ?? ''}
                            onChange={onChange}
                            displayEmpty
                            required={required}
                            error={!!error}
                            autoWidth={true}
                            input={<Input/>}
                        >
                            {children}
                        </MuiSelect>
                    </div>
                )
            }
        />
    )
}
export default SelectField

export {
    MenuItem
}
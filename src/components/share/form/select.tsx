import { map } from 'lodash'
import MuiSelect, { SelectProps } from '@mui/material/Select'
import MuiMenuItem, { MenuItemProps as MuiMenuItemProps } from '@mui/material/MenuItem'
import MuiOutlinedInput, { OutlinedInputProps } from '@mui/material/OutlinedInput'
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form'
import { setClassName } from '@/utils'
import styles from '@/styles/share/form/select.module.scss'

type SelectList = {
    value: MuiMenuItemProps['value']
    content: ReactNode
    props?: Omit<MuiMenuItemProps, 'value'>
}[]

type SelectFieldProps<FV extends FieldValues = FieldValues> = UseControllerProps<FV> & SelectProps & Children & {
    name: string
    label?: string
    required?: boolean
    list?: SelectList
    layout?: 'default'
}
type MenuItemProps = MuiMenuItemProps & {
    layout?: 'default'
}

export const MenuItem = ({
    children,
    layout = 'default',
    ...rest
}: MenuItemProps) => (
    <MuiMenuItem
        {...rest}
        classes={{
            root: styles.item,
            selected: styles.selected,
        }}
    >
        {children}
    </MuiMenuItem>
)

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

const SelectField = <FV extends FieldValues = FieldValues>({
    name,
    control,
    children,
    list,
    label = '',
    required = false,
    layout = 'default',
    ...rest
}: SelectFieldProps<FV>) => {
    let items: ReactNode = children
    if (list) {
        items = map(list, item => (
            <MenuItem
                {...item.props}
                value={item.value}
            >
                {item.content}
            </MenuItem>
        ))
    }
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
                        MenuProps={{
                            classes: {
                                root: setClassName([styles.menu, styles[`layout-${layout}`]]),
                                paper: styles.paper,
                                list: styles.list
                            }
                        }}
                    >
                        {items}
                    </MuiSelect>
                </div>
            )}
        />
    )
}

export default SelectField
import _find from 'lodash/find'
import MuiOutlinedInput, { OutlinedInputProps } from '@mui/material/OutlinedInput'
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form'
import LoaderIcon from '@/components/share/icon/loader'
import SuccessIcon from '@/components/share/icon/success'
import ErrorIcon from '@/components/share/icon/error'
import { setClassName } from '@/utils'
import styles from '@/styles/share/form/text.module.scss'

export type TextFieldProps<FV> = UseControllerProps<FV> & OutlinedInputProps & StatusProps & {
    label?: string
    placeholder?: string
    required?: boolean
    pattern?: RegExp
    layout?: 'default' | 'rounded'
}

type StatusProps = {
    loading?: boolean
    success?: boolean
    error?: boolean
}

const Status = ({
    loading,
    success,
    error,
}: StatusProps) => {
    const hasStatus = _find([
        [error, ErrorIcon],
        [success, SuccessIcon],
        [loading, LoaderIcon],
    ], v => v[0])
    if (!hasStatus) return null
    const Component = hasStatus[1]
    return (
        <div className={styles.status}>
            <Component className={{ root: styles.icon }}/>
        </div>
    )
}

/* TODO: how to control form error and status error icon? */
const TextField = <FV extends FieldValues = FieldValues>({
    name,
    control,
    loading,
    success,
    error,
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
            fieldState: { error: formError },
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
                    error={!!formError}
                    fullWidth={true}
                    classes={{
                        root: styles.root,
                        notchedOutline: styles.outline,
                        focused: styles.focused,
                        error: styles.error,
                        input: styles.input,
                    }}
                    endAdornment={(
                        <Status
                            loading={loading}
                            success={success}
                            error={error}
                        />
                    )}
                />
            </div>
        )}
    />
)

export default TextField
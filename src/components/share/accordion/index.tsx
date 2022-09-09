import MuiAccordion, { AccordionProps as MuiAccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { setClassName } from '@/utils'
import styles from '@/styles/share/accordion/default.module.scss'

export type AccordionProps = NoClassName<MuiAccordionProps> & {
    header?: ReactNode
    icon?: ReactNode
    classes?: {
        root?: ClassName
        header?: ClassName
        content?: ClassName
    },
    layout?: 'default'
}

const Accordion = ({
    header,
    icon,
    children,
    layout = 'default',
    classes: {
        root: rootClassName,
        header: headerClassName,
        content: contentClassName,
    } = {},
    ...rest
}: AccordionProps) => {
    const renderIcon = icon ?? (
        <i className={styles.icon}>
            <FontAwesomeIcon icon={faAngleDown} fontSize={20}/>
        </i>
    )
    return (
        <MuiAccordion
            disableGutters
            {...rest}
            square={true}
            elevation={0}
            classes={{
                root: setClassName([styles.accordion, styles[`layout-${layout}`], rootClassName]),
                rounded: styles.rounded,
            }}
        >
            <MuiAccordionSummary
                expandIcon={renderIcon}
                classes={{
                    root: setClassName([styles.header, headerClassName]),
                    content: styles.headerContent
                }}
            >
                {header}
            </MuiAccordionSummary>
            <MuiAccordionDetails
                classes={{
                    root: setClassName([styles.content, contentClassName]),
                }}
            >
                {children}
            </MuiAccordionDetails>
        </MuiAccordion>
    )
}

export default Accordion
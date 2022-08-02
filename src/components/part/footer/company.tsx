import  _ from 'lodash'
import Text from '@/components/share/text'
import styles from '@/styles/part/footer.module.scss'

const Company = (props: {
    name: [string, string],
    address: [string, string],
    email: string,
    contact: [{ tel: string, text: string }, { tel: string, text: string }],
}) => {
    const { name, address, email, contact } = props
    const formatedContact = _.map(contact, item => `<a href='tel:${item.tel}'>${item.text}</a>`)
    return (
        <div className={styles.company}>
            <Text
                className={styles.companyName}
                isRow={true}
                text={name}
            />
            <div className={styles.companyInfo}>
                <div data-row='1'>
                    <div className={styles.addressBox}>
                        <Text
                            className={styles.addressHeader}
                            isRow={false}
                            text={[
                                'Address',
                                '地址'
                            ]}
                        />
                        <Text
                            className={styles.address}
                            isRow={false}
                            text={address}
                        />
                    </div>
                </div>
                <div data-row='2'>
                    <div className={styles.emailBox}>
                        <Text
                            className={styles.emailHeader}
                            isRow={false}
                            text={[
                                'Email',
                                '電郵'
                            ]}
                        />
                        <Text
                            className={styles.email}
                            isRow={false}
                            text={[
                                `<a href='mailto:${email}'>${email}</a>`,
                                ''
                            ]}
                        />
                    </div>
                    <div className={styles.contactBox}>
                        <Text
                            className={styles.contactHeader}
                            isRow={false}
                            text={[
                                'Contact',
                                '聯絡'
                            ]}
                        />
                        <Text
                            className={styles.contact}
                            isRow={false}
                            text={formatedContact}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Company
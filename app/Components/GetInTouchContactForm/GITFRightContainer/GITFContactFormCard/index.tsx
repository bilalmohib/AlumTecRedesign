import { useState } from 'react';

import FormInput from '@/app/Components/FormInput';

import styles from "./style.module.css";
import { FormInputType } from './types';

const GITFContactFormCard = () => {

    // States for form inputs
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCompany(e.target.value);
    }

    const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    }

    const formInputList: FormInputType[] = [
        {
            type: "text",
            placeholder: 'Name',
            value: name,
            handleValueChange: handleNameChange,
            className: 'w-full'
        },
        {
            type: "text",
            placeholder: 'Phone',
            value: phone,
            handleValueChange: handlePhoneChange,
            className: 'w-full'
        },
        {
            type: "email",
            placeholder: 'Email',
            value: email,
            handleValueChange: handleEmailChange,
            className: 'w-full'
        },
        {
            type: "text",
            placeholder: 'Company',
            value: company,
            handleValueChange: handleCompanyChange,
            className: 'w-full'
        },
        {
            type: "text",
            placeholder: 'Message',
            value: message,
            handleValueChange: handleMessageChange,
            className: 'w-full'
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h3 className={styles.form_header}>Get in Touch</h3>
                {formInputList.map((item, index) => {
                    return (
                        <div key={index} className='mt-[10px]'>
                            <FormInput
                                type={item.type}
                                placeholder={item.placeholder}
                                value={item.value}
                                handleValueChange={item.handleValueChange}
                                className={item.className}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default GITFContactFormCard;
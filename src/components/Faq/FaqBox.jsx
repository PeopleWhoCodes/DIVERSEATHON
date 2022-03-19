import React, { useState } from 'react'
import { ArrowDropDownOutlined, ArrowDropUpOutlined } from '@mui/icons-material'
import styles from './Faq.module.css'

const FaqBox = ({ text1, text2 }) => {
    const [visibility, setVisibility] = useState(false)
    return (
        <div className='faq__box'>
            <div
                className='top text-white filterDropDown text-xl font-medium min-h-10 py-2 px-2 flex items-center justify-between md:p0 cursor-pointer'
                onClick={() => setVisibility(!visibility)}
                style={{
                    borderBottomLeftRadius: visibility ? '0' : '',
                    borderBottomRightRadius: visibility ? '0' : '',
                }}
            >
                <div className='boxName mx-1 '>
                    <span>{text1}</span>
                </div>
                <div className='dropDownIcon text-white'>
                    {visibility ? (
                        <ArrowDropUpOutlined className='transition delay-100 ease-in' />
                    ) : (
                        <ArrowDropDownOutlined className='transition delay-100 ease-in' />
                    )}
                </div>
            </div>
            {visibility && (
                <div
                    className={`${styles.group_box_lower__open} p-2 text-TextPassageLight  h-max w-[inherit] delay-500 transition-all ease-in rounded-b-md pb-4`}
                >
                    <p className='whitespace-normal delay-500'>{text2}</p>
                </div>
            )}
        </div>
    )
}

export default FaqBox

import React, { useEffect } from 'react'
import './Button.css'
// import { useNavigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Button = ({
    text,
    transparent,
    more,
    navbar,
    hero,
    data,
    hidden,
    onClickEvent,
}) => {
    // const navigate = useNavigate()
    // useEffect(() => {
    //     console.log(data)
    // })
    const style = {
        buttonWrapper: `font-medium rounded-full text-xl
            transition hover:delay-200 hover:transition-color
            ${navbar ? 'px-5' : 'px-8'}
            ${more ? 'py-2' : 'py-2'}
            ${transparent ? 'transparent__button__' : 'gradient__button__'}
            ${
                hero
                    ? 'screen5:text-base screen5:px-6'
                    : 'screen3:py-2 screen3:px-10 screen5:text-lg screen5:px-0 screen5:w-full'
            }
            ${hidden ? 'hidden' : ''}
            ${navbar ? 'bg-white text-DarkButtonText' : ''}
            `,
    }
    const HandleClick = (e) => {
        e.preventDefault()
        if (onClickEvent) {
            onClickEvent()
        }
        // if (data?.hashLink) {
        //     navigate(`/#${data?.link}`)
        // }
        return
    }

    return (
        <>
            {data?.hashLink ? (
                <HashLink
                    smooth
                    to={`/#${data?.link}`}
                    className={style.buttonWrapper}
                    style={{
                        background: navbar ? 'white' : '',
                    }}
                >
                    {text}
                </HashLink>
            ) : (
                <button
                    className={style.buttonWrapper}
                    onClick={(e) => HandleClick(e)}
                >
                    {text}
                </button>
            )}
        </>
    )
}

export default Button

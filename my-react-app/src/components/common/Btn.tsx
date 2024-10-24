import React from 'react'

interface btninput {
    text: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
    disabled: boolean;
    outline:boolean;
    customClasses:string
    required: boolean;
    btntype:string
  }
const IconBtn = ({
    text,
    onClick,
    children,
    disabled,
    outline=false,
    customClasses,
    btntype
}:btninput) => {
  return (
    <button
    disabled={disabled}
    onClick={onClick}
    type={btntype}
    // fluid={fluid ? fluid:""}
    className={`flex items-center ${
          outline ? "border border-yellow-50 bg-transparent" : `${customClasses ? `${customClasses}`:" bg-yellow-300"}`
        } cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold ${customClasses}`}
    >
        {
            children ? (<div className='flex items-center justify-center gap-2'>
                <span>
                    {text}
                </span>
                {children}
            </div>) : (text)
        }
    </button>
  )
}

export default IconBtn
import React from 'react'

const buttonVariants = {
    base: "font-bold transition-all flex items-center justify-center",
    neon: "hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] ",
    filter: "bg-indigo-950 border-indigo-950 text-gray-300 px-2 py-0.5 border-2 rounded-full",
    filterActive: "bg-indigo-800 border-amber-50 text-white px-2 py-0.5 border-2 rounded-full",
    primary: "bg-indigo-800 text-white hover:bg-indigo-600 transition-all px-6 py-2.5 rounded-full",
    secondary: "bg-transparent border border-gray-100 text-gray-100 hover:bg-indigo-800 transition-all px-6 py-2.5 rounded-full",
}


const ActionButton = ({children, onClick, variant, className, hasNeon}) => {

    const getVariantClasses = buttonVariants[variant] || "";

    const neonEffect = hasNeon ? buttonVariants.neon : "";

    const finalClasses = `${buttonVariants.base} ${getVariantClasses} ${neonEffect} ${className}`;


    return (
        <>
            <button className={finalClasses} onClick={onClick}>
                {children}
            </button>
        </>
    )
}

export default ActionButton
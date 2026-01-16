import React from 'react'

const buttonVariants = {
    base: "px-6 py-2.5 rounded-full font-bold text-sm transition-all select-none flex items-center justify-center gap-2",
    neon: "hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] ",
    filter: "bg-indigo-950 border-indigo-950 text-gray-300",
    filterActive: "bg-indigo-800 text-white border border-amber-50",
    primary: "bg-indigo-800 text-white hover:bg-indigo-600 transition-all",
    secondary: "bg-transparent border border-gray-100 text-gray-100 hover:bg-indigo-800 transition-all",
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
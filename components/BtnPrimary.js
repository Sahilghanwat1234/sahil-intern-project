import React from 'react'

const BtnPrimary = (props) => {
    return (
        <button {...props} className="text-red-50 bg-red-500 text-sm px-4 py-2 border border-red-500 rounded-md hover:bg-red-600/90 transition-colors focus:outline-none focus:ring focus:ring-red-300 focus:ring-offset-1">
            {props.children}
        </button>
    )
}

export default BtnPrimary;
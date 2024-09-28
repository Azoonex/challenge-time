import React from "react"

function Button({
    children,
    ...props
}:{
    children:React.ReactNode
}) {
  return (
      <button {...props} className="bg-zinc-800 rounded-md p-3 text-white hover:bg-zinc-700">
         {children}
      </button>
  )
}

export default Button
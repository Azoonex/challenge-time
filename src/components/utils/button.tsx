import React from "react"

function Button({
    children,
    ...props
}:{
    children:React.ReactNode
}) {
  return (
      <button {...props} className="bg-zinc-800 text-sm rounded-md px-3 py-1 ">
         {children}
      </button>
  )
}

export default Button
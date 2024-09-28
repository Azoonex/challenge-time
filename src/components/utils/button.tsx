import React from "react"

function Button({
    children,
    style,
    ...props
}:{
    children:React.ReactNode,
    style? : string,
}) {
  return (
      <button {...props} className={`${style} " rounded-md p-3 bg-zinc-800 text-white  hover:bg-zinc-700`}>
         {children}
      </button>
  )
}

export default Button
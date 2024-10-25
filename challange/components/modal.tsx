import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'



const Modal = forwardRef(function Modal(props, ref) {
    const modalRef = useRef(null)

    useImperativeHandle(ref, () => {
       return {
            open(){
                modalRef.current.open()
            },
            close(){
                modalRef.current.close()
            }
        }
    })

    return createPortal((
        <dialog ref={modalRef} className='flex flex-col gap-2 '>
            <h3 className='font-bold'>remove Project</h3>
            <h4 className='font-light'>remove takes for you</h4>
        </dialog>
    ), document.getElementById('modal'))
})

export default Modal
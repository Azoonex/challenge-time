import { ComponentProps } from "react";
import { forwardRef } from "react";

interface IconInputProps {
    type: ComponentProps<typeof Input>['type'];
    name: string,
    label: string,
    placeholder: string,
    area: Boolean
}

const Input = forwardRef(function InputFun(props: IconInputProps, ref) {
    const { label, name, placeholder, type, area } = props
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={name} >
                {label}
            </label>
            {
                area ? <textarea
                    className={areaStyle}
                    ref={ref}
                    placeholder={placeholder}
                    name={name}
                />
                    : <input
                        className={inputStyle}
                        ref={ref}
                        type={type}
                        name={name}
                        placeholder={placeholder}
                    />
            }
        </div>
    )
})


export default Input

// style
const inputStyle = "rounded-md px-3 py-1 border border-gray-200"
const areaStyle = "rounded-md px-3 py-1 border border-blue-200"
import { forwardRef, useImperativeHandle, useRef,useState } from "react";

export default function App() {
    const ref = useRef();

    return (
        <div>
            <ChildComponent ref={ref} />
            <span className="cursor-pointer px-3 py-1 bg-red-300" onClick={()=> ref.current.clickOn()}>
                is click
            </span>
        </div>
    );
}

const ChildComponent = forwardRef((props, ref) => {
    const buttonRef = useRef();
    const [isClick,setIsCLick] = useState(false)

    useImperativeHandle(ref, () => ({
        clickOn() {
            setIsCLick((prev)=> {
                return !prev
            })
        },
    }));

    return (
        <div>
            <button ref={buttonRef} className="px-3 py-1 rounded-md bg-blue-200" type="text" onClick={()=> setIsCLick(!isClick)}>
                    {isClick && "isCLick"}
            </button>
        </div>
    );
});

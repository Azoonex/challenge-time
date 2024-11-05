import { useImperativeHandle, useRef, forwardRef, useState } from "react";

export default function App() {
    const childRef = useRef();

    return (
        <div className='flex gap-5'>
            <Child ref={childRef} />
            <button
                className='p-5 p-2 rounded-md bg-blue-300'
                onClick={() => childRef.current.increment()}>
                handleclick
            </button>
            <button
                className='p-5 p-2 rounded-md bg-red-300'
                onClick={() => childRef.current.decrement()}>
                handleclick
            </button>
        </div>
    );
}

const Child = forwardRef((props, ref) => {
    const [count, setCount] = useState(0);

    useImperativeHandle(ref, () => ({
        increment() {
            setCount((prev) => {
                return prev + 1;
            });
        },
        decrement() {
            setCount((prev) => {
                return prev - 1;
            });
        },
    }));

    return <div>{count}</div>;
});

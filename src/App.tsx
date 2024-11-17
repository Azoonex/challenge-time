// import React, { useReducer } from "react";

// const initialState = { count: 0 };

// function reducer(state, action) {
//     switch (action.type) {
//         case "increment":
//             return { count: state.count + 1 };
//         case "decrement":
//             return { count: state.count - 1 };
//         default:
//             return state;
//     }
// }

// function Counter() {
//     const [state, dispatch] = useReducer(reducer, initialState);

//     return (
//         <div>
//             <p>Count: {state.count}</p>
//             <button onClick={() => dispatch({ type: "increment" })}>+</button>
//             <button onClick={() => dispatch({ type: "decrement" })}>-</button>
//         </div>
//     );
// }

import React, { useLayoutEffect, useRef } from "react";

function Box() {
    const boxRef = useRef();

    useLayoutEffect(() => {
        console.log("Box size:", boxRef.current.getBoundingClientRect());
    });

    return (
        <div
            ref={boxRef}
            style={{ width: 100, height: 100, background: "red" }}
        />
    );
}

import React, { useState, useTransition } from "react";

function App() {
    const [isPending, startTransition] = useTransition();
    const [count, setCount] = useState(0);

    const handleClick = () => {
        startTransition(() => {
            setCount((prev) => prev + 1);
        });
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
            {isPending && <p>Loading...</p>}
        </div>
    );
}

import React, { useState, useDeferredValue } from "react";

function App() {
    const [text, setText] = useState("");
    const deferredText = useDeferredValue(text);

    return (
        <div>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <p>Deferred: {deferredText}</p>
        </div>
    );
}

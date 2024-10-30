import { useEffect, useRef, useState } from "react";
import Body from "./components/body";
import Navbar from "./components/nvbar";
import QuastionTimer from "./components/quastionTimer";

function App() {
    // radio

    const [currentRadioValue, setCurrentRadioValue] = useState();
    const [inputCheckboxValue, setInCheckBoxValue] = useState < number[] | null > ([]);

    const handleRadioChange = (e) => {
        if (e.target.value === currentRadioValue) {
            console.log(
                "yese",
                "e.target.value " + e.target.value,
                "currentRadioValue  " + currentRadioValue
            );
        } else {
            console.log(
                "no",
                "e.target.value " + e.target.value,
                "currentRadioValue  " + currentRadioValue
            );
            setCurrentRadioValue(e.target.value);
        }
    };


    function offRadio(value: string) {
        if (value === currentRadioValue) {
            setCurrentRadioValue("");
        }
    }

    // checkted

    useEffect(() => {
        console.log(inputCheckboxValue)
    }, [inputCheckboxValue])

    let myArray = [1, 2, 3]; // 1 + 2 + 3

    return (
        <div>
            <div>
                <input
                    id="radio-item-1"
                    name="radio-item-1"
                    type="radio"
                    value="radio-1"
                    onClick={(e) => offRadio(e.target.value)
                    }
                    onChange={handleRadioChange}
                    checked={currentRadioValue === "radio-1"}
                />
                < label htmlFor="radio-item-1" > Radio Item 1 </label>
            </div>
            < div >
                <input
                    id="radio-item-2"
                    name="radio-item-2"
                    type="radio"
                    value="radio-2"
                    onClick={(e) => offRadio(e.target.value)}
                    onChange={handleRadioChange}
                    checked={currentRadioValue === "radio-2"}
                />
                < label htmlFor="radio-item-2" > Radio Item 1 </label>
            </div>

            {/* checked */}

            {Array.isArray(myArray) && myArray.length > 0 && myArray.map(itme => (
                <input type="checkbox" value={itme} onChange={(e) => {
                    if (e.target.value !== null) {

                        if (e.target.value === inputCheckboxValue.find(i => i === e.target.value)) {
                            setInCheckBoxValue(() => {
                                return inputCheckboxValue.filter(i => i !== e.target.value)
                            })
                        } else {
                            setInCheckBoxValue((prev) => {
                                let newVlaue = e.target.value
                                return [...prev, newVlaue]
                            })
                        }

                    }
                }} />
            ))}

            <h1 className="text-3xl text-blue-500">
                {inputCheckboxValue !== null && inputCheckboxValue.reduce((accumulator, current) => Number(accumulator) + Number(current), 0)}
            </h1>
        </div>
    );
}

export default App;

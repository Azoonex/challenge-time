import React, { Children, useEffect, useMemo, useState } from "react";

export default function App() {
    const [open, setOpen] = useState(false);
    const [value_input_search, setValue_input_search] = useState("");
    const [finde, setfindesSearch] = useState([]);

    const data = [
        {
            id: 1,
            name: "react",
        },
        {
            id: 2,
            name: "vue",
        },
        {
            id: 3,
            name: "javascript",
        },
        {
            id: 4,
            name: "typescript",
        },
        {
            id: 5,
            name: "javascrpit",
        },
        {
            id: 6,
            name: "java",
        },
        {
            id: 7,
            name: "joson",
        },
        {
            id: 8,
            name: "jango",
        },
    ];

    function handleChange(e) {
        const value = e.target.value;
        setValue_input_search(value);
        let newValue = [];
        newValue = data.map((i) => i.name.includes(value));

        if (newValue.length > 0) {
            newValue.map((i, index) => {
                if (i) {
                    setfindesSearch([...finde, data[index].name]);
                }
            });
        }
        if (value.length === 0) {
            setfindesSearch([]);
        }
    }

    const filteredUsers = useMemo(
        (item, pos) => {
            return finde.filter((item, pos) => finde.indexOf(item) == pos);
        },
        [value_input_search]
    );

    useEffect(() => {
        console.log(finde);
    }, [finde]);

    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <div className='w-3/5 relative'>
                <button
                    onClick={() => setOpen(!open)}
                    className='px-2 py-1 rounded-lg bg-blue-600 hover:bg-blue-400 text-white w-full'>
                    سرچ کردنِ
                </button>

                {open && (
                    <div className=''>
                        <input
                            value={value_input_search}
                            onChange={(e) => handleChange(e)}
                            type='text'
                            dir='rtl'
                            className='border rounded-md w-full px-3'
                            placeholder='سرچ کنید ...'
                        />
                    </div>
                )}

                <ul className='w-full h-20 bg-blue-500 rounded-xl'>
                    {filteredUsers && filteredUsers.map((i) => <li>{i}</li>)}
                </ul>
            </div>
        </div>
    );
}

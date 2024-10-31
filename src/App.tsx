import { useEffect, useState } from "react"

const myArray = ['name', 'age', 'items', 'content']

export default function App() {

    const [open, setOpen] = useState(false)
    const [valueinputSearch, setvalueinputSearch] = useState("")
    const [finalSearchItme, setvlueFinalSearchitme] = useState([])

    useEffect(() => {
        if (valueinputSearch) {
            let item = []
            let valueSearch = myArray.map((i) => {
                item.push(i.lastIndexOf(valueinputSearch))
            })

            setvalueinputSearch((prev) => {
                return [...prev, item]
            })

        }
    }, [valueinputSearch])


    return (
        <div className="p-3">
            <div className="w-1/2 bg-gray-200 relative object-bottom">
                <input
                    type="text"
                    className="border w-full"
                    onFocus={() => setOpen(true)}
                    onBlur={() => setOpen(false)}
                    value={valueinputSearch}
                    onChange={(e) => setvalueinputSearch(e.target.value)}
                />
                <div className="absolute top-full  h-40 overflow-auto bg-red-200 w-full">
                    {
                        open && <li>{finalSearchItme}</li>
                    }
                </div>
            </div>
        </div>
    )
} 
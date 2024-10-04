import { useEffect, useState } from "react"
import { typeNewProject } from "../App"
import Button from "./utils/button"

function AllPojectUi(props) {
    let allCheckBox = [1, 2, 3]
    const [checkBox, setCheckBox] = useState < number[] > ([])

    const { projects, setPorject } = props
    useEffect(() => {
        console.log(projects)
    }, [projects])

    function removeProject(id: number) {
        setPorject(prev => {
            return {
                ...prev,
                allPoject: prev.allPoject.filter(i => i.id !== id)
            }
        }
        )
    }

    return (
        <div className="flex flex-col gap-4">
            <ul className="my-4 flex flex-col gap-8 list-decimal text-white">
                {
                    projects.allPoject && projects.allPoject.length > 0 && projects.allPoject.map((i, index) =>
                        <li className=" text-xs flex gap-3 items-center justify-between">
                            {i.name.toUpperCase()}
                            <Button onClick={() => removeProject(i.id)}>
                                Remove
                            </Button>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default AllPojectUi
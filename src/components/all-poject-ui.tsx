import Button from "./utils/button"

function AllPojectUi(props) {

    const { projects, setPorject, setChooseProject } = props


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
                            <span onClick={() => setChooseProject(i.id)} className="px-3 py-2 bg-red-500 rounded-lg">
                                {i.name.toUpperCase()}
                            </span>
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
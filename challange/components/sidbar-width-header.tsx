import Button from "./utils/button"

function SidbarWidthHeader({ handleAddProject }: {
  handleAddProject: () => void
}) {
  return (
    <aside className="flex flex-col gap-3">
      <div className="text-white">
        You Porject
      </div>
      <Button onClick={handleAddProject}>
        Add Project +
      </Button>
    </aside>
  )
}

// create 185

export default SidbarWidthHeader
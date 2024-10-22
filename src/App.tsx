import { useCallback, useEffect, useState } from "react"
import SidbarWidthHeader from "./components/sidbar-width-header"
import Button from "./components/utils/button";
import Container from "./components/container";
import AllPojectUi from "./components/all-poject-ui";

export interface typeNewProject {
  name: string;
  id: Date;
  comment: string;
  des: string;
}


interface typeAll {
  addproject?: typeNewProject;
  allPoject: typeNewProject[];
}



function App() {

  const [project, setPorject] = useState<typeAll>({
    addproject: undefined,
    allPoject: []
  });
  const [chooseProject, setChooseProject] = useState()
  const [selectProject, setSelectedProject] = useState()

  function handleAddProject() {
    setPorject(prevState => {
      return {
        ...prevState,
        addproject: true
      }
    })
  }


  function handleAddNewProject(newPoject: typeNewProject) {
    setPorject(previousState => {
      return {
        ...previousState,
        allPoject: [...previousState.allPoject, newPoject],
      }
    })
  }

  const changeChooseProject = useCallback(() => {
    if (chooseProject) setSelectedProject(project.allPoject.find(item => item.id === chooseProject))
  }, [chooseProject])

  useEffect(() => {
    changeChooseProject()
    console.log("getPject" + JSON.stringify(selectProject))
  }, [chooseProject, selectProject])


  return (
    <section className="grid grid-cols-6 h-screen">
      <div className="col-span-2 size-full rounded-r-xl bg-zinc-900 p-3 flex-col-3">
        <SidbarWidthHeader handleAddProject={handleAddProject} />
        <AllPojectUi setChooseProject={setChooseProject} projects={project} setPorject={setPorject} />
      </div>
      <div className="col-span-4 flex items-center justify-center">
        {!project.addproject ?
          <div className="text-red-500 font-bold ">You Takse Project it Empty !
            <Button style="ml-3" onClick={handleAddProject}>
              add project +
            </Button>
          </div>

          : selectProject ? <div>
            {selectProject?.name}
          </div> : <Container handleAddNewProject={handleAddNewProject} />}

      </div>
    </section>
  )
}

export default App
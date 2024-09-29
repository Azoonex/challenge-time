import { useEffect, useState } from "react"
import Container from "./components/Container"
import SidbarWidthHeader from "./components/sidbar-width-header"
import Button from "./components/utils/button";

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
  const [project, setPorject] = useState < typeAll > ({
    addproject: undefined,
    allPoject: []
  });

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

  useEffect(()=>{
    console.log(project.allPoject)
  },[project])

  return (
    <section className="grid grid-cols-6 h-screen">
      <div className="col-span-2 size-full rounded-r-xl bg-zinc-900 p-3 flex-col-3">
        <SidbarWidthHeader handleAddProject={handleAddProject} />
      </div>
      <div className="col-span-4 flex items-center justify-center">
        {!project.addproject ? <div className="text-red-500 font-bold ">You Takse Project it Empty !
          <Button style="ml-3" onClick={handleAddProject}>
            add project +
          </Button>
        </div> : <Container handleAddNewProject={handleAddNewProject} />}

      </div>
    </section>
  )
}

export default App
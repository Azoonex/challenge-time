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

  const [project, setPorject] = useState < typeAll > ({
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
  }, [chooseProject, selectProject])

  useEffect(() => {
    if (project.allPoject.length === 0) {
      setSelectedProject((prev) => {
        if (prev) prev.name = ""
      })

    } else {
      console.log('this is full')
    }
  }, [chooseProject, project])




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

// function ButtonClick({ onclick }) {
//     return <button onClick={onclick}>click</button>;
// }

// export default function App() {
//     const [count, setCount] = useState(0);
//     const handleClick = useCallback(() => {
//         setCount(count + 1);
//     }, []);

//     return (
//         <div>
//             <h1>count = {count}</h1>
//             <ButtonClick onclick={handleClick} />
//         </div>
//     );
// }

// import { useRef } from "react";
// import { useState } from "react";

// export default function App() {
//     const [startGame, setStartGame] = useState(false);
//     const [guessValue, setGuessValue] = useState("");
//     const [EndGame, setEndGame] = useState("pendding");

//     function handleClick() {
//         setStartGame((prev) => !prev);
//         setGuessValue(prompt("guessValue"));
//         const mathRadndomId = Math.random() * 20;
//         if (mathRadndomId && mathRadndomId.toFixed() === valueInput) {
//             setStartGame(false);
//             setEndGame((prev) => (prev = "win"));
//         }
//     }

//     return (
//         <div className='p-3'>
//             <button
//                 className='bg-zinc-400 px-2 py-1 rounded-lg hover:bg-zinc-300'
//                 onClick={handleClick}>
//                 START GAME
//             </button>
//             {EndGame && EndGame === "pendding" ? undefined : EndGame ===
//               "win" ? (
//                 <span className='bg-black size-40 rounded-md text-5xl text-yellow-500'>
//                     you win
//                 </span>
//             ) : (
//                 <span className='bg-white size-40 rounded-md text-5xl text-red-500'>
//                     you lose
//                 </span>
//             )}
//         </div>
//     );
// }


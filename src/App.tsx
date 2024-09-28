import { useState } from "react"
import Container from "./components/Container"
import SidbarWidthHeader from "./components/sidbar-width-header"
import Button from "./components/utils/button";

function App() {
  const [project, setPorject] = useState({
    addproject: undefined,
    allPoject: []
  });
  return (
    <section className="grid grid-cols-6 h-screen">
      <div className="col-span-2 size-full rounded-r-xl bg-zinc-900 p-3 flex-col-3">
        <SidbarWidthHeader />
      </div>
      <div  className="col-span-4 flex items-center justify-center">
        {!project.addproject ? <div className="text-red-500 font-bold ">You Takse Project it Empty !
          <Button style="ml-3" onClick={()=>{
            setPorject(prevState => {
              return {
                ...prevState,
                addproject : true
              }
            })
          }}>
            add project +
          </Button>

        </div> : <Container />}

      </div>
    </section>
  )
}

export default App
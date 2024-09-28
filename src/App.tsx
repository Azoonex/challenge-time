import SidbarWidthHeader from "./components/sidbar-width-header"

function App() {
  return (
    <section className="grid grid-cols-6 h-screen">
      <div className="col-span-2 size-full rounded-r-xl bg-zinc-900 p-3 flex-col-3">
        <SidbarWidthHeader />
      </div>
      <div>
        contianer
      </div>
    </section>
  )
}

export default App
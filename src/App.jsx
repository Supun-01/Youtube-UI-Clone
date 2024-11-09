import Card from "./Card"
import Test from "./test/test"
import NavBar from "./NavBar"
import SideMenu from "./SideMenu"

function App() {
  return (
    <div className="mx-4">
      <NavBar />
      <div className="flex">
        <div className="w-[350px]  h-screen overflow-y-scroll">
          <SideMenu />
        </div>
        <div className="w-full">
          <Card />
        </div>
      </div>

    </div>
  )
}

export default App
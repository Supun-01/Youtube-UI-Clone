import Card from "./Card"
import Test from "./test/test"
import NavBar from "./NavBar"
import SideMenu from "./SideMenu"
import TagSection from "./TagSection"

function App() {
  document.title = "YouTube"
  return (
    <div className="mx-4">
      <NavBar />
      <div className="flex">
        {/* Fixed SideMenu */}
        <div className="w-2/6 lg:w-2/12 h-screen overflow-y-auto">
          <SideMenu />
        </div>

        {/* Scrollable Content Area for TagSection and Card */}
        <div className="w-4/6 lg:w-10/12 h-screen overflow-y-scroll">
          <TagSection />
          <Card />
        </div>
      </div>
    </div>

  )
}

export default App
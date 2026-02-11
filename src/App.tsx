import Home from "./pages/Home"
import ClickSpark from "./ReactBits/ClickSpark"

function App() {

  return (
    <>
  <ClickSpark
      sparkColor='black'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <Home />
  </ClickSpark>
    </>
  )
}

export default App

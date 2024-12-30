import './App.css'
import HookValidator from "./Components/hookValidator.jsx";

function App() {
  return (
      <>
        <HookValidator query={'(max-width: 768px)'} true={'Це мобільна версія додатку'} false={'Це десктопна версія додатку'}></HookValidator>
        <HookValidator query={'(max-height: 400px)'} true={'Екран занадто вузький'} false={'Екран має нормальну ширину'}></HookValidator>
      </>
  )
}

export default App

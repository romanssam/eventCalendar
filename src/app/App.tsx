import './styles/App.css'
import {AppRouter} from "./Providers/router/ui/AppRouter.tsx";
import {Sidebar} from "../widgets/Sidebar";
function App() {
  return (
    <>
     <div className="wrapper" data-theme={'light'}>
         <Sidebar/>
         <AppRouter/>
     </div>
    </>
  )
}

export default App

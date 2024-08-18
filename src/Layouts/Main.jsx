import { BackgroundColorChanger } from "../Pages/BackgroundChanged";
import { Calculadora } from "../Pages/Calculadora";
import { Route, Routes } from "react-router-dom";
import { TaskInput } from "../Pages/TaskList";
import { Contact } from "../Pages/Contact";
import { NameInput } from '../Pages/Start';
import '../assets/css/index.css'

export const Main = () => {
  return (
    <>
      <Routes>
          <Route path="/start" element={<NameInput />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calculadora" element={<Calculadora titulo="Basic Calculator" />} />
          <Route path="/backgroundChanger" element={<BackgroundColorChanger />} />
          <Route path="/task-list" element={<TaskInput />} />
      </Routes>
    </>
  )
}

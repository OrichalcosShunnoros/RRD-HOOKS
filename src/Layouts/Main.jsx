import { Route, Routes } from "react-router-dom";
import { Contact } from "../Pages/Contact";
import { Calculadora } from "../Pages/Calculadora";
import { NameInput } from '../Pages/Start';
import { BackgroundColorChanger } from "../Pages/BackgroundChanged";
import { TaskInput } from "../Pages/TaskList";

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

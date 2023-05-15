// https://www.youtube.com/watch?v=czvSZqnpTHs

import { revalidatePath } from "next/cache";
import AddButton from "./AddButton";

const tarefas: string[] = ["Aprenda React"]

export default function ServerAction(){

    async function addTarefa(tarefa: string) {
        "use server";
        tarefas.push(tarefa);
        revalidatePath("/serverAction")
    }

    return(
        <div>
            <h1>Tarefas</h1>
         
            <div>
       
               <AddButton addTodo={addTarefa}/>
            </div>
            <ul>
                {tarefas.map((todo, i)=>(
                    <li key={i}>{todo}</li>
                ))}
            </ul>
        </div>
    )
}
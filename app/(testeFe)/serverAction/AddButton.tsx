"use client"
import { useRef } from "react"

export default function AddButton({
    addTodo,
}: {
    addTodo: (todo:string)=> Promise<void>;
}) {
    const todoRef = useRef<HTMLInputElement>(null);
    return (
        <div>
    <input type="text" name="tarefa" className="border border-gray-300" />
    <button onClick={async()=>{ await addTodo(todoRef.current!.value)}}  className='bg-blue disabled-gray-400 inline-flex'>
        Add Tarefa
    </button>
    </div>
        )
}


function Todo ({task, removeTask, completeTask}){
    const msg = "Você possui data(s) vencida(s)";
return(
    <>
     <div className='todo'>
                    <div className='todo-task'
                    style={{textDecoration: task.isCompleted ? "line-through" : ""}}
                    >
                        <p>{task.text}</p>
                        <p className='category'>({task.category})</p>
                        <p className='date'>Início:{task.dateStart}</p>
                        <p className='date'>Termina em:{task.dateEnd}</p>
                    </div>
                    <div className='btns-action'>
                        <button onClick={() => completeTask(task.id)}>Completar</button>
                        <button onClick={() => removeTask(task.id)}>Deletar</button>
                    </div>

                </div>
    </>
)
}
export default Todo;
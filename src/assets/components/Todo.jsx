import './Todo.css'
import check from '../check.png';
import deletetask from '../delete.png';

function Todo ({task, removeTask, completeTask}){   
return(
    <>
     <div className='todo-task-all'>
                    <div className='todo-task'
                    style={{textDecoration: task.isCompleted ? "line-through" : ""}}
                    >
                        <p className='text'>{task.text}</p>
                        <p className='category'>({task.category})</p>
                        <p className='date'>Início:{task.dateStart}</p>
                        <p className='date'>Término:{task.dateEnd}</p>
                    </div>
                    <div className='btns-action'>
                        <button onClick={() => completeTask(task.id)}><img src={check} alt='check'/></button>
                        <button onClick={() => removeTask(task.id)}><img src={deletetask} alt='delete'/></button>
                    </div>

                </div>
    </>
)
}
export default Todo;
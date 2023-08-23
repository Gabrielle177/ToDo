import { useState } from "react";

function TodoForm ({addTodo}){
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");
    const [dateStart, setDateStart] = useState("");
    const [dateEnd, setDateEnd] = useState("");
    
    const handleDateStart = (event) => {
        const newDate = event.target.value;
        setDateStart(newDate);
      };

    const handleDateEnd = (event) => {
        const newDate = event.target.value
        setDateEnd(newDate);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        if(!value || !category){
           return "Prencha os campos"
        }
        addTodo(value, category, dateStart, dateEnd);
        setValue("");
        setCategory(""); 
        setDateStart("");
        setDateEnd("");

    }

    return(
        <>
         <form className='form-task'
                onSubmit={handleSubmit} >

                <label htmlFor='projeto'> </label>
                <input 
                name="projeto"
                placeholder="Digite a tarefa aqui"
                type="text"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                />

                <select
                onChange={(event) => setCategory(event.target.value)}
                value={category} >
                    <option value="">Selecione uma categoria</option>
                    <option value="Estudos">Estudos</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Trabalho">Trabalho</option>
                </select>

                <div className="date">
                    <label htmlFor="dateStart">Início:</label>
                    <input
                        name="dateStart" 
                        type="date" 
                        value={dateStart}
                        onChange={handleDateStart}
                        />
                        
                    <label htmlFor="dateEnd">Termina em:</label>
                    <input
                        name="dateEnd" 
                        type="date"
                        value={dateEnd}
                        onChange={handleDateEnd}
                        />
                        
                </div>

                <button className='btn-task' type="submit">Criar tarefa</button>

            </form>
        </>
    )
    }
    export default TodoForm;
import React from 'react';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './TodoForm.css';

function TodoForm ({addTodo}){
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");
    const [dateStart, setDateStart] = useState("");
    const [dateEnd, setDateEnd] = useState("");
    const [currentDate, setCurrentDate] = useState(new Date());

    const handleDateStart = (event) => {
        const newDate = event.target.value;
        setDateStart(newDate);
      };

    const handleDateEnd = (event) => {
        const newDate = event.target.value
        setDateEnd(newDate);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault()
        if(!value || !category){
           return "Prencha os campos"
        }
        addTodo(value, category, dateStart, dateEnd, currentDate);
        setValue("");
        setCategory(""); 
        setDateStart("");
        setDateEnd("");
        setCurrentDate("");
    }
    const notify = () => {
        if (new Date(dateEnd).getTime() < new Date(currentDate).getTime()){
            toast.warn('Você possui data(s) expiradas!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
    console.log(currentDate);
    }
        if(dateStart > dateEnd){
        toast.error('Revise a data!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
}
    return(
        <>
        <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
         <form className='form-task'
                onSubmit={handleSubmit} >
            <div className='container-form'>
            <h2>Criar Tarefa:</h2>

            <div className='task-category'>
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
                
                </div>
                <div className="date">
                    <label htmlFor="dateStart"></label>
                    <input
                        name="dateStart" 
                        
                        type="date" 
                        value={dateStart}
                        onChange={handleDateStart}
                        />
                        
                    <label htmlFor="dateEnd">a</label>
                    <input
                        name="dateEnd" 
                        type="date"
                        value={dateEnd}
                        onChange={handleDateEnd}
                        />
                        
                </div>
                
                    <button className='btn-task' 
                            type="submit"
                            onClick={notify}
                            >Criar Tarefa</button>
               
                </div>
            </form>
        </>
    )
    }
    export default TodoForm;
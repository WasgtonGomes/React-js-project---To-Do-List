import { useState} from 'react' /*O useState imporatndo vamso conseguir gerenciar o texto e categoria */

const TodoForm = ({addTodo}) => {
    const [value, setValue]= useState("");
    const [category, setCategory] = useState ("");

    const handleSubmit = (e) =>{ /*Essa dunção vai cuidar do sibmit do formulario */
        e.preventDefault(); /*Para que o formulario não seja enviado da maneira tradicional */
        if(!value|| !category) return; {/** validação para valores não julos */}
        //adicionar todo
        addTodo(value, category);
        setValue("");
        setCategory("");
        
    }
  return <div className="tdo-form">
    <h2>Criar tarefa: </h2>
    <form onSubmit={handleSubmit}> {/* A cada vez que o formulario for enviado ela vai disparar o handSumit */}
        <input 
        type="text" 
        placeholder="Digite o título"
        value={value}
        onChange={e => setValue(e.target.value)} /> {/* aqui vai funcionar quando o usuário digita; 
         Au mudar o falor aqui eu vou ter uma função sendo execultada  que carrega todos os dados do evento atual
        setValue: função que muda o estato de value;  e. : é o evento ; target: é o imput ; value: que é o valor do imput*/}
        
        <select  value={category} /* Com isso eu consigo manipular os valores com o react*/onChange={e => setCategory(e.target.value)} > {/*Aqui vai funionar quando o usuário mudar a option */}
            <option value="">Selecione uma Categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>
        </select>
        <button type="submit"> Criar tarefa</button>
    </form>
  </div>
  
  
}

export default TodoForm

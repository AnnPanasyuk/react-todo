import React, { useEffect } from 'react';
import Context from './context';
import TodoList from './Todo/TodoList';
import Loader from './Loader';
import Modal from './Modal/Modal';
import { InputField } from './Form/InputField';
import { Foo } from './examples/Foo';
import { InputInterface } from './Form/interfaces';

const AddTodo = React.lazy(() => import('./Todo/AddTodo'));

function App() {
    const [ todos, setTodos ]: any= React.useState([]);
    const [ loading, setLoading ] = React.useState(true);
    const InputProps: InputInterface = {
        errors: 'Error message',
        label: {
            text: 'Label',
            positions: {
                top: '0',
                left: '0',
            }
        },
        inputValue: 'Input value',
        fieldProps: {
            type: 'text',
        },
    };

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5')
            .then(response => response.json())
            .then(todos => {
                setTimeout(() => {
                    setTodos(todos);
                    setLoading(false);
                }, 1000)
            })
    }, []);

    function toggleTodo(id: string) {
        setTodos(todos.map((todo: any) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        }));
    }

    function removeTodo(id: string) {
        setTodos(todos.filter((todo: any) => todo.id !== id));
    }

    function addTodo(title: string) {
        setTodos(todos.concat([{
            title,
             id: Date.now(),
            completed: false,
        }]))
    }

    return (
        <Context.Provider value={{removeTodo}}>
            <div className="wrapper">
                <h1>React tutorial</h1>

                <Modal/>

                <React.Suspense fallback={<p>Loading...</p>}>
                    <AddTodo onCreate={addTodo}/>
                </React.Suspense>

                { loading && <Loader /> }

                {
                    todos.length ?
                    <TodoList todos={todos} onToggle={toggleTodo}/> :
                        loading ?
                        null :
                        <p>No todos</p>
                }

                <InputField {...{...InputProps}} />
                <Foo>{() => <h1>{'foo value'}</h1>}</Foo>
            </div>
        </Context.Provider>
    );
}

export default App;

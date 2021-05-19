import React, { useEffect, useState} from 'react'
import { Redirect } from 'react-router'
import { useHistory } from 'react-router-dom'
import { Container, InputContainer, MyLogout, TasksContainer } from './styles'
import Input from '../../components/Input'
import Button from '../../components/button/'
import { useForm } from 'react-hook-form'
import { FiEdit2 } from 'react-icons/fi'
import Card from '../../components/Card/Card'
import api from '../../services/api'
import { toast } from 'react-toastify'

function Dashboard ({authenticated, setAuthenticated}) {
    const [tasks, setTasks] = useState([])
    const {register, handleSubmit} = useForm()
    const [token] = useState(JSON.parse(localStorage.getItem("@Doit:token")) || ""
    );

    const loadTasks = () => {
        api.get('/task', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: {
                completed: false,
            }
        })
        .then(response => {
            const apiTasks = response.data.data.map(task=>({
                ...task,
                createdAt: new Date(task.createdAt).toLocaleDateString("pt-BR", {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                })
            }))
            setTasks(apiTasks)
        })

        .catch((err)=> console.log(err));
    }

    useEffect(()=> {
        loadTasks();
    });

    const onSubmit = ({ task }) => {
        if(!task){
            return toast.error('you should write something')
        }

        api.post(
            "/task", {
            description:task,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        ).then(response=>loadTasks())
    };

    const handleCompleted = (id) => {
        const newTasks = tasks.filter(task => task._id !== id);

        api.put(`/task/${id}`, { completed: true}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then(response=> setTasks(newTasks));

    };

    const history = useHistory()


    const logout = () => {
              
        localStorage.clear()
        setAuthenticated(false)
        history.push("/login")

    }

    if(!authenticated) {
        return <Redirect to={"/login"}/>
    }

    return (

       
        <Container>
             <MyLogout onClick={()=>{logout()}}>Logout</MyLogout>
            <InputContainer onSubmit={handleSubmit(onSubmit)}>
            {/* <time>7 de maio de 2021</time>     */}
            <section>
                <Input 
                    icon={FiEdit2} 
                    placeholde="new task" 
                    register={register}
                    name="task"
                />
                <Button type="submit">Add</Button>
            </section>
            </InputContainer>
            <TasksContainer>
                {tasks.map((task) =>
                    <Card
                        key={task._id}
                        title={task.description}
                        date={task.createdAt}
                        onClick={()=> handleCompleted(task._id)}
                    />
                )}

            </TasksContainer>
        </Container>

    )
}

export default Dashboard
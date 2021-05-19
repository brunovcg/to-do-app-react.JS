import { Background, Container, Content, AnimationContainer } from './styles';
import Button from '../../components/button';
import { Link, Redirect, useHistory } from 'react-router-dom';
import Input from '../../components/Input';
import { FiMail, FiLock} from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import api from '../../services/api';
import { toast } from 'react-toastify'

function Login( {authenticated, setAuthenticated} ) {

    const schema = yup.object().shape({
        email: yup.string().email('e-mail invalid!').required("required field!"),
        password: yup
            .string()
            .min(8, "8 digits minimum!")
            .required("required field!"),
    })

    const { 
        register, 
        handleSubmit, 
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema)
    });

    const history = useHistory()

    const onSubmitFunction = (data) => {

        api
            .post("/user/login", data)
            .then(response => {
            const { token } = response.data;

            localStorage.clear()

            localStorage.setItem("@Doit:token", JSON.stringify(token));

            setAuthenticated(true)

            return history.push("/dashboard")
        })
        .catch(err=> toast.error('Wrong email or password'))
    }

    if(authenticated) {
        return <Redirect to="/dashboard"/>
    }
    
    return <Container>
        <Content>
            <AnimationContainer>
                <form onSubmit={handleSubmit(onSubmitFunction)}>
                    <h1>Login</h1>
                 
                    <Input 
                        icon={FiMail}
                        label="Email"
                        placeholder="Your Email"
                        register={register}
                        name="email"
                        error= {errors.email?.message}
                    />
                    <Input 
                        label="Password" 
                        placeholder="What's your Password?" 
                        type="password"
                        icon={FiLock}
                        register={register}
                        name="password"
                        error= {errors.password?.message}
                    />  
      
                    <Button type="submit">Login</Button>
                    <p>
                        Don't have an account yet? <Link to="/signup">SignUp.. </Link>
                    </p>
                </form>
            </AnimationContainer>
        </Content>
        <Background/>
    </Container>
}

export default Login
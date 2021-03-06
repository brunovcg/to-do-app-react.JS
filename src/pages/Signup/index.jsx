import { Background, Container, Content, AnimationContainer } from './styles';
import Button from '../../components/button';
import { Link, useHistory, Redirect } from 'react-router-dom';
import Input from '../../components/Input';
import { FiUser, FiMail, FiLock} from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import api from '../../services/api';
import { toast } from 'react-toastify'

function Signup({authenticated}) {

    const schema = yup.object().shape({
        name: yup.string().required("required field!"),
        email: yup.string().email('e-mail invalid!').required("required field!"),
        password: yup
            .string()
            .min(8, "8 digits minimum!")
            .required("required field!"),
        passwordConfirm: yup
            .string()
            .oneOf([yup.ref("password")], "password doesn't match!")
            .required("required field!")
    })

    const { 
        register, 
        handleSubmit, 
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema)
    });

    const history = useHistory()

    const onSubmitFunction = ({name, email, password}) => {
       const user = {name, email, password};
        api
        .post("/user/register", user)
        .then((_)=>{
        toast.success("Account Created")
        return history.push('/login')
            
        })
        .catch((err) => toast.error("Error, try another e-mail."))
    }

    if(authenticated) {
        return <Redirect to="/dashboard"/>
    }
    
    return <Container>
        <Background/>
        <Content>
            <AnimationContainer>
                <form onSubmit={handleSubmit(onSubmitFunction)}>
                    <h1>Register</h1>
                    <Input 
                        icon={FiUser}
                        label="User"
                        placeholder="Your Name"
                        register={register}
                        name="name"
                        error= {errors.name?.message}
                    />
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
                        placeholder="A strong Password" 
                        type="password"
                        icon={FiLock}
                        register={register}
                        name="password"
                        error= {errors.password?.message}
                    />  
                    <Input 
                        label="Password Confirm" 
                        placeholder="Confirm Password" 
                        type="password"
                        icon={FiLock}
                        register={register}
                        name="passwordConfirm"
                        error= {errors.passwordConfirm?.message}
                    />
                    <Button type="submit">Apply</Button>
                    <p>
                        Already a register user? <Link to="/login">Login.. </Link>
                    </p>
                </form>
            </AnimationContainer>
        </Content>
    </Container>
}

export default Signup
import { Background, Container, Content, AnimationContainer } from './styles';
import Button from '../../components/button';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import { FiUser, FiMail, FiLock} from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

function Signup() {

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

    const onSubmitFunction = (data) => {
        console.log(data)
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
                        Already a register user? <Link to="/link">Login.. </Link>
                    </p>
                </form>
            </AnimationContainer>
        </Content>
    </Container>
}

export default Signup
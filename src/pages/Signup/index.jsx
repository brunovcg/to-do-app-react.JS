import { Background, Container, Content, AnimationContainer } from './styles'
import Button from '../../components/button'
import { Link } from 'react-router-dom'
import Input from '../../components/Input'
import { FiUser, FiMail, FiLock} from 'react-icons/fi'
function Signup() {
    
    return <Container>
        <Background/>
        <Content>
            <AnimationContainer>
                <form>
                    <h1>Register</h1>
                    <Input icon={FiUser} label="User" placeholder="Your Name"/>
                    <Input icon={FiMail} label="Email" placeholder="Your Email"/>
                    <Input 
                        label="Password" 
                        placeholder="A strong Password" 
                        type="password"
                        icon={FiLock}
                    />
                        
                    <Input 
                        label="Password Confirm" 
                        placeholder="Confirm Password" 
                        type="password"
                        icon={FiLock}
                    />
                    <Button>Apply</Button>
                    <p>
                        Already a register user? <Link to="/link">Login.. </Link>
                    </p>
                </form>
            </AnimationContainer>
        </Content>
    </Container>
}

export default Signup
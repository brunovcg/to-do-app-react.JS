import { Container, Content } from './styles'

function Home() {

    return <Container>
        <Content>
            <h1>
                do<span>.</span>it
            </h1>
            <span>Organize your tasks easily!</span>
            <div>
                <button>Register</button>
                <button>Log in</button>
            </div>
        </Content>
    </Container>  
}

export default Home;
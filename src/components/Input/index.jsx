import { Container, InputContainer } from './styles.js'

function Input({label, icon: Icon, register, name, error, ...rest}) {
    
    return(
        <Container>
            <div>{label}{!!error && <span> - {error}</span>}</div>

            <InputContainer isErrored={!!error}>
                 {Icon && <Icon size={20}/>}
                <input {...register(name)} {...rest}/>
            </InputContainer>
        </Container>
    )
}

export default Input
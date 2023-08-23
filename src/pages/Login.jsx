import './Login.css';
import agenda from '../assets/59937.jpg'

function Login() {
  return (
   
    <div className="container-login">
       <div className='container-left'>
            <div className='form-login'>
                <h1>Login</h1>
                
            <form>  
            <label htmlFor='email'>E-mail</label>
                    <input
                      name="email"
                      placeholder='fulano@email.com'
                      type="email"
                      // value={email}
                      // onChange={alterarValorInputEmail}
                    />

      <label htmlFor='password'> Senha</label>
                    <input
                      name="password"
                      placeholder='Digite sua senha'
                      type="password"
                      // value={email}
                      // onChange={alterarValorInputEmail}
                    />
                    <button>Entrar</button>
            </form>
              </div>
      </div>
      <div className='image-login'>
        <img src={agenda} alt="agenda" />
      </div>
    </div>
   

  );
}
export default Login;

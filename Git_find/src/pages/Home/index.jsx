import {Header} from '../../components/Header'
import background from '../../assets/background.png'
import './styles.css'

function App() {
  
  return (

    <>
      <div className='header_'>
        <Header/>
        <div className='content'>
          <img src={background} className="background-git"  alt="background"  />
          <div className="info">
            <div>
              <input name="search-user" placeholder="@username" />
              <button type="button" className ="search-button">Buscar</button>
            </div>
            <div className="profile">
              <img className="profile-picture" src="https://avatars.githubusercontent.com/u/105300337?v=4" alt="foto-de-perfil" />
              <div>
                <h3>name</h3>
                <span>@MatRogax</span>
                <p>description</p>
              </div>
            </div>
            <hr/>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App

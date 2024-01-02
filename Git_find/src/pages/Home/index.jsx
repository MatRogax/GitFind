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
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App

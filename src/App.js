import logo from './assets/images/rsz_logo-signares.png';
import shoes from './assets/images/shoes/shoes.jpg';

import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faUser } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

<script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <div className="content-header">
          <div className="contact">
            <p > Contactez-nous</p>
            <div className="icons">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
          <hr className='divider' />
          <div className="header-content">
            <div className="menu">
              <div className="logo">
                <img src={logo} className="App-logo" alt="logo" />
              </div>
              <ul>
                <li> <a href="/#">ACCEUIL</a></li>
                <li><a href="/#">SERVICES</a> </li>
                <li> <a href="/#">QUI SOMMES-NOUS ?</a> </li>

              </ul>
            </div>
            <div className="search">
              <FontAwesomeIcon icon={faSearch} />
              <input type="text" placeholder="Rechercher" />
            </div>
          </div>
        </div>
      </header>
      <div className='App-content'>

        <div className="populaires">
          <div className="populaires-title">
            <h2>LES PLUS POPULAIRES</h2>
          </div>

          <div className="populaires-content">
            <div className="populaires-content-item">
              <div className="populaires-content-item-img">
                <img src={shoes} alt="shoes" />
              </div>
              <div className="populaires-content-item-text">
                <h3>Talon Haut</h3>
                <p>22,94 €</p>
              </div>
            </div>

            <div className="populaires-content-item">
              <div className="populaires-content-item-img">
                <img src={shoes} alt="shoes" />
              </div>
              <div className="populaires-content-item-text">
                <h3>Chaussures</h3>
                <p>22,94 €</p>
              </div>
            </div>

            <div className="populaires-content-item">
              <div className="populaires-content-item-img">
                <img src={shoes} alt="shoes" />
              </div>
              <div className="populaires-content-item-text">
                <h3>Chaussures</h3>
                <p>22,94 €</p>
              </div>
            </div>

            <div className="populaires-content-item">
              <div className="populaires-content-item-img">
                <img src={shoes} alt="shoes" />
              </div>
              <div className="populaires-content-item-text">
                <h3>Chaussures</h3>
                <p>22,94 €</p>
              </div>
            </div>

            <div className="populaires-content-item">
              <div className="populaires-content-item-img">
                <img src={shoes} alt="shoes" />
              </div>
              <div className="populaires-content-item-text">
                <h3>Chaussures</h3>
                <p>22,94 €</p>
              </div>
            </div>

            <div className="populaires-content-item">
              <div className="populaires-content-item-img">
                <img src={shoes} alt="shoes" />
              </div>
              <div className="populaires-content-item-text">
                <h3>Chaussures</h3>
                <p>22,94 €</p>
              </div>
            </div>

            <div className="populaires-content-item">
              <div className="populaires-content-item-img">
                <img src={shoes} alt="shoes" />
              </div>
              <div className="populaires-content-item-text">
                <h3>Chaussures</h3>
                <p>22,94 €</p>
              </div>
            </div>

            <div className="populaires-content-item">
              <div className="populaires-content-item-img">
                <img src={shoes} alt="shoes" />
              </div>
              <div className="populaires-content-item-text">
                <h3>Chaussures</h3>
                <p>22,94 €</p>
              </div>
            </div>

          </div>

          

        </div>
      </div>
    </div>
  );
}

export default App;

import './assets/css/App.css';
import Icon from './assets/img/fav-color.png'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import { Home } from './views/Home';
import { Login } from './views/Login';
import { Registro } from './views/Registro';
import { Feed } from './views/Feed';
import { Explora } from './views/Explora';
import { Archivo } from './views/Archivo';
import { Blog } from './views/Blog';
import { Post } from './views/Post';
//import { useState } from 'react';

function App() {
  //const [selectedMenuItem, setMenuItem] = useState('/');
  var selectedMenuItem = '/';
  var previousItemSelected = null;

  function changeMenuItemSelected(path, item) {
    selectedMenuItem = path;
    if (previousItemSelected !== null && previousItemSelected !== '/' && previousItemSelected !== 'login' && previousItemSelected !== 'registro') {
      previousItemSelected.classList.remove('selected');
    }
    if (item !== null && item !== '/' && item !== 'login' && item !== 'registro') {
      item.classList.add('selected');
    }
    previousItemSelected = item;
  }

  return (
    <Router>
      <header className='menu-container'>
        <div className='menu-group grupo-icono'>
          <Link to="/">
            <div className='menu-item' onClick={(e) => {changeMenuItemSelected('/', e.target)}}>
              <img src={Icon} />
            </div>
          </Link>
        </div>
        <div className='menu-group group-items'>
          <Link to="/feed"><div className='menu-item' onClick={(e) => {changeMenuItemSelected('feed', e.target)}}>Feed</div></Link>
          <Link to="/explora"><div className='menu-item' onClick={(e) => {changeMenuItemSelected('explora', e.target)}}>Explora</div></Link>
          <Link to="/archivo"><div className='menu-item' onClick={(e) => {changeMenuItemSelected('archivo', e.target)}}>Archivo</div></Link>
          <Link to="/blog"><div className='menu-item' onClick={(e) => {changeMenuItemSelected('blog', e.target)}}>Blog</div></Link>
        </div>
        <div className='menu-group group-user'>
          <Link to="/login"><div className='menu-item login-button' onClick={() => {selectedMenuItem = 'login'}}>Login</div></Link>
          <Link to="/registro"><div className='menu-item register-button' onClick={() => {selectedMenuItem = 'registro'}}>Registro</div></Link>
        </div>
      </header>
      <main className='contenedor-principal'>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/registro" element={<Registro />} />
          <Route exact path="/feed" element={<Feed />} />
          <Route exact path="/explora" element={<Explora />} />
          <Route exact path="/archivo" element={<Archivo />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/blog/post/:id" element={<Post />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

import './assets/css/App.css';
import Icon from './assets/img/fav-color.png'
import NotificationIcon from './assets/img/notification.png'
import UserIcon from './assets/img/user.png'
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
import { Inbox } from './views/Inbox';
import { Perfil } from './views/Perfil';
import { Configuracion } from './views/Configuracion';
//import { useState } from 'react';

function App() {
  //const [selectedMenuItem, setMenuItem] = useState('/');
  //var selectedMenuItem = '/';
  var previousItemSelected = null;
  var userLogin = true;

  function changeMenuItemSelected(path, item) {
    //selectedMenuItem = path;
    if (previousItemSelected !== null 
      && previousItemSelected !== '/' 
      && previousItemSelected !== 'login' 
      && previousItemSelected !== 'registro' 
      && previousItemSelected !== 'inbox' 
      && previousItemSelected !== 'perfil' 
      && previousItemSelected !== 'configuracion') {
      previousItemSelected.classList.remove('selected');
    }
    if (item !== null 
      && item !== '/' 
      && item !== 'login' 
      && item !== 'registro' 
      && item !== 'inbox' 
      && item !== 'perfil' 
      && item !== 'configuracion') {
      item.classList.add('selected');
    }
    previousItemSelected = item;
  }

  function toggleUserMenu() {
    if(document.getElementById('menu-desplegable-user').classList.contains('desplegable-oculto')) {
      document.getElementById('menu-desplegable-user').classList.remove('desplegable-oculto');
      document.getElementById('menu-desplegable-user').classList.add('desplegable-visible');
    } else {
      document.getElementById('menu-desplegable-user').classList.remove('desplegable-visible');
      document.getElementById('menu-desplegable-user').classList.add('desplegable-oculto');
    }
  }

  function cerrarSesion() {
    userLogin = false;
    toggleUserMenu();
  }

  return (
    <Router>
      <header className='menu-container'>
        <div className='menu-group grupo-icono'>
          <Link to="/">
            <div className='menu-item' onClick={(e) => {changeMenuItemSelected('/', e.target)}}>
              <img src={Icon} alt='home'/>
            </div>
          </Link>
        </div>
        <div className='menu-group group-items'>
          <Link to="/feed"><div className='menu-item' onClick={(e) => {changeMenuItemSelected('feed', e.target)}}>Feed</div></Link>
          <Link to="/explora"><div className='menu-item' onClick={(e) => {changeMenuItemSelected('explora', e.target)}}>Explora</div></Link>
          <Link to="/archivo"><div className='menu-item' onClick={(e) => {changeMenuItemSelected('archivo', e.target)}}>Archivo</div></Link>
          <Link to="/blog"><div className='menu-item' onClick={(e) => {changeMenuItemSelected('blog', e.target)}}>Blog</div></Link>
        </div>
        { !userLogin ?
          <div className='menu-group group-user'>
            <Link to="/login"><div className='menu-item login-button' onClick={(e) => {changeMenuItemSelected('login', e.target)}}>Login</div></Link>
            <Link to="/registro"><div className='menu-item register-button' onClick={(e) => {changeMenuItemSelected('registro', e.target)}}>Registro</div></Link>
          </div>
          :
          <div className='menu-group group-user'>
            <Link to="/inbox"><div className='menu-item icon-logged' onClick={(e) => {changeMenuItemSelected('inbox', e.target)}}><img src={NotificationIcon} alt='inbox'/></div></Link>
            <div className='menu-item icon-logged' onClick={(e) => {toggleUserMenu()}}><img src={UserIcon} alt='user'/></div>
            <div id='menu-desplegable-user' className='desplegable-user desplegable-oculto'>
              <div className='top-arrow'></div>
              <Link to="/perfil"><div className='item-desplegable'  onClick={(e) => {changeMenuItemSelected('perfil', e.target); toggleUserMenu()}}>Mi perfil</div></Link>
              <Link to="/configuracion"><div className='item-desplegable'  onClick={(e) => {changeMenuItemSelected('configuracion', e.target); toggleUserMenu()}}>Configuración</div></Link>
              <div className='item-desplegable cerrar-sesion'  onClick={() => {cerrarSesion()}}>Cerrar sesión</div>
            </div>
          </div>
        } 
      </header>
      <main className='contenedor-principal'>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/registro" element={<Registro />} />
          <Route exact path="/feed" element={<Feed />} />
          <Route exact path="/explora" element={<Explora />} />
          <Route exact path="/archivo" element={<Archivo />} />
          <Route exact path="/inbox" element={<Inbox />} />
          <Route exact path="/perfil" element={<Perfil />} />
          <Route exact path="/configuracion" element={<Configuracion />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/blog/post/:id" element={<Post />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

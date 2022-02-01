import "./assets/css/App.css";
import i18n from "./utils/i18n";
import "./utils/session.js";
import Icon from "./assets/img/fav-color.png";
import NotificationIcon from "./assets/img/notification.png";
import UserIcon from "./assets/img/user.png";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {
  Archivo,
  Blog,
  Explora,
  Configuracion,
  Feed,
  Home,
  Inbox,
  Login,
  Perfil,
  Post,
  Registro,
} from "./views";
import { useState } from "react";

function App() {
  const [userLogin, setUserLogin] = useState(true);
  let previousItemSelected: any | null = null;

  function changeMenuItemSelected(path: any, item: any) {
    if (previousItemSelected !== null) {
      previousItemSelected.classList.remove("selected");
    }
    if (
      path !== null &&
      path !== "/" &&
      path !== "login" &&
      path !== "registro" &&
      path !== "inbox" &&
      path !== "perfil" &&
      path !== "configuracion"
    ) {
      item.classList.add("selected");
    }
    previousItemSelected = item;
  }

  function toggleUserMenu() {
    if (
      document.getElementById("menu-desplegable-user")!.classList.contains("desplegable-oculto")
    ) {
      document.getElementById("menu-desplegable-user")!.classList.remove("desplegable-oculto");
      document.getElementById("menu-desplegable-user")!.classList.add("desplegable-visible");
    } else {
      document.getElementById("menu-desplegable-user")!.classList.remove("desplegable-visible");
      document.getElementById("menu-desplegable-user")!.classList.add("desplegable-oculto");
    }
  }

  function cerrarSesion() {
    setUserLogin(false);
    toggleUserMenu();
  }

  return (
    <Router>
      <header className="menu-container">
        <div className="menu-group grupo-icono">
          <Link to="/">
            <div
              className="menu-item"
              onClick={(e) => {
                changeMenuItemSelected("/", e.target);
              }}
            >
              <img src={Icon} alt="home" />
            </div>
          </Link>
        </div>
        <div className="menu-group group-items">
          <Link to="/feed">
            <div
              className="menu-item"
              onClick={(e) => {
                changeMenuItemSelected("feed", e.target);
              }}
            >
              {i18n.lang.menu.feed.es}
            </div>
          </Link>
          <Link to="/explora">
            <div
              className="menu-item"
              onClick={(e) => {
                changeMenuItemSelected("explora", e.target);
              }}
            >
              {i18n.lang.menu.explore.es}
            </div>
          </Link>
          <Link to="/archivo">
            <div
              className="menu-item"
              onClick={(e) => {
                changeMenuItemSelected("archivo", e.target);
              }}
            >
              Archivo
            </div>
          </Link>
          <Link to="/blog">
            <div
              className="menu-item"
              onClick={(e) => {
                changeMenuItemSelected("blog", e.target);
              }}
            >
              Blog
            </div>
          </Link>
        </div>
        {!userLogin ? (
          <div className="menu-group group-user">
            <Link to="/login">
              <div
                className="menu-item login-button"
                onClick={(e) => {
                  changeMenuItemSelected("login", e.target);
                }}
              >
                Login
              </div>
            </Link>
            <Link to="/registro">
              <div
                className="menu-item register-button"
                onClick={(e) => {
                  changeMenuItemSelected("registro", e.target);
                }}
              >
                Registro
              </div>
            </Link>
          </div>
        ) : (
          <div className="menu-group group-user">
            <Link to="/inbox">
              <div
                className="menu-item icon-logged"
                onClick={(e) => {
                  changeMenuItemSelected("inbox", e.target);
                }}
              >
                <img src={NotificationIcon} alt="inbox" />
              </div>
            </Link>
            <div className="menu-item icon-logged" onClick={toggleUserMenu}>
              <img src={UserIcon} alt="user" />
            </div>
            <div id="menu-desplegable-user" className="desplegable-user desplegable-oculto">
              <div className="top-arrow"></div>
              <Link to="/perfil">
                <div
                  className="item-desplegable"
                  onClick={(e) => {
                    changeMenuItemSelected("perfil", e.target);
                    toggleUserMenu();
                  }}
                >
                  Mi perfil
                </div>
              </Link>
              <Link to="/configuracion">
                <div
                  className="item-desplegable"
                  onClick={(e) => {
                    changeMenuItemSelected("configuracion", e.target);
                    toggleUserMenu();
                  }}
                >
                  Configuración
                </div>
              </Link>
              <div
                className="item-desplegable cerrar-sesion"
                onClick={() => {
                  cerrarSesion();
                }}
              >
                Cerrar sesión
              </div>
            </div>
          </div>
        )}
      </header>
      <main className="contenedor-principal">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/explora" element={<Explora />} />
          <Route path="/archivo" element={<Archivo />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/configuracion" element={<Configuracion />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/post/:id" element={<Post />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

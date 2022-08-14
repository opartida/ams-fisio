import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img
                src={logo}
                alt="Fisioterapia Suelo Pélvico"
                style={{ width: "88px" }}
              />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">             
              <div class="navbar-item has-dropdown is-hoverable">
                <div class="navbar-link">Pacientes</div>

                <div class="navbar-dropdown">
                  <Link class="navbar-item" to="/pacientes/hombres">
                    Hombres
                  </Link>
                  <Link class="navbar-item" to="/pacientes/mujeres">
                    Mujeres
                  </Link>
                  <Link class="navbar-item" to="/pacientes/ninos">
                    Niños
                  </Link>
                </div>
              </div>

              <Link className="navbar-item" to="/tratamientos">
                Tratamientos
              </Link>
              <div class="navbar-item has-dropdown is-hoverable">
                <Link class="navbar-link">Formación</Link>

                <div class="navbar-dropdown">
                  <Link class="navbar-item" to="/cursos">
                    Cursos
                  </Link>
                </div>
              </div>

              <div class="navbar-item has-dropdown is-hoverable">
                <div class="navbar-link">Preguntas Frecuentes</div>

                <div class="navbar-dropdown">
                  <Link class="navbar-item" to="/faq-page/hombres">
                    Hombres
                  </Link>
                  <Link class="navbar-item" to="/faq-page/mujeres">
                    Mujeres
                  </Link>
                  <Link class="navbar-item" to="/faq-page/ninos">
                    Niños
                  </Link>
                </div>
              </div>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/consulta">
                Consulta
              </Link>
            </div>            
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;

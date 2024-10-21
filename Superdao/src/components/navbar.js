class NavbarComponent extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
        <div class="navbar-logo">
          <img src="./public/icons/logo.svg" alt="Superdao Logo" />
          <h2>Superdao</h2>
        </div>
        <nav>
          <ul class="navbar-items">
            <li><a href="#playbook">Playbook</a></li>
            <li><a href="#directory">Directory</a></li>
            <li><a href="#jobs">Jobs</a></li>
          </ul>
        </nav>
        <button type="button" class="btn btn-community">Join community</button>
        <button type="button" class="btn burger-menu">
          <img src="./public/icons/burger-menu.svg" alt="Burger menu icon" />
        </button>
	`;
    this.classList.add("navbar");
  }
}

customElements.define("navbar-component", NavbarComponent);

class DAOFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
		<footer class="dao-footer">
			<div class="footer-container">
				<img src="./public/icons/logo-black.svg" alt="DAO logo black" />
				<nav class="footer-links">
					<a href="#">Playbook</a>
					<a href="#">Directory</a>
					<a href="#">Jobs</a>
					<a href="#">About</a>
				</nav>
				<div class="footer-icons">
					<img src="./public/icons/brands/twitter.svg" alt="Twitter icon" />
					<img src="./public/icons/brands/telegram.svg" alt="Telegram icon" />
					<img src="./public/icons/email-black.svg" alt="Email icon" />
				</div>
			</div>
		</footer>
	`;
  }
}

customElements.define("dao-footer", DAOFooter);

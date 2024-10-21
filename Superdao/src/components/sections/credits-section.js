class CreditsSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
		<section class="credits-section">
			<div class="container">
				<div class="gradient">
					<h2>
						<span>
							Website Credits <img src="./public/images/underline-2.svg" alt="Underline 2 image" class="underline-2" />
						</span>
					</h2>
				</div>
				<p class="container-p">
					This website is an inspiration by Alexander Dubovsky on his Figma
					Landing Page. I've been recreating the design to train my skills and
					to show my abilities to create clean, modern and reusable websites.
				</p>
				<div class="credits-btns">
					<a href="https://github.com/melviinn" target="_blank">
						<button class="btn btn-primary btn-credit">
							<div class="img-wrapper">
								<img src="./public/icons/brands/github.svg" alt="Github icon" />
							</div>
							<div class="btn-content">
								<span>Github</span>
								<p>@melviinn</p>
							</div>
						</button>
					</a>
					<a href="https://www.linkedin.com/in/melvin-duchaufour/" target="_blank">
						<button class="btn btn-primary btn-credit">
							<div class="img-wrapper">
								<img src="./public/icons/brands/linkedin.svg" alt="LinkedIn icon" />
							</div>
							<div class="btn-content">
								<span>LinkedIn</span>
								<p>melvin-duchaufour</p>
							</div>
						</button>
					</a>
					<a href="mailto:duchaufour.melvin.pro@gmail.com">
						<button class="btn btn-community btn-credit">
							<div class="img-wrapper">
								<img src="./public/icons/email.svg" alt="Email icon" />
							</div>
							<div class="btn-content">
								<span>Email</span>
								<p>duchaufour.melvin.pro@gmail.com</p>
							</div>
						</button>
					</a>
				</div>
			</div>
		</section>
	`;
  }
}

customElements.define("credits-section", CreditsSection);

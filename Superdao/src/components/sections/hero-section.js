class HeroSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
		<section class="hero-section">
			<h1 class="hero-title">
			Start a
			<span class="underline">DAO <img src="./public/images/underline-1.svg" alt="Underline decoration"
			class="underline-img" /></span
			>in seconds
			</h1>
			<p class="hero-paragraph">
			An easy step-by-step process to start, manage, and grow a
			decentralized autonomous organization
			</p>
			<button type="button" class="btn btn-primary">Get early access</button>
		</section>
		`;
    this.classList.add("hero-section");
  }
}

customElements.define("hero-section", HeroSection);

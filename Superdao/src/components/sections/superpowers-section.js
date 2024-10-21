class SuperpowersSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
		<section class="superpowers-section">
			<img src="./public/images/superpowers-img.png" alt="Superpowers Illustration image" class="superpowers-img" />
			<ul class="superpowers-items">
				<li>Give equity to contributors</li>
				<li>Raise funds with tokens & NFTs</li>
				<li>Make decisions together</li>
				<li>Operate globally</li>
			</ul>
		</section>
	`;
  }
}

customElements.define("superpowers-section", SuperpowersSection);

class InspiredSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
			<section class="inspired-section">
				<div class="container">
					<h4 class="container-title">Get inspired</h4>
					<p class="container-p">
						We coordinate a community of most active people in the DAO space.
						Join to get help with your DAO project, connect with peers, and get
						access to our shared resources
					</p>
					<div class="container-btns">
						<button class="btn btn-primary">Join community</button>
						<button class="btn btn-community">DAO directory</button>
						<button class="btn btn-community">Playbook</button>
					</div>
					<img
						src="./public/images/inspired-bg.svg"
						alt="Inspired card background"
					/>
				</div>
			</section>
		`;
  }
}

customElements.define("inspired-section", InspiredSection);

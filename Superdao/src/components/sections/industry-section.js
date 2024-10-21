class IndustrySection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
		<section class="industry-section">
			<div class="gradient">
				<h2>
					<span
					>Change every industry
					<img
						src="./public/images/underline-3.svg"
						alt="Underline 3 image"
						class="underline-2"
					/></span>
				</h2>
			</div>
			<div class="industry-cards">
				<div class="card">
					<div class="card-header">
					<img src="./public/icons/defi.svg" alt="DeFi logo" />
					<h3 class="card-title">DeFi</h3>
					</div>
					<p class="card-content">Decentralize governance</p>
				</div>
				<div class="card">
					<div class="card-header">
					<img src="./public/icons/bills.svg" alt="DeFi logo" />
					<h3 class="card-title">Investment</h3>
					</div>
					<p class="card-content">Scout and pick together</p>
				</div>
				<div class="card">
					<div class="card-header">
					<img src="./public/icons/creator.svg" alt="DeFi logo" />
					<h3 class="card-title">Creators</h3>
					</div>
					<p class="card-content">Remove middlemen, own your work</p>
				</div>
				<div class="card">
					<div class="card-header">
					<img src="./public/icons/wand.svg" alt="DeFi logo" />
					<h3 class="card-title">Metaverse</h3>
					</div>
					<p class="card-content">Build virtual goods businesses</p>
				</div>
				<div class="card">
					<div class="card-header">
					<img src="./public/icons/chat.svg" alt="DeFi logo" />
					<h3 class="card-title">Communities</h3>
					</div>
					<p class="card-content">Build shared resources</p>
				</div>
				<div class="card">
					<div class="card-header">
					<img src="./public/icons/unicorn.svg" alt="DeFi logo" />
					<h3 class="card-title">Startups</h3>
					</div>
					<p class="card-content">Reward early adopters</p>
				</div>
				<div class="card">
					<div class="card-header">
					<img src="./public/icons/hands.svg" alt="DeFi logo" />
					<h3 class="card-title">Nonprofits</h3>
					</div>
					<p class="card-content">Raise funds, allocate resources</p>
				</div>
				<div class="card">
					<div class="card-header">
					<img src="./public/icons/pro.svg" alt="DeFi logo" />
					<h3 class="card-title">Professionals</h3>
					</div>
					<p class="card-content">Form freelancer guilds</p>
				</div>
				<div class="card">
					<div class="card-header">
					<img src="./public/icons/corporation.svg" alt="DeFi logo" />
					<h3 class="card-title">Corporations</h3>
					</div>
					<p class="card-content">Reinvent loyalty programs</p>
				</div>
			</div>
		</section>
		`;
  }
}

customElements.define("industry-section", IndustrySection);

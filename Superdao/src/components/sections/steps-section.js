class StepsSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
		<section class="steps-section">
			<div class="gradient">
				<h2>
					<span
					>Superdao helps at every step
					<img
						src="./public/images/underline-2.svg"
						alt="Underline 2 image"
						class="underline-2"
					/></span>
				</h2>
			</div>
			<div class="network-card">
				<div class="card-header">
					<h3>Network</h3>
					<div class="header-cards">
						<div class="header-card">
							<img
							src="./public/icons/yellow-dot.svg"
							alt="Yellow little dot"
							/>
							DAO creators
						</div>
						<div class="header-card">
							<img
							src="./public/icons/yellow-dot.svg"
							alt="Yellow little dot"
							/>
							Investors
						</div>
						<div class="header-card">
							<img
							src="./public/icons/yellow-dot.svg"
							alt="Yellow little dot"
							/>
							Contributors
						</div>
						<div class="header-card">
							<img
							src="./public/icons/yellow-dot.svg"
							alt="Yellow little dot"
							/>
							Lawyers
						</div>
					</div>
				</div>
				<div class="card-content">
					<div class="stack-card">
						<div class="stack-header">
							<h4>Formation stack</h4>
							<p>Before token</p>
						</div>
						<div class="stack-content">
							<div class="stack-item">
								<div class="icon-wrapper">
									<img src="./public/icons/hashtag.svg" alt="hashtag icon" />
								</div>
								DAO ID
							</div>
							<div class="stack-item">
								<div class="icon-wrapper">
									<img src="./public/icons/user.svg" alt="User icon" />
								</div>
								Public profile
							</div>
							<div class="stack-item">
								<div class="icon-wrapper">
									<img
									src="./public/icons/invite.svg"
									alt="Invite hands icon"
									/>
								</div>
								Invite flow
							</div>
							<div class="stack-item">
								<div class="icon-wrapper">
									<img src="./public/icons/phone.svg" alt="Phone icon" />
								</div>
								Member app
							</div>
							<div class="stack-item">
								<div class="icon-wrapper">
									<img src="./public/icons/gift.svg" alt="Gift icon" />
								</div>
								NFTs and pre-tokens
							</div>
						</div>
					</div>
					<div class="stack-card">
						<div class="stack-header">
							<h4>Operating stack</h4>
							<p>After token</p>
						</div>
						<div class="stack-content">
							<div class="stack-item">
								<div class="icon-wrapper">
									<img
									src="./public/icons/treasury.svg"
									alt="Treasury icon"
									/>
								</div>
								Treasury
							</div>
							<div class="stack-item">
								<div class="icon-wrapper">
									<img
									src="./public/icons/governance.svg"
									alt="Governance icon"
									/>
								</div>
								Governance
							</div>
							<div class="stack-item">
								<div class="icon-wrapper">
									<img
									src="./public/icons/user-add.svg"
									alt="User add icon"
									/>
								</div>
								Recruiting
							</div>
							<div class="stack-item">
								<div class="icon-wrapper">
									<img
									src="./public/icons/arrow-round.svg"
									alt="Arrow rounded icon"
									/>
								</div>
								Compensation
							</div>
							<div class="stack-item">
								<div class="icon-wrapper">
									<img
									src="./public/icons/chart-round.svg"
									alt="Chart rounded icon"
									/>
								</div>
								Analytics
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="steps-img">
				<img
					src="./public/images/steps-img.png"
					alt="Steps dashboard image"
				/>
			</div>
			<div class="steps-infos">
				<div class="ecosystem">
					<h4>All-in-one ecosystem</h4>
					<div class="container">
						<span>Superdao apps + third-party apps</span>
					</div>
				</div>
				<div class="support">
					<h4>Multichain support</h4>
					<div class="support-icons">
						<img src="./public/icons/brands/ethereum.svg" alt="Ethereum icon" />
						<img src="./public/icons/brands/polygon.svg" alt="Polygon icon" />
						<img src="./public/icons/brands/solana.svg" alt="Solana icon" />
						<img
						src="./public/icons/brands/near-protocol.svg"
						alt="Near Protocol icon"
						/>
						<img src="./public/icons/brands/algorand.svg" alt="Algorand icon" />
					</div>
				</div>
			</div>
		</section>
	`;
  }
}

customElements.define("steps-section", StepsSection);

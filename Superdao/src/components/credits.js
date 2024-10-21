class CreditsComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
		<div class="credit" style="padding: 2rem; text-align: center">
			Coded by
			<a
				href="https://github.com/melviinn"
				target="_blank"
				style="text-decoration: underline; color: var(--yellow)"
				>@melviinn</a
			>
		</div>
	`;
  }
}

customElements.define("credits-component", CreditsComponent);

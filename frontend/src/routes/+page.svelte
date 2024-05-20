<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="binary">
		<div class="half">
			<p>1</p>
			<p>0</p>
			<p>0</p>
			<p>1</p>
		</div>
		<div class="half">
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>0</p>
		</div>
	</div>
	<div class="decimal">
		<button class="add">
			<i class="material-symbols-outlined">add</i>
		</button>
		<input type="number" min="0" max="255">
		<button class="subtract">
			<i class="material-symbols-outlined">remove</i>
		</button>
	</div>
</section>

<style>
	section {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem;
		padding-top: 4rem;
		flex-direction: column;
	}

	p {
		font-size: 8rem;
		height: min-content;
		margin: 1rem;
		transition: all 200ms;
	}

	div {
		display: flex;
		justify-content: center;
		gap: 4rem;
	}

	.half {
		display: flex;
		gap: 0.125rem;
	}

	.binary p {
		font-family: 'Horizon', sans-serif;
		font-weight: bold;
		cursor: pointer;
	}

	.binary p:hover {
		color: var(--color-text-hover);
	}

	button {
		transition: all 200ms;
		background-color: var(--color-primary);
		border: 0;
		cursor: pointer;
	}

	.add i, .subtract i {
		font-size: 8rem;
		color: var(--color-text);
	}

	.add i:hover, .subtract i:hover {
		transition: all 200ms;
		font-size: 8rem;
		color: var(--color-text-hover);
	}

	.decimal input {
		background: none;
		color: var(--color-text);
		text-align: center;
		font-size: 8rem;
		max-width: 32rem;
		min-width: 8rem;
		border: 0;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	input[type=number] {
		-moz-appearance: textfield;
	}
</style>
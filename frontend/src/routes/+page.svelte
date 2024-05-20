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
		<input type="number" value="158">
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
		cursor: pointer;
	}

	.binary p:hover {
		color: var(--color-text-hover);
	}

	.decimal input {
		background: none;
		color: var(--color-text);
		font-size: 8rem;
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
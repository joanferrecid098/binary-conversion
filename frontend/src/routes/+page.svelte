<svelte:head>
	<title>Binary Conversion</title>
	<meta name="description" content="An app to convert binary to decimal or viceversa." />
</svelte:head>

<script>
	import ValueStore from '$lib/stores/ValueStore';
	import { encode, decode } from './logic';
	import { onDestroy } from 'svelte';

	let num = 0;

	const isBrowser = typeof window !== 'undefined';
	
	const unsub = ValueStore.subscribe(data => {
		num = data;
		isBrowser && (localStorage.storable = JSON.stringify(data));
	});
	
	onDestroy(() => {
		unsub();
	})

	isBrowser &&
		localStorage.storable &&
		ValueStore.update(() => {
			return JSON.parse(localStorage.storable)
		});

	let bin = encode(num);

	const changeBinary = (w) => {
		if (bin[w] === 0) {
			bin[w] = 1;
			num = decode(bin);
			return;
		}
		if (bin[w] === 1) {
			bin[w] = 0;
			num = decode(bin);
			return;
		}
	}

	const addNum = () => {
		if (num+1 < 0 || num+1 > 255) return;
		num++;
		bin = encode(num);
		ValueStore.update(() => {
			return num;
		});
	}

	const subNum = () => {
		if (num-1 < 0 || num-1 > 255) return;
		num--;
		bin = encode(num);
		ValueStore.update(() => {
			return num;
		});
	}

	const changeNum = (e) => {
		bin = encode(e.target.value);
		ValueStore.update(() => {
			return e.target.value;
		});
	}
</script>

<section>
	<div class="binary">
		<div class="half">
			<p on:click={() => changeBinary(7)}>{bin[7].toString()}</p>
			<p on:click={() => changeBinary(6)}>{bin[6].toString()}</p>
			<p on:click={() => changeBinary(5)}>{bin[5].toString()}</p>
			<p on:click={() => changeBinary(4)}>{bin[4].toString()}</p>
		</div>
		<div class="half">
			<p on:click={() => changeBinary(3)}>{bin[3].toString()}</p>
			<p on:click={() => changeBinary(2)}>{bin[2].toString()}</p>
			<p on:click={() => changeBinary(1)}>{bin[1].toString()}</p>
			<p on:click={() => changeBinary(0)}>{bin[0].toString()}</p>
		</div>
	</div>
	<div class="decimal">
		<button class="add" on:click={addNum}>
			<i class="material-symbols-outlined">add</i>
		</button>
		<input type="number" bind:value={num} on:change={changeNum}>
		<button class="subtract" on:click={subNum}>
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
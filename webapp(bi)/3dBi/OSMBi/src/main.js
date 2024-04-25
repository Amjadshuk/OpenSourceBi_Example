import App from './App.svelte';


document.body.style.margin = '0';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;
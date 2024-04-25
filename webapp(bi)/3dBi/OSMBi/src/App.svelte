<script>
  import BottomShadow from './Components/BottomShadow.svelte';
  import Title from './Components/Title.svelte';
import OsMmap from './Components/OSMmap.svelte';
import './main.css';
  import ControlPanel from './Components/ControlPanel.svelte';

	export let name;
</script>

<main>

	<Title></Title>
	<BottomShadow></BottomShadow>
	<ControlPanel></ControlPanel>
	<OsMmap></OsMmap>
	
</main>


<script>
  import CpButtons from "./CPButtons.svelte";

</script>
<style>
    .controlpanelcont {
        display: flex;
       background: #262626;
       box-shadow: 0 -10px 10px black;
       width: 30vw;
       height: 12vh;
       z-index: 1;
       position: fixed;
       bottom: 0;
       left: 50%;
       transform: translateX(-50%);
       transition: width 0.5s ease-in-out, box-shadow 0.5s ease-in-out; /* Combined transition for both width and box-shadow */
    } 
    
    .controlpanelcont:hover {
        width: 40vw; /* Increase width on hover */
        box-shadow: 0 -15px 15px #030100; /* Adjusted box shadow on hover */
    }
    
    .controlpanelcont:not(:hover) {
        width: 30vw; /* Revert width when not hovered */
        box-shadow: 0 -10px 10px black; /* Adjusted box shadow when not hovered */
    }
</style>

<div class="controlpanelcont">

    <CpButtons buttonText="Clear Filters" iconurl="Assets/clearfilters.png"></CpButtons>
    <CpButtons buttonText="Raw Data" iconurl="Assets/rawdata.png"></CpButtons>
    <CpButtons buttonText="Filters" iconurl="Assets/filter.png"></CpButtons>
    <CpButtons buttonText="Topics" iconurl="Assets/topics.png"></CpButtons>

   
</div>

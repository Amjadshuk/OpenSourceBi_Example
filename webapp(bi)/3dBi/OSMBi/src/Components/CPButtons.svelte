<!-- Button.svelte -->
<script>
    export let buttonText = "Default Button";
    export let iconurl = "./Assets/clearfilters.png";
  </script>
  
  <style>
    .cpbutton:hover {
        transform: scale(1.2);
        box-shadow: 0 -10px 15px hsl(22, 100%, 80%, 20%);
        cursor: pointer;
        z-index: 2;
        color: #262626;
        background: #fff2eb;
        
        
       
    }
    .cpbutton:hover .cpbtnsicons{
        animation: bluricon 1s alternate forwards;
    }
  .cpbutton:not(:hover){
        transform: scale(1);
        

    }
    .cpbutton {
    transition: transform 0.5s ease-in-out,  box-shadow 0.5s ease-in-out, z-index 0.5s ease-in-out;
      width: 100%;
      height: 100%;
      background: #0a0a0a;
      border-right: 2px solid #262626;
      display: flex; /* Use flexbox */
      flex-direction: column; /* Arrange children vertically */
      justify-content: center; /* Vertically center children */
      align-items: center; /* Horizontally center children */
      color: #fff2eb;
    }
    .cpbutton:first-child{
        border-left: 2px solid #262626;

    }
    .btitle {
      width: 100%;
      font-weight: lighter;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      text-align: center;
      margin-bottom: 1vh;
    }
  
    .btneffect {
      height: 5%;
      width: 40%;
      background: linear-gradient(to right, #ff5e00,#ff7800,#ff7800,#ff5e00);
      border-radius: 10px;
      box-shadow: 0 0 15px #ff7800;
    }
    .cpbtnsicons{
        width: 4vh;
        height: 4vh;
        margin-bottom: 1vh;

    }
    @keyframes bluricon {
        0%{}
        100%{scale: 1.3;
            }
    }
  </style>
  
  <div class="cpbutton">
       <span class="btitle">{buttonText}</span>
    <img class="cpbtnsicons" alt="" src="{iconurl}">
    <div class="btneffect"></div>
  </div>
  
<style>
    .Titlecont {
      background: linear-gradient(to right, transparent, transparent, hsla(0, 0%, 10%, 0.6),transparent, transparent);
      position: absolute;
      width: 100vw;
      height: 15vh;
      display: flex; /* Use flexbox */
      flex-direction: column; /* Arrange children vertically */
      justify-content: center; /* Vertically center children */
      align-items: center; /* Horizontally center children */
      box-shadow: inset 0 10px 10px -10px #de6700; 
    
      margin: 0 auto;
      transition: height 0.5s ease-in-out; /* Smooth transition for height change */

    }
  
    h1 {
      font-size: 60px;
      color: #fff2eb;
      margin: 0;
      font-weight: 400;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      text-shadow: 0 0 10px #de6700;
      cursor: default;
      transition: transform 0.5s ease-in-out; /* Smooth transition for scaling */
    }
  
    h2 {
      color: #ffd9c2;
      margin: 0;
      font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-weight: lighter;
      text-shadow: 0 0 5px #de6700;
      cursor: default;
      transition: transform 0.5s ease-in-out; /* Smooth transition for scaling */
    }

    h1:hover,
    h2:hover {
        transform: scale(1.1); /* Scale up on hover */
    }

    .Titlecont:hover{
        height: 13vh; /* Reduced height on hover */

    }
</style>

  
  <div class="Titlecont">
    <h1>MENA Countries</h1>
    <h2>Analytics Dashboard</h2>
  </div>
  
import "./box.css";

function Box() {
  return (
    <div className="Box">
      <div className="cube-container">
        <img src="/cube.png" className="cube" alt="Cube" />
        <img src="/eye.png" className="eye" alt="Eye" />
      </div>
      <div className="text-group">
        <p className="box-text">Equilibrium #3429</p>
        <p className="additional-text">
          Our Equilibrium collection promotes <br /> balance and calm.
        </p>
        <div className="info-row">
          <div className="left-side">
            <img src="/crystal.png" className="crystal" alt="Crystal" />
            <span className="small-text">0.041 ETH</span>
          </div>

          <div className="right-side">
            <img src="/clock.png" className="clock" alt="Clock" />
            <span className="small-text2">3 days left</span>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="bottom-row">
        <img src="/profile.png" alt="Profile" />
        <span className="profile-text">Creation of</span>
        <span className="profile-text2">Jules Wyvern</span>
      </div>
    </div>
  );
}

export default Box;

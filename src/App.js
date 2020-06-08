//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import BottomRow from "./BottomRow";
import "./App.css";




function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [currentHomeScore,homeScorePoint]=useState(0)

  const [currentAwayScore, awayScorePoint]= useState(0)

  const homeTouchDown = event =>{
     homeScorePoint(currentHomeScore + 7)
  }
  const hoemFeildGoal = event =>{
    homeScorePoint(currentHomeScore + 3)
  }

  const awayTouchDown = event =>{
    awayScorePoint(currentAwayScore + 7)
 }
 const awayFeildGoal = event =>{
  awayScorePoint(currentAwayScore + 3)
}
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>
              
            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
  <div className="home__score">{currentHomeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
  <div className="away__score">{currentAwayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick= {homeTouchDown} className="homeButtons__touchdown" >Home Touchdown</button>
          <button onClick={hoemFeildGoal} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown"onClick= {awayTouchDown} >Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={awayFeildGoal}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;

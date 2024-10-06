import React from 'react';
import {useState, useEffect} from 'react';
import { Flex, Progress } from 'antd';
import { Select } from "antd";
import ReactPlayer from 'react-player'
import { TypeAnimation } from 'react-type-animation';
import ClipLoader from "react-spinners/ClipLoader";


import { Button, Space, DatePicker, version } from 'antd';

const AnimationsForChaining = ["swing", "flipSlowDown", "fadeOutToBottom", "jelly"]

const AnimationChain = (what) => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        what
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={1}
    />
  );
};

// Intro
const Intro = (finished_function) => {
    const [counter, setCounter] = useState(0);

  
    setTimeout(
      ()=>{
        setCounter(counter + 10);
      }
      ,100
    );

    if (counter>=100) {      
      finished_function.increaseDiv();
    }

    return (
      <div style={{ backgroundColor: "black" }}>
        <img src="/img/background_intro.jpg" style={{width: "100%", zIndex: -9999}}></img>

        <Progress percent={counter} status="active" style={{ top: "-115px", zIndex: 9999, float: "left", left: "250px", width: "370px", zIndex: 9999}}/>
      </div>
    );
}


// Select Players
const SelecPlayers = (finished_function) => {

  const audio = new Audio("/audio/bing.mp3");

  const [players, setPlayers] = useState(0);

  function addPlayer(){    
    audio.play();
    setPlayers(players+1);
  }

  return (
    <div style={{ backgroundColor: "black", height: "500px", color :"white" }}>

      <img src="/img/selectplayer.jpg" style={{width: "100%", zIndex: -9999}}></img>

      <div style={{ zIndex: 9999, float: "left", marginTop: "-330px", marginLeft: "60px", padding: "30px", width: "80%",}}>
            <center><h2> Select Number of Players </h2></center>
            <br/>
            <br/>
            <center><h3> Number of players in the ISS: {players} </h3></center>
            <br/>
            <br/>            
            <br/>

            <Button type="primary" onClick={()=>{addPlayer()}} style={{float: "left", marginLeft: "5px"}}>Single Player</Button>

            <Button type="primary" onClick={()=>{addPlayer()}} style={{float: "right", marginRight: "20px"}}>Multiplayer</Button>


            <br/>
            <br/>
            <br/>
            { false &&
              <>
                  Select Song:<br/>
                  <Select style={{width: "200px"}} onChange={()=>{

                  }}>
                    <Select.Option value="sample">YMCA</Select.Option>
                  </Select>    
              </>              
            }
            
            <br/>
            <br/>

            {
              players>0 &&
              <Button type="primary" onClick={()=>{
                finished_function.increaseDiv();
              }} style={{float: "right", marginRight: "250px", marginTop: "-200px"}}>Let's start!</Button>
            }
            

      </div>



    </div>
  );
}

// Select Songs
const SelecSongs= (finished_function) => {
  const [showButton, setShowButton] = useState(false);

  const audio = new Audio("/audio/bing.mp3");
  const audio2 = new Audio("/audio/bing2.mp3");

  return (
    <div style={{ backgroundColor: "black", height: "500px", color :"white" }}>

      <img src="/img/selectSongs.jpg" style={{width: "100%", zIndex: -9999, float: "left"}}></img>

      <div style={{ zIndex: 9999, float: "left", marginTop: "-420px", marginLeft: "0px", padding: "30px", width: "80%",}}>

          <h2>Select Song</h2>
          <Select
              style={{width: "260px"}}
              showSearch
              placeholder="Select song"
              optionFilterProp="label"
              onChange={()=>{
                audio2.play();
                setShowButton(true);
              }}
              onSearch={()=>{}}
              options={[
                { "value": 0, "label": "Spaceboats - Nicka Minah" },
                { "value": 1, "label": "Cosmic Boy - Jamirowhat" },
                { "value": 2, "label": "Space Tune - Seahouse" },
                { "value": 3, "label": "Space Oxidity - Dave Arrowie" },
                { "value": 4, "label": "Starwoman - Dave Arrowie" },
                { "value": 5, "label": "Motel California - Pidgeons" },
                { "value": 6, "label": "Spaceship - K. East" },
                { "value": 7, "label": "Galactic Love - Florencia & machines" },
                { "value": 8, "label": "Are you sirius? - The Manhattan project" },
                { "value": 9, "label": "Spaceboats - Nicka Minah" },
                { "value": 10, "label": "Cosmic Boy - Jamirowhat" },
                { "value": 11, "label": "Space Tune - Seahouse" },
                { "value": 12, "label": "Space Oxidity - Dave Arrowie" },
                { "value": 13, "label": "Starwoman - Dave Arrowie" },
                { "value": 14, "label": "Motel California - Pidgeons" },
                { "value": 15, "label": "Spaceship - K. East" },
                { "value": 16, "label": "Galactic Love - Florencia & machines" },
                { "value": 17, "label": "Are you sirius? - The Manhattan project" }
              ]}
            />

          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

          <br/>
          <br/>
          <br/>
          {
            showButton &&
            <Button type="primary" onClick={()=>{
              audio.play();
              finished_function.increaseDiv()}} style={{float: "left", marginLeft: "1px", border: "1px solid white"}}>Let's Dance!</Button>
          }
          

      </div>



    </div>
  );
}

// Song Info
const SongInfo= (finished_function) => {
  const [showButton, setShowButton] = useState(false);
  const audio = new Audio("/audio/bing.mp3");

  return (
    <div style={{ backgroundColor: "black", height: "500px", color :"white" }}>

      <img src="/img/songInfo.jpg" style={{width: "100%", zIndex: -9999, float: "left"}}></img>

      <div style={{ zIndex: 9999, float: "left", marginTop: "-420px", marginLeft: "0px", padding: "30px", width: "80%",}}>

          <h2>Select Song</h2>


          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <img src="https://mikael.neocities.org/collections/disc-gifs/cd_010.gif" style={{width: "50px", float: "left", top: "-100px", left: "40px"}}/>
          <br/>
          <br/>
          <br/>

          <Button type="primary" onClick={()=>{
            audio.play();
            finished_function.increaseDiv()}} style={{float: "right", marginRight: "20px", bottom: "-140px",border: "1px solid white"}}>Continue!</Button>
      

      </div>



    </div>
  );
}


// Loading screen
const LoadingScreen= (finished_function) => {
  const [showButton, setShowButton] = useState(false);

  setTimeout(
    ()=>{
      finished_function.increaseDiv();
    }, 1500
  )

  return (
    <div style={{ backgroundColor: "black", height: "500px", color :"white" }}>

      <img src="/img/loading.jpg" style={{width: "100%", zIndex: -9999, float: "left"}}></img>

      <div style={{ zIndex: 9999, float: "left", marginTop: "-420px", marginLeft: "0px", padding: "30px", width: "80%",}}>

          <h2 style={{float: "left", position: "relative", top: "40px", left: "70px"}}>
            <center>
              In the song you have chosen<br/>
              you’ll workout the following muscle groups:
            </center>
            </h2>

          <br/>
          <br/>
          <br/>
          <div style={{float: "left", position: "relative", top: "130px", left: "310px"}}>
              <ClipLoader

                  color={"white"}
                  loading={true}
                  size={120}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />          

          </div>
      

      </div>



    </div>
  );
}



// Show Video
const ShowVideo = (finished_function) => {
  const [players, setPlayers] = useState(0);

  const audio = new Audio("/audio/dingding.mp3");

  const [message, setMessage] = useState("");

  let points1=0;
  let points2=0;
  let points3=0;
  let points4=0;


  const [points1_, setMessageP1] = useState("0");
  const [points2_, setMessageP2] = useState("0");
  const [points3_, setMessageP3] = useState("0");
  const [points4_, setMessageP4] = useState("0");

  let sequence_counter=0;
  let sequence = [
    {"time": 200, "text": "Let's dance!!", "player1_inc": 0, "player2_inc": 30, "player3_inc": 0, "player4_inc": 0,},
    {"time": 2800, "text": "", "player1_inc": 10, "player2_inc": 10, "player3_inc": 10, "player4_inc": 10,},
    {"time": 200, "text": "Player 2: perfect!!", "player1_inc": 0, "player2_inc": 30, "player3_inc": 0, "player4_inc": 0,},
    {"time": 2800, "text": "", "player1_inc": 10, "player2_inc": 10, "player3_inc": 10, "player4_inc": 10,},
    {"time": 1200, "text": "Good job Player 3!!", "player1_inc": 0, "player2_inc": 0, "player3_inc": 30, "player4_inc": 0,},
    {"time": 2800, "text": "", "player1_inc": 10, "player2_inc": 10, "player3_inc": 10, "player4_inc": 10,},
    {"time": 200, "text": "", "player1_inc": 0, "player2_inc": 0, "player3_inc": 0, "player4_inc": 40,},    
    {"time": 2800, "text": "", "player1_inc": 10, "player2_inc": 10, "player3_inc": 10, "player4_inc": 10,},
    {"time": 200, "text": "Player 4: missed to grab the handle", "player1_inc": 0, "player2_inc": 0, "player3_inc": 0, "player4_inc": -20,},
    {"time": 2800, "text": "", "player1_inc": 10, "player2_inc": 10, "player3_inc": 10, "player4_inc": 10,},
    {"time": 2800, "text": "", "player1_inc": 10, "player2_inc": 10, "player3_inc": 10, "player4_inc": 10,},    
    {"time": 2800, "text": "Raise your arms!!", "player1_inc": 10, "player2_inc": 10, "player3_inc": 10, "player4_inc": 10,},
    {"time": 200, "text": "Perfect everyone!", "player1_inc": 50, "player2_inc": 50, "player3_inc": 50, "player4_inc": 50,},        
  ]
  
  function tick(){
    setTimeout(
      ()=>{
        if(sequence_counter>=sequence.length){ console.log("Finished!"); return }
        //console.log(sequence[sequence_counter]);
        setMessage(sequence[sequence_counter].text);

        if(sequence[sequence_counter].text.length>0) {
          audio.play();
        }
        
        
        points1 = (parseInt(points1)  + sequence[sequence_counter]["player1_inc"]).toString();
        points2 = (parseInt(points2)  + sequence[sequence_counter]["player2_inc"]).toString();
        points3 = (parseInt(points3)  + sequence[sequence_counter]["player3_inc"]).toString();
        points4 = (parseInt(points4)  + sequence[sequence_counter]["player4_inc"]).toString();
        
        setMessageP1(points1 );
        setMessageP2(points2 );
        setMessageP3(points3 );
        setMessageP4(points4 );

        sequence_counter=sequence_counter+1;
        setTimeout(()=>{
          setMessage("");
        }, 2400);
        
        tick();      
        
      }
      , sequence[sequence_counter]?sequence[sequence_counter]["time"]:10000
    );  
  }

  useEffect(
    ()=>{
      //tick();
    }, []
  )
  

  function addPlayer(){
    setPlayers(players+1);
  }

  // Final div
const FinalDiv= (finished_function) => {
  const [showButton, setShowButton] = useState(false);


  return (
    <div style={{ backgroundColor: "black", height: "500px", color :"white" }}>
    </div>
  );
}

  return (
    <div style={{ backgroundColor: "black", height: "500px", color :"white" }}>

      <div style={{width :"300px", height: "300px", marginLeft: "80px", marginTop: "5px"}}>

        <table>
          <tr>
            <td>
              <center>
                <ReactPlayer 
                  url='/video/esa_astronauts.mp4' 
                  playing={true}
                  controls={false}
                  loop={false}
                  muted={true}
                  playsinline={true}        
                  onEnded={()=>{
                    finished_function.increaseDiv();
                  }}
                  onPlay={()=>{
                    setMessageP1("0");
                    setMessageP2("0");
                    setMessageP3("0");
                    setMessageP4("0");

                    tick();
                  }}
                />
              </center>
            </td>
          </tr>
          <tr>
            <td>
              <center>  
                  
              </center>
            </td>
          </tr>
          <tr>
            <td>
              <table style={{width: "100%"}}>
                <tr>
                  <td style={{textAlign: 'left', paddingLeft: "30px"}}><span style={{fontSize: "180%", color: "lightblue"}}><img src="/img/astro_red.jpg" style={{width: "40px", marginTop: "-8px", float: "left", marginRight: "8px"}}/>Player 1</span>: 
                        &nbsp;&nbsp;<span style={{fontSize: "180%", color: ""}}>{points1_}</span> points</td>
                  <td>&nbsp;</td>
                  <td ><span style={{fontSize: "180%", color: "lightblue"}}><img src="/img/astro_blue.jpg" style={{width: "40px", marginTop: "-8px", float: "left", marginRight: "8px"}}/>Player 2</span>: 
                        &nbsp;&nbsp;<span style={{fontSize: "180%", color: ""}}>{points2_}</span> points</td>
                </tr>
                <tr><td style={{height: "20px"}}></td></tr>
                <tr>
                  <td style={{textAlign: 'left', paddingLeft: "30px"}}><span style={{fontSize: "180%", color: "lightblue"}}><img src="/img/astro_yellow.jpg" style={{width: "40px", marginTop: "-8px", float: "left", marginRight: "8px"}}/>Player 3</span>: 
                        &nbsp;&nbsp;<span style={{fontSize: "180%", color: ""}}>{points3_}</span> points</td>
                  <td>&nbsp;</td>
                  <td ><span style={{fontSize: "180%", color: "lightblue"}}><img src="/img/astro_green.jpg" style={{width: "40px", marginTop: "-8px", float: "left", marginRight: "8px"}}/>Player 4</span>: 
                      &nbsp;&nbsp;<span style={{fontSize: "180%", color: ""}}>{points4_}</span> points</td>
                </tr>                
              </table>
            </td>
          </tr>

        </table>

        <div style={{position: "absolute", top: "52%", "left": "15%", background: "#000a", color: "yellow"}}>

            { message.length>0 &&

                AnimationChain(message)
            }

        </div>

      </div>


    </div>
  );
}


// Final Score screen
const FinalScore= (finished_function) => {
  const [showButton, setShowButton] = useState(false);

  const audio = new Audio("/audio/bing.mp3");


  return (
    <div style={{ backgroundColor: "black", height: "500px", color :"white" }}>

      <img src="/img/final_score.png" style={{width: "100%", zIndex: -9999, float: "left"}}></img>

      <div style={{ zIndex: 9999, float: "left", marginTop: "-420px", marginLeft: "0px", padding: "30px", width: "80%",}}>


        <Button type="primary" onClick={()=>{
              audio.play();
              finished_function.increaseDiv()}} style={{float: "right", marginRight: "-90px", bottom: "-340px",border: "1px solid white"}}>Continue!</Button>


      </div>



    </div>
  );
}

// Final Score screen
const Credits= (finished_function) => {
  const [showButton, setShowButton] = useState(false);

  const audio = new Audio("/audio/bing.mp3");


  return (
    <div style={{ backgroundColor: "black", height: "500px", color :"white" }}>
      <div style={{ zIndex: 9999, float: "left", marginTop: "-20px", marginLeft: "0px", padding: "30px", width: "80%",}}>
        <h3>This game was brought to you by:</h3>
        <h1 style={{fontSize: "250%", marginTop: "-20px"}}>Kukan Team</h1>

        <div style={{float: "left", marginLeft: "-30px", marginTop: "0px"}}>
                <ReactPlayer 
                  width="850px"
                  url='/video/kukan.mp4' 
                  playing={true}
                  controls={false}
                  loop={false}
                  muted={true}
                  playsinline={true}        
                  onEnded={()=>{
                    //finished_function.increaseDiv();
                  }}
                  onPlay={()=>{
                  }}
                />
              </div>        

        <Button type="primary" onClick={()=>{
              audio.play();
              finished_function.increaseDiv()}} style={{float: "right", marginRight: "-90px", bottom: "-240px",border: "1px solid white"}}>Continue!</Button>


      </div>



    </div>
  );
}



const ShowDiv = () => {
  const [visibleDiv, setVisibleDiv] = useState(0)

  function increaseDiv(){
    setVisibleDiv(visibleDiv+1);
  }
  
    if (visibleDiv==0){
      return (<Intro increaseDiv={increaseDiv} /> );      
    } else if(visibleDiv==1){
      return (<SelecPlayers increaseDiv={increaseDiv} /> )
    } else if(visibleDiv==2){
      return (<SelecSongs increaseDiv={increaseDiv} /> )
    } else if(visibleDiv==3){      
      return (<SongInfo increaseDiv={increaseDiv} /> )
    } else if(visibleDiv==4){      
      return (<LoadingScreen increaseDiv={increaseDiv} /> )            
    } else if(visibleDiv==5){      
      return (<ShowVideo increaseDiv={increaseDiv} /> )
    } else if(visibleDiv==6){      
      return (<FinalScore increaseDiv={increaseDiv} /> )
    } else if(visibleDiv==7){      
      return (<Credits increaseDiv={increaseDiv} /> )

    } else {
      return (<p>asda</p>)
    }

  
}


const App = () => {

  return (
    <>
      <div style={{width: "100%", height: "80px", padding: "3px"}}>
        <img src="/img/logoNasa.png" style={{height: "60px"}}/>
        <img src="/img/spaceapps.png" style={{height: "60px", float: "right", marginRight: "5px"}}/>
      </div>

      <div style={{width: "100%", height: "505px", padding: "-5px", margin: "-5px",border: "1px solid grey"}}>
          <ShowDiv/>
      </div>

      
    </>

  )
  
}


export default App;
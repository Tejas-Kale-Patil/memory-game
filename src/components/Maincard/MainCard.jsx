import React, { Fragment } from 'react';
import "./maincard.css";
import Box from '../Box/Box';
import { useState } from 'react';
import deadpool from "../images/deadpool.png";
import ironman from "../images/ironman.png";
import natasha from "../images/natasha.png";
import captain from "../images/captain.png";
import doctor from "../images/doctor.png" ;
import avengers from "../images/avengers.png";
import hulk from "../images/hulk.png";
import thor from "../images/thor.png";

const MainCard = () => {
    const [images,setImages] = useState([
        {id:1 , superHero:natasha, status:"" },
        {id:1 , superHero:natasha  , status: ""},
        {id:2 , superHero:captain  , status: ""},
        {id:2 , superHero:captain  , status: ""},
        {id:3 , superHero:deadpool  , status: ""},
        {id:3 , superHero:deadpool  , status: ""},
        {id:4 , superHero:doctor  , status: ""},
        {id:4 , superHero:doctor  , status: ""},
        {id:5 , superHero:avengers  , status: ""},
        {id:5 , superHero:avengers  , status: ""},
        {id:6 , superHero:ironman, status: ""},
        {id:6 , superHero:ironman  , status: ""},
        {id:7 , superHero:hulk  , status: ""},
        {id:7 , superHero:hulk  , status: ""},
        {id:8 , superHero:thor  , status: ""},
        {id:8 , superHero:thor  , status: ""}
    ].sort(()=> Math.random() - 0.5))

   
    const [prev, setPrev] = useState(-1);
    let [clickedCount,setClickedCount]=useState(0);

    function check(current){
        if(images[current].id === images[prev].id && images.indexOf(images[current])!== images.indexOf(images[prev])){
            images[current].status = "correct "
            images[prev].status = "correct "
            setImages([...images])
            setPrev(-1)   
        }else{
            images[current].status = "wrong"
            images[prev].status = "wrong"
            setImages([...images])
            setTimeout(() => {
                images[current].status = ""
                images[prev].status = ""
                setImages([...images])
                setPrev(-1)
            }, 1000)
        }
    }

    function handleClick(id){

      setClickedCount(clickedCount+1);
        if(prev === -1){
            images[id].status = "active";
            setImages([...images])
            setPrev(id)
        }else{
            check(id)
        }
    }
    function newGame() {
        window.location.reload(false);
      }

      function congmsg() {
        <div>
            <h3>
                Congratulations !!!! You have won the game.
            </h3>
        </div>
    }

   

    

  return (
    <Fragment>
        <div className="container">
        <nav className='navbar'>
        <h1>Memory-Game</h1>
        <button className='btn' onClick={newGame}>
            New Game
        </button>
        </nav>
        <div className='score'>
            <h1>
                Attempts:{clickedCount} 
            </h1>
        </div>
        <div className='card'>
               { images.map((image,index)=>{
                     return   (
                      <Box key={index} handleClick={handleClick} image={image} index={index} />
                     )
                })}
        </div>    
        </div>
    </Fragment>
  )
}

export default MainCard
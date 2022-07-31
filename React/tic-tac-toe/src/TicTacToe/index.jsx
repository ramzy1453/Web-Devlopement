import { useEffect, useState } from "react"
import Modal from "react-modal"
import { isWin } from "./code"
import "./styles.css"

let carte
export function TicTacToe(){
    const [win, hasWon] = useState(false)
    carte = Array(9).fill("")
    return(
        <div className="ttt">
            <Modal isOpen={win} ariaHideApp={false} className="modal">
                <div className="title">
                    You won !
                </div>
                <div className="button" onClick={() => {
                    window.location.reload()
                }}>
                    Reset
                </div>
            </Modal>
            <h1 className="title">TIC <span style={{color:"#0f9447"}}>TAC</span> TOE</h1>
            <Message win={win}/>
            <Table win={win} hasWon={hasWon}/>
        </div>
    )
}

function Message({win}){
    
    return(
        <div className="message">
            Next player is <span>O</span>
        </div>
    )
}

function Table({win , hasWon}){
    return(
        <div className="table">
            <Square cle={1} right hasWon={hasWon}/>
            <Square cle={2} hasWon={hasWon}/>
            <Square cle={3} left hasWon={hasWon}/>
            <Square cle={4} down up hasWon={hasWon}/>
            <Square cle={5} left up down hasWon={hasWon}/>
            <Square cle={6} down left up hasWon={hasWon}/>
            <Square cle={7} right hasWon={hasWon}/>
            <Square cle={8} hasWon={hasWon}/>
            <Square cle={9} left hasWon={hasWon} />
            
        </div>
    )
}

function Square({cle , up=false,down=false,right=false,left=false ,hasWon}){
    const [caza , setCase] = useState("")
    console.log(caza);
    return(
        <div style={{
            borderTop : up ? "2px black solid" : null,
            borderBottom : down ? "2px black solid" : null,
            borderLeft : left ? "2px black solid" : null,
            borderRight : right ? "2px black solid" : null,
            color : caza === "O" ? "#0f9447" : "red"
        }} className="square" 
        onClick={() => {
            carte[cle - 1] = caza === "" ? "O" : caza === "O" ? "X" : ""
            setCase(caza === "" ? "O" : caza === "O" ? "X" : "")
            if(isWin(carte)) hasWon(true)
        }}
        >
        {caza}
        </div>
    )
}
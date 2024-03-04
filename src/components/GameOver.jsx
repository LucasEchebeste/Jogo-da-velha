import React from "react";
import GameState from "./GameState";

function GameOver({ gameState }) {
  switch (gameState) {
    case GameState.inProgress:
      return <></>;
    case GameState.playerOWins:
      return <div className="game-over">O Venceu</div>;
    case GameState.playerXWins:
      return <div className="game-over">X Venceu</div>;
    case GameState.draw:
      return <div className="game-over">Empate</div>;
    default:
      return <></>;
  }
}

export default GameOver;
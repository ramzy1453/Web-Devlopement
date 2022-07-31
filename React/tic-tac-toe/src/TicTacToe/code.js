export const isWin = carte => 
(((carte[0] === carte[1] && carte[0] === carte[2]) && (carte[0] === "O" || carte[0] === "X")) ||
((carte[3] === carte[4] && carte[3] === carte[5]) && (carte[3] === "O" || carte[3] === "X")) ||
((carte[6] === carte[7] && carte[6] === carte[8]) && (carte[6] === "O" || carte[6] === "X")) ||
((carte[0] === carte[3] && carte[0] === carte[6]) && (carte[0] === "O" || carte[0] === "X")) ||
((carte[1] === carte[4] && carte[1] === carte[7]) && (carte[1] === "O" || carte[1] === "X")) ||
((carte[2] === carte[5] && carte[2] === carte[8]) && (carte[2] === "O" || carte[2] === "X")) ||
((carte[2] === carte[4] && carte[2] === carte[6]) && (carte[2] === "O" || carte[2] === "X")) ||
((carte[0] === carte[4] && carte[0] === carte[8]) && (carte[0] === "O" || carte[0] === "X")))




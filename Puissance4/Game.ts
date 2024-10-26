import { question } from 'readline-sync';
import { Grid } from "./Grid";
import { Token } from "./Token";
import { TokenColor } from './TokenColor';

export class Game {
    private isGameFinished: boolean;
    private gameGrid: Grid;
    private movesCounter: number;
    private winner: string;
    private currentUser: Token;

    constructor() {
        this.gameGrid = new Grid();
        this.currentUser = new Token(TokenColor.JAUNE);
        this.isGameFinished = false;
        this.movesCounter = 0;
    }

    private isWinnerFound(): boolean {
        let grid: Token | undefined[][] = this.gameGrid.getGrid;

        // get winner horizontally
        for (let i = this.gameGrid.getRows - 1; i > -1; i--) {
            let cnt: number = 0;
            for (let j = 0; j < grid[i].length; j++) {
                if (cnt == 3) {
                    return true;
                }
                
                if (grid[i][j] == undefined || grid[i][j+1] == undefined) {
                    continue;
                }

                if (grid[i][j].color == grid[i][j+1].color) {
                    cnt++;
                    continue;
                } else {
                    cnt = 0;
                    continue;
                }
            }
        }  

        // get winner vertically
        for (let i = 0; i < this.gameGrid.getCols; i++) {
            let cnt: number = 0;

            for (let j = this.gameGrid.getRows - 1; j > -1; j--) {
                if (cnt == 3) {
                    return true;
                }

                if (grid[j][i] == undefined || grid[j-1][i] == undefined) {
                    continue;
                }
                
                if (grid[j][i].color == grid[j-1][i].color) {
                    cnt++;
                    continue;
                } else {
                    cnt = 0;
                    continue;
                }
            }
        } 

        // get winner diagonally from left to right
        for (let i = 0; i < this.gameGrid.getCols; i++) {
            let cnt: number = 0;

            for (let j = this.gameGrid.getRows - 1; j > -1; j--) {
                if (cnt == 3) {
                    return true;
                }

                if (grid[j][i] == undefined || grid[j-1][i+1] == undefined) {
                    continue;
                }
                
                if (grid[j][i].color == grid[j-1][i+1].color) {
                    i++;
                    cnt++;
                    continue;
                } else {
                    cnt = 0;
                    continue;
                }
            }
        } 

        // get winner diagonally from right to left
        for (let i = this.gameGrid.getCols - 1; i > -1; i--) {
            let cnt: number = 0;

            for (let j = this.gameGrid.getRows - 1; j > -1; j--) {
                if (cnt == 3) {
                    return true;
                }

                if (grid[j][i] == undefined || grid[j-1][i-1] == undefined) {
                    continue;
                }
                
                if (grid[j][i].color == grid[j-1][i-1].color) {
                    i--;
                    cnt++;
                    continue;
                } else {
                    cnt = 0;
                    continue;
                }
            }
        } 

        return false;
    }

    private isColumnFilled(column: number): boolean {
        if (this.gameGrid.getGrid[0][column - 1] != undefined) {
            return true;
        }

        return false;
    }

    public startGame(): void {
        console.log(this.gameGrid.createEmptyGrid());
        // show grid
        console.log(this.gameGrid.showGrid());
        
        // make moves until one of the users wins
        // or while there are empty places
        while(!this.isGameFinished) {
            // get column number
            let colNumber: number = Number(question('Entrez le numéro de colonne : '));
            
            // check if input contains numbers
            if (isNaN(colNumber)) {
                colNumber = Number(question('Il faut entrez les nombres entre 1 et 7 : '));
            }
            // check if column is filled
            if (this.isColumnFilled(colNumber)) {
                colNumber = Number(question('Le colonne est rempli, choisissez autre : '));
            }
            
            // make move
            this.gameGrid.makeMove(this.currentUser, colNumber);

            // show grid
            console.log('\n');
            console.log(this.gameGrid.showGrid());

            if (this.movesCounter > 5) {
                // check if there is a winner
                if (this.isWinnerFound()) {
                    this.isGameFinished = true;
                    break;
                }
            }

            // change current user
            this.currentUser.getColor == TokenColor.JAUNE 
                ? this.currentUser = new Token(TokenColor.ROUGE) : this.currentUser = new Token(TokenColor.JAUNE);

            this.movesCounter++;
        }

        if (this.movesCounter == 42 && this.winner == undefined) {
            console.log(`Il n'y a pas de gagnant.`);    
        } else {
            this.currentUser.getColor == 0 ? this.winner = 'jaune' : this.winner = 'rouge';
            console.log(`${this.winner} a gagné. Félicitations !`);
        }
    }
}
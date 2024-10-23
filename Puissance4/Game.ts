const readlineSync = require('readline-sync');
import { Grid } from "./Grid";
import { Token } from "./Token";

export class Game {
    private isGameFinished: boolean = false;
    private readonly pionUser1: Token = new Token('jaune');
    private readonly pionUser2: Token = new Token('rouge');
    private currentUser: Token;
    private currentPion: string;
    private readonly gameGrid: Grid = new Grid();
    private movesCounter: number = 0;
    private winner: string;

    private isWinnerFound(): boolean {
        let winCombination1: string = 'oooo';
        let winCombination2: string = 'xxxx';
        let grid: string[][] = this.gameGrid.getGrid;

        // get winner horizontally
        for (let i = grid.length - 1; i > -1; i--) {
            for (let j = 0; j < grid[i].length - 3; j++) {
                if (grid[i].slice(j, j+4).join('') == winCombination1) {
                    this.winner = 'user1';

                    return true;
                } else if (grid[i].slice(j, j+4).join('') == winCombination2) {
                    this.winner = 'user2';

                    return true;
                } else {
                    continue;
                }
            }
        }  

        // get winner vertically
        for (let i = grid.length - 1; i >= 3; i--) {
            let strTmp: string = '';

            for (let j = 0; j < grid[i].length; j++) {
                strTmp = grid[i][j] + grid[i-1][j] + grid[i-2][j] + grid[i-3][j];

                if (strTmp == winCombination1) {
                    this.winner = 'user1';

                    return true;
                } else if (strTmp == winCombination2) {
                    this.winner = 'user2';

                    return true;
                } else {
                    continue;
                }
            }
        } 

        // get winner diagonally from left to right
        for (let i = grid.length - 1; i >= 3; i--) {
            let strTmp: string = '';

            for (let j = 0; j < grid[i].length - 3; j++) {
                strTmp = grid[i][j] + grid[i-1][j+1] + grid[i-2][j+2] + grid[i-3][j+3];

                if (strTmp == winCombination1) {
                    this.winner = 'user1';

                    return true;
                } else if (strTmp == winCombination2) {
                    this.winner = 'user2';

                    return true;
                } else {
                    continue;
                }
            }
        }

        // get winner diagonally from right to left
        for (let i = grid.length - 1; i >= 3; i--) {
            let strTmp: string = '';

            for (let j = grid[i].length - 1; j >= 3; j--) {
                strTmp = grid[i][j] + grid[i-1][j-1] + grid[i-2][j-2] + grid[i-3][j-3];

                if (strTmp == winCombination1) {
                    this.winner = 'user1';

                    return true;
                } else if (strTmp == winCombination2) {
                    this.winner = 'user2';

                    return true;
                } else {
                    continue;
                }
            }
        }

        return false;
    }

    private isColumnFilled(column: number): boolean {
        if (this.gameGrid.getGrid[0][column - 1] != '') {
            return true;
        }

        return false;
    }

    public startGame(): void {
        // create empty grid
        this.gameGrid.createEmptyGrid();
        // show grid
        console.log(this.gameGrid.showGrid());

        // make moves until one of the users wins
        // or while there are empty places
        while(!this.isGameFinished) {
            // get current user
            this.currentUser == this.pionUser1 ? this.currentUser = this.pionUser2 : this.currentUser = this.pionUser1;
            this.currentUser.getColor == 'jaune' ? this.currentPion = 'o' : this.currentPion = 'x';
            
            // get column number
            let colNumber = readlineSync.question('Entrez le numéro de colonne : ');
            
            // check if input contains numbers
            if (colNumber.match(/^[1-9]+$/) == null) {
                colNumber = readlineSync.question('Il faut entrez les nombres entre 1 et 7 : ');
            }
            // check if column is filled
            if (this.isColumnFilled(colNumber)) {
                colNumber = readlineSync.question('Le colonne est rempli, choisissez autre : ');
            }
            
            // make move
            this.gameGrid.makeMove(this.currentPion, colNumber);

            // show grid
            console.log('\n');
            console.log(this.gameGrid.showGrid());

            this.movesCounter++;
            
            if (this.movesCounter > 6) {
                if (this.isWinnerFound()) {
                    this.isGameFinished = true;
                }
            }
        }

        if (this.movesCounter == 42 && this.winner == undefined) {
            console.log(`Il n'y a pas de gagnant.`);    
        } else {
            console.log(`${this.winner} a gagné. Félicitations !`);
        }
    }
}

let game = new Game();
game.startGame();
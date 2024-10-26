import { Token } from "./Token";

export class Grid {
    private grid: Token | undefined[][];
    private rows: number;
    private cols: number;

    constructor() {
        this.grid = [];
        this.rows = 6,
        this.cols = 7
    }

    get getGrid(): Token | undefined[][] {
        return this.grid;
    }

    get getRows(): number {
        return this.rows;
    }

    get getCols(): number {
        return this.cols;
    }

    public makeMove(token: Token, column: number): void {
        for (let i = this.rows - 1; i > -1; i--) {
            if (this.grid[i][column - 1] == undefined) {
                this.grid[i][column - 1] = token;

                break;
            }
        }
    }

    public createEmptyGrid(): void {
        for (let i = 0; i < this.rows; i++) {
            this.grid[i] = [];
            
            for (let j = 0; j < this.cols; j++) {
               this.grid[i][j] = undefined;
            }
        }
    }

    public showGrid(): string {
        let gridHeader: string = '  1   2   3   4   5   6   7  \n';
        let gridTopBottomLine: string = '+---+---+---+---+---+---+---+\n';
        let gridRows: string = '';
        
        // draw the grid
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (this.grid[i][j] == undefined) {
                    gridRows += `|   `;
                } 

                if (this.grid[i][j] instanceof Token) {
                    this.grid[i][j].color == 0 ? gridRows += `| o ` : gridRows += `| x `;
                }
            }
            // draw the last column
            gridRows += '|\n';
        }

        return gridHeader + gridTopBottomLine + gridRows + gridTopBottomLine;
    }
}

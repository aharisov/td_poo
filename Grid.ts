export class Grid {
    private grid: string[][] = [];
    private rows: number = 6;
    private cols: number = 7;

    get getGrid() {
        return this.grid;
    }

    public makeMove(token: string, column: number): void {
        for (let i = this.rows - 1; i > -1; i--) {
            if (this.grid[i][column - 1] == '') {
                this.grid[i][column - 1] = token;

                break;
            }
            console.log(this.grid[i]);
        }
    }

    public createEmptyGrid(): void {
        for (let i = 0; i < this.rows; i++) {
            this.grid[i] = [];

            for (let j = 0; j < this.cols; j++) {
               this.grid[i][j] = '';
            }
        }
    }

    public showGrid(): string {
        let gridHeader: string = '  1   2   3   4   5   6   7  \n';
        let gridTopBottomLine: string = '+---+---+---+---+---+---+---+\n';
        let gridRows: string = '';
        let gridLastColumn: string = '';

        // draw the grid
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (this.grid[i][j] != '') {
                    gridRows += `| ${this.grid[i][j]} `;
                } else {
                    gridRows += `|   `;
                }
            }
            // draw the last column
            gridRows += '|\n';
        }

        return gridHeader + gridTopBottomLine + gridRows + gridTopBottomLine;
    }
}

// for testing
let test = new Grid();
console.log(test.createEmptyGrid());
test.makeMove('x', 1);
test.makeMove('o', 1);
test.makeMove('x', 5);
test.makeMove('o', 7);
test.makeMove('x', 7);
console.log(test.showGrid(), '\n');

// Given a 2D array of characters grid of size m x n, you need to find if there exists any cycle consisting of the same value in grid.

// A cycle is a path of length 4 or more in the grid that starts and ends at the same cell. From a given cell, you can move to one of the cells adjacent to it - in one of the four directions (up, down, left, or right), if it has the same value of the current cell.

// Also, you cannot move to the cell that you visited in your last move. For example, the cycle (1, 1) -> (1, 2) -> (1, 1) is invalid because from (1, 2) we visited (1, 1) which was the last visited cell.

// Return true if any cycle of the same value exists in grid, otherwise, return false.

//Solution
/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var containsCycle = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    
    const visited = Array.from({ length: m }, () => Array(n).fill(false));
    
    const directions = [[1,0], [-1,0], [0,1], [0,-1]];
    
    const dfs = (r, c, pr, pc, char) => {
        if (visited[r][c]) return true;
        
        visited[r][c] = true;
        
        for (let [dr, dc] of directions) {
            let nr = r + dr;
            let nc = c + dc;
            
            if (
                nr >= 0 && nr < m &&
                nc >= 0 && nc < n &&
                grid[nr][nc] === char
            ) {
                // skip the cell we came from
                if (nr === pr && nc === pc) continue;
                
                if (dfs(nr, nc, r, c, char)) {
                    return true;
                }
            }
        }
        
        return false;
    };
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!visited[i][j]) {
                if (dfs(i, j, -1, -1, grid[i][j])) {
                    return true;
                }
            }
        }
    }
    
    return false;
};
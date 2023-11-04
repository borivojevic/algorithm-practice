class Solution(object):

    def is_safe(self, i, j, grid, visited):
        row = len(grid)
        col = len(grid[0])
        return i >= 0 and i < row and j >=0 and j < col and grid[i][j] == "1" and visited[i][j] is False

    def dfs(self, i, j, grid, visited):
        row_index = [-1, 0, 0, 1]
        col_index = [0, -1, 1, 0]

        visited[i][j] = True

        for k in range(4):
            if self.is_safe(i + row_index[k], j + col_index[k], grid, visited):
                self.dfs(i + row_index[k], j + col_index[k], grid, visited)

    def numIslands(self, grid):
        """
        :type grid: List[List[str]]
        :rtype: int
        """
        row = len(grid)
        col = len(grid[0])

        visited = [[False for i in range(col)] for i in range(row)]
        count = 0

        for i in range(row):
            for j in range(col):
                if grid[i][j] == "1" and visited[i][j] is False:
                    self.dfs(i, j, grid, visited) 
                    count += 1

        return count

        
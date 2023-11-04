class Solution(object):

    def is_safe(self, i, j, image, search, visited):
        row = len(image)
        col = len(image[0])
        return i >= 0 and i < row and j >=0 and j < col and visited[i][j] is False and image[i][j] == search

    def dfs(self, i, j, image, search, replace, visited):
        row_index = [-1, 0, 0, 1]
        col_index = [0, -1, 1, 0]

        image[i][j] = replace
        visited[i][j] = True

        for k in range(4):
            if self.is_safe(i + row_index[k], j + col_index[k], image, search, visited):
                self.dfs(i + row_index[k], j + col_index[k], image, search, replace, visited)

    def floodFill(self, image, sr, sc, color):
        """
        :type image: List[List[int]]
        :type sr: int
        :type sc: int
        :type color: int
        :rtype: List[List[int]]
        """
        row = len(image)
        col = len(image[0])
        
        visited = [[False for i in range(col)] for i in range(row)]

        search = image[sr][sc]
        self.dfs(sr, sc, image, search, color, visited)

        return image
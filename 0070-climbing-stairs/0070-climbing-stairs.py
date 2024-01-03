class Solution(object):
    def climbStairs(self, n):
        """
        :type n: int
        :rtype: int
        """
        # base cases
        memo = {0: 0, 1: 1, 2: 2}

        for i in range(3, n+1):
            memo[i] = memo[i-1] + memo[i-2]
        
        return memo[n]
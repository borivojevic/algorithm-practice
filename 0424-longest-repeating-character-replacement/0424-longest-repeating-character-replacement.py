class Solution(object):
    def characterReplacement(self, s, k):
        """
        :type s: str
        :type k: int
        :rtype: int
        """
        left = 0
        right = 0 
        maxRepeat = 0
        maxWindow = 0
        charDict = {}

        for right in range(len(s)):
            curChar = s[right]
            charDict[curChar] = charDict.get(curChar, 0) + 1
            windowSize = right - left + 1
            maxRepeat = max(charDict[curChar], maxRepeat)
            numRepeat = windowSize - maxRepeat

            if (numRepeat > k):
                charDict[s[left]] = charDict[s[left]] - 1
                left = left + 1
                windowSize = right - left + 1
            
            maxWindow = max(maxWindow, windowSize)

        return maxWindow


        
class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """

        # base case
        if (len(s) <= 1):
            return len(s)
        
        # find longest sequence
        longest_sequence = 0
        outer_index = 0

        while outer_index < len(s):
            index = outer_index
            sequence = ""
            while index < len(s) and s[index] not in sequence:
                sequence += s[index]
                index += 1

            longest_sequence = max(len(sequence), longest_sequence)

            # base case
            if index == len(s):    
                outer_index = len(s)
            else:
                outer_index += 1
        
        return longest_sequence
        
class Solution(object):
    def twoSum(self, numbers, target):
        """
        :type numbers: List[int]
        :type target: int
        :rtype: List[int]
        """
        left, right = 0, len(numbers) - 1
        while left < right:
            temp_sum = numbers[left] + numbers[right]
            if temp_sum == target:
                return [left+1, right+1]
            elif temp_sum > target:
                right -= 1
            else:
                left += 1
        
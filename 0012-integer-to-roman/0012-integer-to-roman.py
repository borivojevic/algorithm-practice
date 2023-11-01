# 2956 = 1000 + 1000 + 900 + 50 + 6
# MMCMLVI
class Solution(object):
    def intToRoman(self, num):
        """
        :type num: int
        :rtype: str
        """
        result = ""

        # 1000 M
        thousands = num // 1000
        result += thousands * "M"
        rest = num - thousands * 1000

        # 900 CM
        ninehundered = rest // 900
        result += ninehundered * 'CM'
        rest -= ninehundered * 900

        # 500 D        
        fivehundered = rest // 500
        result += fivehundered * 'D'
        rest -= fivehundered * 500

        # 400 CD        
        fourhundered = rest // 400
        result += fourhundered * 'CD'
        rest -= fourhundered * 400

        # 100 C        
        hundered = rest // 100
        result += hundered * 'C'
        rest -= hundered * 100

        # 90 XC
        ninenty = rest // 90
        result += ninenty * 'XC'
        rest -= ninenty * 90

        # 50 L
        fifty = rest // 50
        result += fifty * 'L'
        rest -= fifty * 50

        # 40 Xl
        fourty = rest // 40
        result += fourty * 'XL'
        rest -= fourty * 40

        # 10 X
        ten = rest // 10
        result += ten * 'X'
        rest -= ten * 10

        # 9 IX
        nine = rest // 9
        result += nine * 'IX'
        rest -= nine * 9

        # 5 V
        five = rest // 5
        result += five * 'V'
        rest -= five * 5

        # 4 IV
        four = rest // 4
        result += four * 'IV'
        rest -= four * 4

        # 1 I
        one = rest // 1
        result += one * 'I'
        rest -= one * 1

        return result
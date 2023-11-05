class Solution(object):
    def fizzBuzz(self, n):
        """
        :type n: int
        :rtype: List[str]
        """
        fiz = 3
        buz = 5
        output = []
        for i in range(n):
            fiz -= 1
            buz -= 1
            if fiz == 0 and buz == 0:
                output.append("FizzBuzz")
                fiz = 3
                buz = 5
            elif fiz == 0:
                output.append("Fizz")
                fiz = 3
            elif buz == 0:
                output.append("Buzz")
                buz = 5
            else:
                output.append(str(i+1))
        
        return output
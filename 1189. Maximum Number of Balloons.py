class Solution:
    def maxNumberOfBalloons(self, text: str) -> int:
        result = {'b': 0, 'a': 0, 'l': 0, 'o': 0, 'n': 0}
        for elem in text:
            # ballon
            if elem in result:
                result[elem] += 1

        numberOfBallons = self.extractBallons(result)
        return numberOfBallons

    def extractBallons(self, ballonDic):
        enoughtForBallon = True
        number = 0
        while enoughtForBallon:
            if ballonDic['b'] >= 1 and ballonDic['a'] >= 1 and ballonDic['l'] >= 2 and ballonDic['o'] >= 2 and ballonDic['n'] >= 1:
                ballonDic['b'] -= 1
                ballonDic['a'] -= 1
                ballonDic['l'] -= 2
                ballonDic['o'] -= 2
                ballonDic['n'] -= 1
                number += 1
            else:
                enoughtForBallon = False
        return number


a = Solution()
a.maxNumberOfBalloons("nlaebolko")
# balloon

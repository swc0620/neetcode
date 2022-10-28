class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        check_s = {}
        for a in s:
            try:
                check_s[a] += 1
            except:
                check_s[a] = 1
        
        for b in t:
            try:
                if check_s[b] == 0:
                    return False
                check_s[b] -= 1
            except:
                return False
        return True
                
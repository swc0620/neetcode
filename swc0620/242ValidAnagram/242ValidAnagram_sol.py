class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        alphabets = "abcdefghijklmnopqrstuvwxyz"
        for alphabet in alphabets:
            if s.count(alphabet) != t.count(alphabet):
                return False
        return True
                
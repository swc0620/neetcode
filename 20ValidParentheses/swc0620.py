import re

class Solution:
    def isPalindrome(self, s: str) -> bool:
        stack = re.sub(r'[^a-zA-Z0-9]', r'', s).lower()
        return stack == stack[::-1]
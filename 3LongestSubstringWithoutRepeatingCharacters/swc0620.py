class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        res = left_idx = 0
        char_indices = {}
        for right_idx, char in enumerate(s):
            if char in char_indices:
                left_idx = max(left_idx, char_indices[char])
            res = max(res, right_idx - left_idx + 1)
            char_indices[char] = right_idx + 1
        return res
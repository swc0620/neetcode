class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        nums = set(nums)
        longest = 0
        for num in nums:
            if num - 1 not in nums:
                cur_num = num
                current = 1
                while cur_num + 1 in nums:
                    cur_num += 1
                    current += 1
                longest = max(current, longest)
        return longest

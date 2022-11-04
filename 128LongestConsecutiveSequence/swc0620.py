class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if not nums:
            return 0

        nums = sorted(list(set(nums)))
        res = 1
        start = 0
        end = 0

        for idx in range(1, len(nums)):
            if nums[idx-1]+1 == nums[idx]:
                end = idx
            else:
                length = end - start + 1
                res = max(res, length)
                start = end = idx
        length = end - start + 1
        res = max(res, length)
        return res

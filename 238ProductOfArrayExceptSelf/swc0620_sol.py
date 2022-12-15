class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        ans = [1] * len(nums)
        prefix, suffix = 1, 1

        for idx in range(len(nums)):
            # prefix product
            ans[idx] *= prefix
            prefix *= nums[idx]

            # suffix produc
            ans[-1-idx] *= suffix
            suffix *= nums[-1-idx]
        
        return ans
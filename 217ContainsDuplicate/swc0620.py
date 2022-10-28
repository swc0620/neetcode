class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        check = {}
        for num in nums:
            try:
                check[num]
                return True
            except:
                check[num] = 1
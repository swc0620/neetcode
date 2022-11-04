class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        product = 1
        zeros = 0
        for num in nums:
            if num != 0:
                product *= num
            else:
                zeros += 1

        if zeros >= 2:
            return [0 for _ in nums]

        res = []
        if zeros == 1:
            for num in nums:
                if num != 0:
                    res.append(0)
                else:
                    res.append(product)
        else:
            for num in nums:
                res.append(product//num)
        return res

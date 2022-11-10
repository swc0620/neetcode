class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res = set()
        negas = []
        zeros = []
        posis = []

        for num in nums:
            if num > 0:
                posis.append(num)
            elif num < 0:
                negas.append(num)
            else:
                zeros.append(num)

        negas_set = set(negas)
        posis_set = set(posis)

        if zeros:
            for nega in negas_set:
                if -1*nega in posis_set:
                    res.add((nega, 0, -1*nega))
        
        if len(zeros) >= 3:
            res.add((0, 0, 0))

        for nega1 in range(len(negas)):
            for nega2 in range(nega1+1, len(negas)):
                target = 0 - negas[nega1] - negas[nega2]
                if target in posis_set:
                    res.add(tuple(sorted([negas[nega1], negas[nega2], target])))
        
        for posi1 in range(len(posis)):
            for posi2 in range(posi1+1, len(posis)):
                target = 0 - posis[posi1] - posis[posi2]
                if target in negas_set:
                    res.add(tuple(sorted([target, posis[posi1], posis[posi2]])))

        return res

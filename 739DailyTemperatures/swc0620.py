class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        stack = []
        wait = [0] * len(temperatures)
        for idx, temp in enumerate(temperatures):
            while stack and temp > stack[-1][0]:
                old_temp, old_idx = stack.pop()
                wait[old_idx] = idx - old_idx
            stack.append((temp, idx))
        return wait

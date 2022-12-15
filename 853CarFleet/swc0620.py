class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        stack = []
        for pos, velocity in sorted(zip(position, speed))[::-1]:
            distance = target - pos
            time_left = distance / velocity
            if not stack:
                stack.append(time_left)
            elif time_left > stack[-1]:
                stack.append(time_left)
        return len(stack)
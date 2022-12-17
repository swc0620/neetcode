class Solution:
    def generateParenthesis(self, n: int):
        ans = []

        def backtracking(stack, opening, closing):
            if len(stack) == 2 * n:
                ans.append(''.join(stack))
                return

            if opening < n:
                stack.append('(')
                backtracking(stack, opening+1, closing)
                stack.pop()
            
            if closing < opening:
                stack.append(')')
                backtracking(stack, opening, closing+1)
                stack.pop()

        backtracking([], 0, 0)
        return ans
        
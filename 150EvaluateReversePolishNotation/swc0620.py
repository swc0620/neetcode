class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []
        operators = {'+': 1, '-': 2, '*': 3, '/': 4}
        for token in tokens:
            if token not in operators:
                stack.append(token)
            else:
                operand2 = int(stack.pop())
                operand1 = int(stack.pop())
                if token == '+':
                    res = operand1 + operand2
                elif token == '-':
                    res = operand1 - operand2
                elif token == '*':
                    res = operand1 * operand2
                elif token == '/':
                    res = operand1 / operand2
                stack.append(int(res))
        return int(stack[0])
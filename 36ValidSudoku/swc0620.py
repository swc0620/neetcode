class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        for row in board:
            nums = [num for num in row if num != '.']
            if len(set(nums)) != len(nums):
                return False

        for col in zip(*board):
            nums = [num for num in col if num != '.']
            if len(set(nums)) != len(nums):
                return False

        for x in (0, 3, 6):
            for y in (0, 3, 6):
                nums = [board[i][j] for i in range(x, x+3) for j in range(y, y+3) if board[i][j] != '.']
                if len(set(nums)) != len(nums):
                    return False
        return True

class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        m, n = len(matrix), len(matrix[0])
        left, right = 0, m * n - 1

        def binary_search(left, right, matrix, target, m, n):
            if left > right:
                return False
            mid = (left+right) // 2
            i, j = divmod(mid, n)

            if matrix[i][j] == target:
                return True
            elif matrix[i][j] < target:
                left = mid + 1
            else:
                right = mid -1
            
            return binary_search(left, right, matrix, target, m, n)
        return binary_search(left, right, matrix, target, m, n)
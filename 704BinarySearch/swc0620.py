class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums)-1
        def binary_search(left, right, nums, target):
            if left > right:
                return -1

            mid = (left + right) // 2
            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1

            return binary_search(left, right, nums, target)
        return binary_search(left, right, nums, target)

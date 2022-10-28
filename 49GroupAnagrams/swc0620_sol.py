class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagram_keys = {}

        for string in strs:
            anagram_key = "".join(sorted(list(string)))
            if anagram_key in anagram_keys:
                anagram_keys[anagram_key].append(string)
            else:
                anagram_keys[anagram_key] = [string]

        return anagram_keys.values()


# Range Extraction

A format for expressing an ordered list of integers is to use a comma separated list of either

- individual integers
- or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"

Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

# Examples

Example 1:
rangeExtraction([0]) -> '0'

Example 2:
rangeExtraction([1]) -> '1'

Example 3:
rangeExtraction([0, 1]) -> '0, 1'

Example 4:
rangeExtraction([-1, 0, 1]) -> '-1-1'

Example 5:
rangeExtraction([0, 1, 2]) -> '0-2'

Example 6:
rangeExtraction([0, 1, 2, 3, 5]) -> '0-3,5'

Example 7:
rangeExtraction([1, 2, 3, 5, 6]) -> '1-3,5,6'

Example 8:
rangeExtraction([1, 2, 3, 5, 6, 7]) -> '1-3,5-7'

Example 9:
rangeExtraction([-3, -2, -1]) -> '-3--1'

Example 10:
rangeExtraction([-3, -1]) -> '-3,-1'

Example 11:
rangeExtraction([-3, -1, 0]) -> '-3,-1,0'

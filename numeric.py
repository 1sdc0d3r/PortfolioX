my_dict = {
    "cat": "bob",
    "dog": 23,
    19: 18,
    90: "fish"
}


def find_nums(dic):
    nums = list()
    for n in dic:
        if isinstance(n, int):
            nums.append(n)
        if isinstance(dic[n], int):
            nums.append(dic[n])
    print(sum(nums))
    return nums


print(find_nums(my_dict))

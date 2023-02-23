def freqofElements(arr):
    count = 1
    i = 0
    for i in range(1, len(arr)):
        if (arr[i] != arr[i-1]):
            print(arr[i-1], count)
            count = 1
        else:
            count += 1
        if (i == len(arr)-1):
            print(arr[i], count)


freqofElements([0, 3, 83, 83, 83, 209, 209])

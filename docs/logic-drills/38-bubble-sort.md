# Bubble Sort

Goal: sort an array in ascending order.

Steps:
1. Compare adjacent elements.
2. Swap them when the left value is greater.
3. Repeat passes until the array is sorted.

Java idea:

```java
for (int i = 0; i < numbers.length - 1; i++) {
    for (int j = 0; j < numbers.length - i - 1; j++) {
        if (numbers[j] > numbers[j + 1]) {
            int temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}
```

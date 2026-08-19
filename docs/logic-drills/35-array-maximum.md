# Array Maximum

Goal: find the largest element in an array.

Steps:
1. Store the first element as `max`.
2. Visit the remaining elements.
3. Replace `max` when a larger value appears.

Java idea:

```java
int max = numbers[0];
for (int value : numbers) {
    if (value > max) max = value;
}
System.out.println(max);
```

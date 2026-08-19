# Second Largest

Goal: find the second largest value in an array.

Steps:
1. Track `largest` and `second`.
2. Update both values when a new largest appears.
3. Update only `second` when the value fits between them.

Java idea:

```java
int largest = Integer.MIN_VALUE;
int second = Integer.MIN_VALUE;
for (int value : numbers) {
    if (value > largest) {
        second = largest;
        largest = value;
    } else if (value > second && value != largest) {
        second = value;
    }
}
System.out.println(second);
```

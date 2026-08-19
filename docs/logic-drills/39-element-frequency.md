# Element Frequency

Goal: count how many times a target value appears in an array.

Steps:
1. Start `count` at `0`.
2. Visit each array element.
3. Increase the count when the element equals the target.

Java idea:

```java
int count = 0;
for (int value : numbers) {
    if (value == target) count++;
}
System.out.println(count);
```

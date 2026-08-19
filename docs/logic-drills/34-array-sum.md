# Array Sum

Goal: find the sum of all elements in an array.

Steps:
1. Start `sum` at `0`.
2. Visit every element.
3. Add each element to `sum`.

Java idea:

```java
int sum = 0;
for (int value : numbers) {
    sum += value;
}
System.out.println(sum);
```

# Fibonacci Series

Goal: print the first `n` Fibonacci numbers.

Steps:
1. Start with `0` and `1`.
2. Print the current value.
3. The next value is the sum of the previous two values.

Java idea:

```java
int a = 0;
int b = 1;
for (int i = 0; i < n; i++) {
    System.out.print(a + " ");
    int next = a + b;
    a = b;
    b = next;
}
```

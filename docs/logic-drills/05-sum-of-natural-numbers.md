# Sum Of Natural Numbers

Goal: calculate `1 + 2 + 3 + ... + n`.

Steps:
1. Read `n`.
2. Start `sum` at `0`.
3. Add every number from `1` to `n`.

Java idea:

```java
int sum = 0;
for (int i = 1; i <= n; i++) {
    sum += i;
}
System.out.println(sum);
```

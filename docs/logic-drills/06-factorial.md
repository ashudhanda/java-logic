# Factorial

Goal: calculate `n!`.

Steps:
1. Read `n`.
2. Start `fact` at `1`.
3. Multiply every number from `1` to `n`.

Java idea:

```java
int fact = 1;
for (int i = 1; i <= n; i++) {
    fact *= i;
}
System.out.println(fact);
```

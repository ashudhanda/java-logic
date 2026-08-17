# Perfect Number

Goal: check whether a number equals the sum of its proper divisors.

Steps:
1. Start `sum` at `0`.
2. Check divisors from `1` to `n / 2`.
3. Add divisors that divide exactly.
4. Compare `sum` with `n`.

Java idea:

```java
int sum = 0;
for (int i = 1; i <= n / 2; i++) {
    if (n % i == 0) sum += i;
}
System.out.println(sum == n);
```

# Power Of Number

Goal: calculate `base` raised to `exponent`.

Steps:
1. Start `result` at `1`.
2. Multiply `result` by `base`.
3. Repeat `exponent` times.

Java idea:

```java
int result = 1;
for (int i = 1; i <= exponent; i++) {
    result *= base;
}
System.out.println(result);
```

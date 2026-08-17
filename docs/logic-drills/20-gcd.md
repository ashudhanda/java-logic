# GCD

Goal: find the greatest common divisor of two numbers.

Steps:
1. Keep dividing the larger problem into remainders.
2. Replace `a` with `b`.
3. Replace `b` with `a % b`.
4. Stop when `b` becomes `0`.

Java idea:

```java
while (b != 0) {
    int temp = b;
    b = a % b;
    a = temp;
}
System.out.println(a);
```

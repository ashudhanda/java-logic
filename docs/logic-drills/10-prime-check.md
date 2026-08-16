# Prime Check

Goal: check whether a number is prime.

Steps:
1. Numbers less than `2` are not prime.
2. Try divisors from `2` up to `sqrt(n)`.
3. If any divisor divides exactly, the number is not prime.

Java idea:

```java
boolean prime = n >= 2;
for (int i = 2; i * i <= n; i++) {
    if (n % i == 0) {
        prime = false;
        break;
    }
}
System.out.println(prime);
```

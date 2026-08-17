# Neon Number

Goal: check whether the sum of digits of `n * n` equals `n`.

Steps:
1. Square the number.
2. Add the digits of the square.
3. Compare the digit sum with the original number.

Java idea:

```java
int square = n * n;
int sum = 0;
while (square > 0) {
    sum += square % 10;
    square /= 10;
}
System.out.println(sum == n);
```

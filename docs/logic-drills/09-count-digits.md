# Count Digits

Goal: count how many digits are present in a number.

Steps:
1. Read `n`.
2. Divide by `10` until the number becomes `0`.
3. Increase the count after each division.

Java idea:

```java
int count = 0;
do {
    count++;
    n /= 10;
} while (n != 0);
System.out.println(count);
```

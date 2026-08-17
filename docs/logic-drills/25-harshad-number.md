# Harshad Number

Goal: check whether a number is divisible by the sum of its digits.

Steps:
1. Add all digits of the number.
2. Divide the original number by that sum.
3. If the remainder is `0`, it is a Harshad number.

Java idea:

```java
int original = n;
int sum = 0;
while (n > 0) {
    sum += n % 10;
    n /= 10;
}
System.out.println(original % sum == 0);
```

# Armstrong Number

Goal: check whether a number is equal to the sum of its digit powers.

Steps:
1. Count the digits in the number.
2. Raise each digit to that count.
3. Add the powered values.
4. Compare the sum with the original number.

Java idea:

```java
int original = n;
int sum = 0;
int digits = String.valueOf(n).length();
while (n > 0) {
    int digit = n % 10;
    sum += Math.pow(digit, digits);
    n /= 10;
}
System.out.println(sum == original);
```

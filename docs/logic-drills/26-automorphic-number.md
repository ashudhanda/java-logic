# Automorphic Number

Goal: check whether a number appears at the end of its square.

Steps:
1. Square the number.
2. Count how many digits are in the original number.
3. Compare the last digits of the square with the number.

Java idea:

```java
int square = n * n;
int digits = String.valueOf(n).length();
int power = (int) Math.pow(10, digits);
System.out.println(square % power == n);
```

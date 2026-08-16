# Palindrome Number

Goal: check whether a number reads the same backward.

Steps:
1. Store the original number.
2. Reverse the number.
3. Compare the reversed value with the original.

Java idea:

```java
int original = n;
int reverse = 0;
while (n != 0) {
    reverse = reverse * 10 + n % 10;
    n /= 10;
}
System.out.println(original == reverse);
```

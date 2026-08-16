# Reverse Number

Goal: reverse the digits of a number.

Steps:
1. Extract the last digit with `% 10`.
2. Add it to the reversed value.
3. Remove the last digit with `/ 10`.

Java idea:

```java
int reverse = 0;
while (n != 0) {
    int digit = n % 10;
    reverse = reverse * 10 + digit;
    n /= 10;
}
System.out.println(reverse);
```

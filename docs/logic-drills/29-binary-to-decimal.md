# Binary To Decimal

Goal: convert a binary number into decimal form.

Steps:
1. Read each binary digit from right to left.
2. Multiply the digit by the current power of `2`.
3. Add the value into the result.

Java idea:

```java
int decimal = 0;
int power = 1;
while (binary > 0) {
    int digit = binary % 10;
    decimal += digit * power;
    power *= 2;
    binary /= 10;
}
System.out.println(decimal);
```

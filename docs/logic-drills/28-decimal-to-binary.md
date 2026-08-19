# Decimal To Binary

Goal: convert a decimal number into binary form.

Steps:
1. Divide the number by `2`.
2. Store each remainder.
3. Read the remainders in reverse order.

Java idea:

```java
String binary = "";
while (n > 0) {
    binary = (n % 2) + binary;
    n /= 2;
}
System.out.println(binary);
```

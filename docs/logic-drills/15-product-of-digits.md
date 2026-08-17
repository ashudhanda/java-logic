# Product Of Digits

Goal: multiply every digit in a number.

Steps:
1. Start `product` at `1`.
2. Extract each digit.
3. Multiply the digit into `product`.

Java idea:

```java
int product = 1;
while (n != 0) {
    product *= n % 10;
    n /= 10;
}
System.out.println(product);
```

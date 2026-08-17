# Sum Of Digits

Goal: add every digit in a number.

Steps:
1. Extract the last digit with `% 10`.
2. Add it to `sum`.
3. Remove the last digit with `/ 10`.

Java idea:

```java
int sum = 0;
while (n != 0) {
    sum += n % 10;
    n /= 10;
}
System.out.println(sum);
```

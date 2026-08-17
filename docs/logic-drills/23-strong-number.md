# Strong Number

Goal: check whether a number equals the sum of factorials of its digits.

Steps:
1. Extract each digit.
2. Find the factorial of that digit.
3. Add factorials into `sum`.
4. Compare with the original number.

Java idea:

```java
int original = n;
int sum = 0;
while (n > 0) {
    int digit = n % 10;
    int fact = 1;
    for (int i = 1; i <= digit; i++) fact *= i;
    sum += fact;
    n /= 10;
}
System.out.println(sum == original);
```

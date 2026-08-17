# Leap Year

Goal: check whether a year is a leap year.

Steps:
1. A year divisible by `400` is a leap year.
2. A year divisible by `100` is not a leap year.
3. A year divisible by `4` is a leap year.

Java idea:

```java
boolean leap = (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0);
System.out.println(leap);
```

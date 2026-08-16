# Largest Of Three

Goal: find the largest value among three numbers.

Steps:
1. Read `a`, `b`, and `c`.
2. Store `a` as the current largest.
3. Compare `b` and `c` with the current largest.

Java idea:

```java
int largest = a;
if (b > largest) largest = b;
if (c > largest) largest = c;
System.out.println(largest);
```

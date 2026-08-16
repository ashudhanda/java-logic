# Swap Two Numbers

Goal: swap two variables using a temporary variable.

Steps:
1. Store `a` in `temp`.
2. Copy `b` into `a`.
3. Copy `temp` into `b`.

Java idea:

```java
int temp = a;
a = b;
b = temp;
System.out.println(a + " " + b);
```

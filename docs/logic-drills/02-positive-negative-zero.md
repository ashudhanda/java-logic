# Positive Negative Or Zero

Goal: classify a number by its sign.

Steps:
1. Read an integer `n`.
2. If `n > 0`, it is positive.
3. If `n < 0`, it is negative.
4. Otherwise it is zero.

Java idea:

```java
if (n > 0) {
    System.out.println("Positive");
} else if (n < 0) {
    System.out.println("Negative");
} else {
    System.out.println("Zero");
}
```

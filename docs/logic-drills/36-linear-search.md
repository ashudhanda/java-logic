# Linear Search

Goal: find whether a target value exists in an array.

Steps:
1. Visit every element from left to right.
2. Compare each element with the target.
3. Stop when the target is found.

Java idea:

```java
boolean found = false;
for (int value : numbers) {
    if (value == target) {
        found = true;
        break;
    }
}
System.out.println(found);
```

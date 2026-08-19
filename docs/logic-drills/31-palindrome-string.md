# Palindrome String

Goal: check whether a string reads the same backward.

Steps:
1. Reverse the string.
2. Compare the reversed value with the original.
3. Ignore case when needed.

Java idea:

```java
String reverse = "";
for (int i = text.length() - 1; i >= 0; i--) {
    reverse += text.charAt(i);
}
System.out.println(text.equalsIgnoreCase(reverse));
```

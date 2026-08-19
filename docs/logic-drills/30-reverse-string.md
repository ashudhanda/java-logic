# Reverse String

Goal: reverse the characters in a string.

Steps:
1. Start from the last character.
2. Move toward the first character.
3. Append each character to a new result.

Java idea:

```java
String reverse = "";
for (int i = text.length() - 1; i >= 0; i--) {
    reverse += text.charAt(i);
}
System.out.println(reverse);
```

# Remove Spaces

Goal: remove spaces from a string.

Steps:
1. Visit each character.
2. Skip the character when it is a space.
3. Append all other characters to the result.

Java idea:

```java
String result = "";
for (int i = 0; i < text.length(); i++) {
    char ch = text.charAt(i);
    if (ch != ' ') result += ch;
}
System.out.println(result);
```

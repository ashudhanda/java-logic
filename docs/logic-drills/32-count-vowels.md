# Count Vowels

Goal: count vowels in a string.

Steps:
1. Convert the string to lowercase.
2. Visit each character.
3. Increase the count when the character is a vowel.

Java idea:

```java
int count = 0;
String lower = text.toLowerCase();
for (int i = 0; i < lower.length(); i++) {
    char ch = lower.charAt(i);
    if ("aeiou".indexOf(ch) >= 0) count++;
}
System.out.println(count);
```

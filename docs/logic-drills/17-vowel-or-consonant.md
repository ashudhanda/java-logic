# Vowel Or Consonant

Goal: identify whether a character is a vowel or consonant.

Steps:
1. Convert the character to lowercase.
2. Compare it with `a`, `e`, `i`, `o`, and `u`.
3. Print vowel when any comparison matches.

Java idea:

```java
char ch = Character.toLowerCase(input);
boolean vowel = ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u';
System.out.println(vowel ? "Vowel" : "Consonant");
```

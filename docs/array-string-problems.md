# Array & String Problems 📦

Level 4-5 practice set.

## Array problems
1. Sum aur average of array
2. Max aur min element (ek hi loop me)
3. Linear search — element ka index dhundo (-1 if absent)
4. Array reverse (in-place, two-pointer)
5. Second largest element (sorting ke bina)
6. Frequency count — har element kitni baar aaya
7. Even/odd numbers ko alag-alag count karo
8. Do sorted arrays ko merge karo

## String problems
9. Vowel/consonant count
10. String reverse (charAt + loop se, built-in reverse ke bina)
11. Palindrome string check — `"madam"` → true
12. Words count in sentence
13. Character frequency — `"hello"` → h:1 e:1 l:2 o:1
14. First non-repeating character
15. Anagram check — `"listen"` & `"silent"` → true

## Two-pointer template (reverse)
```java
int i = 0, j = arr.length - 1;
while (i < j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++; j--;
}
```

## Frequency template (a-z)
```java
int[] freq = new int[26];
for (char c : str.toCharArray()) {
    freq[c - 'a']++;
}
```

> Tip: array problems me index ka dry run zaroor karo — off-by-one errors sabse common hain.

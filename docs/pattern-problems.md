# Pattern Problems ⭐

Nested loops master karne ka best tareeka. Har pattern ke liye pehle **rows aur columns ka relation** likho.

## 1. Square (n = 4)
```
* * * *
* * * *
* * * *
* * * *
```
Logic: outer loop rows, inner loop columns — dono 1 to n.

## 2. Right triangle
```
*
* *
* * *
* * * *
```
Logic: row `i` me `i` stars (inner loop 1 to i).

## 3. Inverted triangle
```
* * * *
* * *
* *
*
```
Logic: row `i` me `n - i + 1` stars.

## 4. Number triangle
```
1
1 2
1 2 3
```
Logic: star ki jagah `j` print karo.

## 5. Pyramid
```
   *
  * *
 * * *
```
Logic: pehle `n - i` spaces, phir `i` stars.

## Template
```java
for (int i = 1; i <= n; i++) {      // rows
    for (int j = 1; j <= ___; j++) { // pattern ke hisaab se limit
        System.out.print("* ");
    }
    System.out.println();
}
```

> Challenge: har pattern ka dry run table banao n = 3 ke liye.

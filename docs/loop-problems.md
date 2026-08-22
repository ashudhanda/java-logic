# Loop Problems 🔁

Level 2 practice set — har problem ka pehle dry run, phir code.

## Warm-up
1. 1 se n tak print karo
2. n se 1 tak (reverse) print karo
3. 1 se n tak ke even numbers ka sum
4. Table print karo (n × 1 to n × 10)

## Digits wale problems
5. Count digits — `n = 4562` → `4`
6. Sum of digits — `n = 123` → `6`
7. Reverse number — `n = 123` → `321`
8. Palindrome number check — `121` → true
9. Armstrong number — `153 = 1³ + 5³ + 3³` → true

## Classic
10. Factorial — `5!` → `120`
11. Fibonacci series — `0 1 1 2 3 5 8 ...`
12. Prime check — sirf `2 se √n` tak divide check karo
13. GCD of two numbers (Euclid ka method)
14. Power without Math.pow — `2^5 = 32`

## Key formulas
```java
lastDigit  = n % 10;
removeLast = n / 10;
reverse    = reverse * 10 + lastDigit;
```

## Difficulty ladder
- ⭐ 1-4 — ek baar me ho jane chahiye
- ⭐⭐ 5-9 — digit extraction pattern
- ⭐⭐⭐ 10-14 — interview/exam level

> Har problem solve karne ke baad khud se poochho: agar input negative ho to? Kya aapke solution me input validation hai?

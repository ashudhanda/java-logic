# Logic Building Tips 💡

## 1. Problem ko chhota karo
Bada problem dekh ke ghabrao mat. Pehle chhote input pe socho:
- "Reverse a number" → pehle 2-digit number pe try karo, phir generalize.

## 2. Pattern dhundo
- Har problem me koi na koi **repeat hone wala step** hota hai — wahi loop banega.
- Input aur output ke beech ka **relation** likho, code baad me.

## 3. Pseudo-code pehle
```
1. take input n
2. sum = 0
3. jab tak n > 0:
     - last digit nikalo (n % 10)
     - sum me jodo
     - n chhota karo (n / 10)
4. print sum
```
Jab steps clear ho, tab Java syntax me convert karo.

## 4. Edge cases hamesha check karo
- 0, negative numbers, 1-element array, empty string
- Loop 0 baar chale to kya hoga?

## 5. Galti se seekho
- Wrong output aaye to **dry run** karo, code ghoorne se kuch nahi hota.
- Ek hi type ki galti baar-baar ho rahi hai to usko note karo.

## 6. Consistency > Speed
- Roz 3-4 problems > hafte me ek din 20 problems.
- Pehle correctness, phir optimization.

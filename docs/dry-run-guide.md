# Dry Run Guide: Step-by-Step Code Execution 📝

Dry run = code ko paper pe line-by-line execute karna, computer banke.

## Kaise karein
1. Saare variables ke liye table banao (columns = variables).
2. Har line execute karo aur values update karo.
3. Loop me har iteration ki alag row banao.
4. Output column me jo print hota hai wo likho.

## Worked example
```java
int n = 1234, sum = 0;
while (n > 0) {
    sum = sum + n % 10;
    n = n / 10;
}
System.out.println(sum);
```

| Iteration | n (start) | n % 10 | sum | n (end) |
|---|---|---|---|---|
| 1 | 1234 | 4 | 4 | 123 |
| 2 | 123 | 3 | 7 | 12 |
| 3 | 12 | 2 | 9 | 1 |
| 4 | 1 | 1 | 10 | 0 |

**Output:** `10`

## Common mistakes
- Loop condition ko last iteration me check karna bhool jana
- Integer division ignore karna (`7 / 2 = 3`, not 3.5)
- `i++` vs `++i` ka order confuse karna
- Nested loop me inner loop ka reset bhool jana

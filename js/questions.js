/* ============================================
   JavaLogic — Question Bank
   45 questions · 15 per level
   Format: lv = level, t = title, q = statement,
           h = hint, l = logic steps, c = Java code
   ============================================ */

const QUESTIONS = [

  /* ---------- Level 1 · Basics ---------- */

  {
    lv: 1, t: "Sum of Digits",
    q: "Ek number lo (jaise 493) aur uske sab digits ka sum print karo. Expected output: 16",
    h: "n % 10 se last digit milta hai, aur n / 10 karne se last digit hat jaata hai. Loop tab tak chalao jab tak n > 0.",
    l: ["sum = 0 se shuru karo", "digit = n % 10 nikalo aur sum me jodo", "n = n / 10 karo — last digit gayab", "n == 0 hote hi loop khatam, sum print karo"],
    c: `int n = 493, sum = 0;
while (n > 0) {
    sum += n % 10;   // last digit jodo
    n /= 10;         // last digit hatao
}
System.out.println(sum); // 16`
  },
  {
    lv: 1, t: "Reverse a Number",
    q: "123 ko 321 bana do — string use kiye bina, sirf math se.",
    h: "rev = rev * 10 + (n % 10) — har step pe purana rev left shift hota hai aur naya digit peeche jud jaata hai.",
    l: ["rev = 0 se shuru", "digit = n % 10", "rev = rev * 10 + digit", "n /= 10", "n > 0 tak repeat, phir rev print"],
    c: `int n = 123, rev = 0;
while (n > 0) {
    rev = rev * 10 + n % 10;
    n /= 10;
}
System.out.println(rev); // 321`
  },
  {
    lv: 1, t: "Count Digits",
    q: "Number me kitne digits hain? 4056 → 4",
    h: "Har baar n / 10 karne pe ek digit kam hota hai. Kitni baar divide karna pada — wahi answer hai.",
    l: ["count = 0", "jab tak n > 0: n /= 10 aur count++", "count print karo"],
    c: `int n = 4056, count = 0;
while (n > 0) {
    n /= 10;
    count++;
}
System.out.println(count); // 4`
  },
  {
    lv: 1, t: "Swap Two Numbers (temp)",
    q: "a = 5, b = 9 — dono ki values exchange karo.",
    h: "Do glass paani wale swap karne ke liye teesra khaali glass chahiye — wahi temp variable hai.",
    l: ["temp me a rakho (a ki copy safe)", "a me b daalo", "b me temp daalo"],
    c: `int a = 5, b = 9;
int temp = a;
a = b;
b = temp;
System.out.println(a + " " + b); // 9 5`
  },
  {
    lv: 1, t: "Swap Without Temp",
    q: "Ab wahi swap — lekin teesre variable ke bina.",
    h: "Sum ka trick: pehle a me dono ka total rakh do, phir subtract karke alag-alag nikaal lo.",
    l: ["a = a + b (ab a me total hai)", "b = a - b (total - purana b = purana a)", "a = a - b (total - naya b = purana b)"],
    c: `int a = 5, b = 9;
a = a + b;  // a = 14
b = a - b;  // b = 5
a = a - b;  // a = 9
System.out.println(a + " " + b); // 9 5`
  },
  {
    lv: 1, t: "Even / Odd Counter",
    q: "1 se n tak kitne even aur kitne odd numbers hain — count karke dikhaao.",
    h: "i % 2 == 0 matlab even, warna odd. Loop me dono ke alag counters badhao.",
    l: ["even = 0, odd = 0", "i = 1 se n tak loop", "i % 2 == 0 ? even++ : odd++", "dono print karo"],
    c: `int n = 10, even = 0, odd = 0;
for (int i = 1; i <= n; i++) {
    if (i % 2 == 0) even++;
    else odd++;
}
System.out.println(even + " even, " + odd + " odd");`
  },
  {
    lv: 1, t: "Largest of Three",
    q: "Teen numbers me sabse bada kaun? a = 7, b = 12, c = 4",
    h: "Pehle a vs b ka winner nikaalo, phir us winner ko c se ladao.",
    l: ["max = a maan lo", "agar b > max toh max = b", "agar c > max toh max = c", "max hi answer hai"],
    c: `int a = 7, b = 12, c = 4;
int max = a;
if (b > max) max = b;
if (c > max) max = c;
System.out.println(max); // 12`
  },
  {
    lv: 1, t: "Multiplication Table",
    q: "Kisi bhi number ka table print karo. n = 7 → 7 x 1 = 7 ... 7 x 10 = 70",
    h: "Ek hi cheez 10 baar repeat ho rahi hai — sirf multiplier badal raha hai. Loop ka classic case.",
    l: ["i = 1 se 10 tak loop", "har step pe n * i print karo formatted line me"],
    c: `int n = 7;
for (int i = 1; i <= 10; i++) {
    System.out.println(n + " x " + i + " = " + (n * i));
}`
  },
  {
    lv: 1, t: "Sum of 1 to n",
    q: "1 + 2 + 3 + ... + n ka total nikaalo. n = 100 → 5050",
    h: "Loop se sum banao. (Pro tip: formula n*(n+1)/2 se verify karo — dono same aane chahiye.)",
    l: ["sum = 0", "i = 1 se n tak: sum += i", "print karo aur formula se check karo"],
    c: `int n = 100, sum = 0;
for (int i = 1; i <= n; i++) {
    sum += i;
}
System.out.println(sum);            // 5050
System.out.println(n * (n + 1) / 2); // verify: 5050`
  },
  {
    lv: 1, t: "Factorial",
    q: "n! nikaalo. 5! = 5 × 4 × 3 × 2 × 1 = 120",
    h: "fact ko 1 se shuru karo aur har number se multiply karte jao. int jaldi overflow hota hai — long lo.",
    l: ["fact = 1 (0 nahi — warna sab 0!)", "i = 1 se n tak: fact *= i", "fact print karo"],
    c: `int n = 5;
long fact = 1;
for (int i = 1; i <= n; i++) {
    fact *= i;
}
System.out.println(fact); // 120`
  },
  {
    lv: 1, t: "Power (a^b)",
    q: "Math.pow() ke bina a ki power b nikaalo. 2^5 = 32",
    h: "Power ka matlab hi hai: a ko b baar multiply karna. result = 1 se shuru karo.",
    l: ["result = 1", "b baar loop chalao: result *= a", "result print karo"],
    c: `int a = 2, b = 5;
long result = 1;
for (int i = 1; i <= b; i++) {
    result *= a;
}
System.out.println(result); // 32`
  },
  {
    lv: 1, t: "First & Last Digit",
    q: "n = 5847 → first digit 5, last digit 7 dono nikaalo.",
    h: "Last digit easy hai: n % 10. First digit ke liye n ko tab tak chhota karo jab tak single digit na bache.",
    l: ["last = n % 10 turant mil gaya", "jab tak n >= 10: n /= 10", "jo bacha wahi first digit hai"],
    c: `int n = 5847;
int last = n % 10;
while (n >= 10) {
    n /= 10;
}
System.out.println(n + " " + last); // 5 7`
  },
  {
    lv: 1, t: "Sum of Even Digits",
    q: "Number ke sirf even digits ka sum karo. 2436 → 2 + 4 + 6 = 12",
    h: "Sum of digits wala hi logic — bas jodne se pehle ek check lagao: digit % 2 == 0?",
    l: ["sum = 0", "digit = n % 10 nikaalo", "agar digit even hai toh hi sum me jodo", "n /= 10, repeat jab tak n > 0"],
    c: `int n = 2436, sum = 0;
while (n > 0) {
    int digit = n % 10;
    if (digit % 2 == 0) sum += digit;
    n /= 10;
}
System.out.println(sum); // 12`
  },
  {
    lv: 1, t: "Leap Year Check",
    q: "Year leap hai ya nahi? 2024 → leap, 1900 → not leap, 2000 → leap",
    h: "Rule: 4 se divisible ho AUR 100 se nahi — YA phir 400 se divisible ho. 1900 wala case hi log galat karte hain.",
    l: ["check 1: year % 4 == 0 && year % 100 != 0", "check 2: year % 400 == 0", "dono me se koi ek true → leap year"],
    c: `int year = 1900;
boolean leap = (year % 4 == 0 && year % 100 != 0)
            || (year % 400 == 0);
System.out.println(leap ? "Leap" : "Not leap"); // Not leap`
  },
  {
    lv: 1, t: "Grade Calculator",
    q: "Marks se grade do: 90+ → A, 75+ → B, 60+ → C, 40+ → D, warna F",
    h: "if-else ladder upar se neeche chalta hai — sabse bade condition se shuru karo, pehla match hi jeet jaata hai.",
    l: ["marks >= 90 check karo pehle", "phir 75, phir 60, phir 40", "kuch match nahi → else me F"],
    c: `int marks = 78;
char grade;
if (marks >= 90) grade = 'A';
else if (marks >= 75) grade = 'B';
else if (marks >= 60) grade = 'C';
else if (marks >= 40) grade = 'D';
else grade = 'F';
System.out.println(grade); // B`
  },

  /* ---------- Level 2 · Loops & Patterns ---------- */

  {
    lv: 2, t: "Fibonacci Series",
    q: "Pehle n Fibonacci numbers print karo. n = 7 → 0 1 1 2 3 5 8",
    h: "Sirf pichhle do numbers yaad rakhne hain (a, b). Naya = a + b, phir dono ek step aage shift.",
    l: ["a = 0, b = 1", "a print karo", "next = a + b", "a = b, b = next (shift)", "n baar repeat"],
    c: `int n = 7, a = 0, b = 1;
for (int i = 0; i < n; i++) {
    System.out.print(a + " ");
    int next = a + b;
    a = b;
    b = next;
}
// 0 1 1 2 3 5 8`
  },
  {
    lv: 2, t: "Palindrome Number",
    q: "Number ulta karke bhi same hai? 121 → yes, 123 → no",
    h: "Reverse a Number wala logic yahin kaam aayega — bas original ko pehle copy kar lena, kyunki n loop me barbaad ho jaata hai.",
    l: ["original ki copy banao", "n ka reverse nikaalo", "reverse == original ? palindrome!"],
    c: `int n = 121, original = n, rev = 0;
while (n > 0) {
    rev = rev * 10 + n % 10;
    n /= 10;
}
System.out.println(rev == original); // true`
  },
  {
    lv: 2, t: "GCD (HCF)",
    q: "Do numbers ka GCD nikaalo. gcd(48, 18) = 6",
    h: "Euclid ka trick: gcd(a, b) = gcd(b, a % b). Jab b = 0 ho jaaye, a hi answer hai. Dry run zaroor karo!",
    l: ["jab tak b != 0:", "temp = b", "b = a % b", "a = temp", "end me a hi GCD hai"],
    c: `int a = 48, b = 18;
while (b != 0) {
    int temp = b;
    b = a % b;
    a = temp;
}
System.out.println(a); // 6
// dry run: (48,18) → (18,12) → (12,6) → (6,0)`
  },
  {
    lv: 2, t: "LCM",
    q: "Do numbers ka LCM nikaalo. lcm(4, 6) = 12",
    h: "Formula yaad rakho: a × b = gcd × lcm. GCD pichle question me nikal hi chuka hai.",
    l: ["pehle GCD nikaalo (Euclid)", "lcm = (a * b) / gcd", "print karo"],
    c: `int a = 4, b = 6;
int x = a, y = b;
while (y != 0) {
    int temp = y;
    y = x % y;
    x = temp;
}
int lcm = (a * b) / x;
System.out.println(lcm); // 12`
  },
  {
    lv: 2, t: "Right Triangle Pattern",
    q: "n = 4 ke liye:\n*\n* *\n* * *\n* * * *",
    h: "Pattern = nested loop. Bahar wala loop row chalata hai, andar wala us row me stars. Row i me i stars.",
    l: ["i = 1 se n (rows)", "andar j = 1 se i tak star print", "row ke baad new line"],
    c: `int n = 4;
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print("* ");
    }
    System.out.println();
}`
  },
  {
    lv: 2, t: "Inverted Triangle",
    q: "n = 4 ke liye:\n* * * *\n* * *\n* *\n*",
    h: "Wahi triangle, bas ulta — row 1 me n stars, row 2 me n-1... Inner loop ki limit ghatani hai.",
    l: ["i = 1 se n (rows)", "andar j = 1 se (n - i + 1) tak stars", "new line"],
    c: `int n = 4;
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n - i + 1; j++) {
        System.out.print("* ");
    }
    System.out.println();
}`
  },
  {
    lv: 2, t: "Pyramid Pattern",
    q: "n = 4 ke liye center-aligned pyramid:\n   *\n  ***\n *****\n*******",
    h: "Har row ke do kaam: pehle spaces (n - i), phir stars (2*i - 1). Do inner loops lagenge.",
    l: ["i = 1 se n", "pehle (n - i) spaces", "phir (2*i - 1) stars", "new line"],
    c: `int n = 4;
for (int i = 1; i <= n; i++) {
    for (int s = 1; s <= n - i; s++) System.out.print(" ");
    for (int j = 1; j <= 2 * i - 1; j++) System.out.print("*");
    System.out.println();
}`
  },
  {
    lv: 2, t: "Number Pattern",
    q: "n = 4 ke liye:\n1\n1 2\n1 2 3\n1 2 3 4",
    h: "Right triangle wala hi structure — star ki jagah j print kar do. Itna hi difference hai!",
    l: ["i = 1 se n (rows)", "andar j = 1 se i tak j print karo", "new line"],
    c: `int n = 4;
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print(j + " ");
    }
    System.out.println();
}`
  },
  {
    lv: 2, t: "Sum of Squares",
    q: "1² + 2² + 3² + ... + n² nikaalo. n = 5 → 55",
    h: "Sum of 1 to n jaisa hi — bas i ki jagah i*i jodna hai.",
    l: ["sum = 0", "i = 1 se n: sum += i * i", "print"],
    c: `int n = 5, sum = 0;
for (int i = 1; i <= n; i++) {
    sum += i * i;
}
System.out.println(sum); // 1+4+9+16+25 = 55`
  },
  {
    lv: 2, t: "Decimal to Binary",
    q: "13 ko binary me convert karo → 1101",
    h: "n % 2 se binary ka ek bit milta hai — lekin ulte order me. Isliye naya bit aage jodo, peeche nahi.",
    l: ["bin = \"\" (empty string)", "bit = n % 2", "bin = bit + bin (aage jodo!)", "n /= 2, repeat jab tak n > 0"],
    c: `int n = 13;
String bin = "";
while (n > 0) {
    bin = (n % 2) + bin;
    n /= 2;
}
System.out.println(bin); // 1101
// dry run: 13→1, 6→0, 3→1, 1→1`
  },
  {
    lv: 2, t: "Count a Digit",
    q: "Number me koi digit kitni baar aaya? n = 51255, d = 5 → 3 baar",
    h: "Digits nikaalne ka wahi % 10 wala tareeka — har digit ko d se compare karo.",
    l: ["count = 0", "digit = n % 10", "digit == d ? count++", "n /= 10, repeat"],
    c: `int n = 51255, d = 5, count = 0;
while (n > 0) {
    if (n % 10 == d) count++;
    n /= 10;
}
System.out.println(count); // 3`
  },
  {
    lv: 2, t: "Digital Root",
    q: "Digits ka sum karte raho jab tak single digit na bache. 9875 → 29 → 11 → 2",
    h: "Sum of digits ko ek aur loop me lapet do: jab tak n > 9, sum nikaalo aur usi ko naya n bana do.",
    l: ["jab tak n > 9:", "n ke digits ka sum nikaalo", "n = sum", "single digit bacha → answer"],
    c: `int n = 9875;
while (n > 9) {
    int sum = 0;
    while (n > 0) {
        sum += n % 10;
        n /= 10;
    }
    n = sum;
}
System.out.println(n); // 2`
  },
  {
    lv: 2, t: "Perfect Number",
    q: "Number apne divisors (khud ko chhodkar) ke sum ke barabar hai? 28 → 1+2+4+7+14 = 28 ✓",
    h: "1 se n/2 tak har number check karo — n % i == 0 matlab divisor hai, sum me jodo.",
    l: ["sum = 0", "i = 1 se n/2: agar n % i == 0, sum += i", "sum == n ? perfect!"],
    c: `int n = 28, sum = 0;
for (int i = 1; i <= n / 2; i++) {
    if (n % i == 0) sum += i;
}
System.out.println(sum == n); // true`
  },
  {
    lv: 2, t: "Strong Number",
    q: "Digits ke factorials ka sum == number? 145 → 1! + 4! + 5! = 1 + 24 + 120 = 145 ✓",
    h: "Do purane dost milao: sum-of-digits ka loop + har digit ka factorial andar nikaalo.",
    l: ["original copy rakho, sum = 0", "digit = n % 10", "digit ka factorial nikaalo (chhota inner loop)", "sum me jodo, n /= 10", "sum == original ? strong!"],
    c: `int n = 145, original = n, sum = 0;
while (n > 0) {
    int digit = n % 10, fact = 1;
    for (int i = 1; i <= digit; i++) fact *= i;
    sum += fact;
    n /= 10;
}
System.out.println(sum == original); // true`
  },
  {
    lv: 2, t: "All Tables (1 to 10)",
    q: "1 se 10 tak sabke tables print karo — ek hi program me.",
    h: "Table wala code ek aur loop ke andar daal do. Bahar wala loop number badalta hai, andar wala table chalata hai.",
    l: ["n = 1 se 10 (bahar)", "i = 1 se 10 (andar): n * i print", "har table ke baad blank line"],
    c: `for (int n = 1; n <= 10; n++) {
    for (int i = 1; i <= 10; i++) {
        System.out.println(n + " x " + i + " = " + (n * i));
    }
    System.out.println();
}`
  },

  /* ---------- Level 3 · Think Deeper ---------- */

  {
    lv: 3, t: "Prime Check",
    q: "Number prime hai ya nahi? 29 → prime, 15 → not prime",
    h: "2 se √n tak koi bhi number divide kar de toh prime nahi. √n tak hi kyun? Socho — factors pairs me aate hain.",
    l: ["n < 2 → not prime", "i = 2 se i*i <= n tak", "n % i == 0 → not prime, break", "koi divisor nahi mila → prime"],
    c: `int n = 29;
boolean prime = n >= 2;
for (int i = 2; i * i <= n; i++) {
    if (n % i == 0) {
        prime = false;
        break;
    }
}
System.out.println(prime); // true`
  },
  {
    lv: 3, t: "Primes in a Range",
    q: "1 se 50 tak ke saare prime numbers print karo.",
    h: "Prime check wale code ko ek aur loop me daal do — har number ke liye wahi check repeat.",
    l: ["n = 2 se 50 (bahar wala loop)", "har n pe prime check chalao (andar wala)", "prime nikla toh print"],
    c: `for (int n = 2; n <= 50; n++) {
    boolean prime = true;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            prime = false;
            break;
        }
    }
    if (prime) System.out.print(n + " ");
}
// 2 3 5 7 11 13 ... 47`
  },
  {
    lv: 3, t: "Armstrong Number",
    q: "3-digit number jiske digits ke cubes ka sum khud number ho. 153 → 1³ + 5³ + 3³ = 153 ✓",
    h: "Sum of digits wala hi frame — bas digit ki jagah digit*digit*digit jodo.",
    l: ["original copy rakho, sum = 0", "digit nikaalo, uska cube sum me jodo", "n /= 10, repeat", "sum == original ? Armstrong!"],
    c: `int n = 153, original = n, sum = 0;
while (n > 0) {
    int d = n % 10;
    sum += d * d * d;
    n /= 10;
}
System.out.println(sum == original); // true`
  },
  {
    lv: 3, t: "Array Max & Min",
    q: "Array me sabse bada aur sabse chhota number dhundo — ek hi loop me.",
    h: "Pehle element ko max AUR min dono maan lo, phir baaki har element se dono ko challenge karao.",
    l: ["max = arr[0], min = arr[0]", "i = 1 se end tak", "arr[i] > max ? max update", "arr[i] < min ? min update"],
    c: `int[] arr = {7, 2, 9, 4, 1};
int max = arr[0], min = arr[0];
for (int i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
}
System.out.println(max + " " + min); // 9 1`
  },
  {
    lv: 3, t: "Reverse an Array",
    q: "{1, 2, 3, 4, 5} ko {5, 4, 3, 2, 1} bana do — in place, naya array banaye bina.",
    h: "Do pointers: ek shuru se, ek end se. Dono ko swap karo aur beech ki taraf badho jab tak mil na jaayen.",
    l: ["left = 0, right = length - 1", "arr[left] ↔ arr[right] swap", "left++, right--", "left < right tak repeat"],
    c: `int[] arr = {1, 2, 3, 4, 5};
int left = 0, right = arr.length - 1;
while (left < right) {
    int temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
}
// arr = {5, 4, 3, 2, 1}`
  },
  {
    lv: 3, t: "Linear Search",
    q: "Array me target element kis index pe hai? Nahi mila toh -1.",
    h: "Seedha simple: har element ko target se compare karo, mila toh index return — aage dekhne ki zaroorat nahi.",
    l: ["i = 0 se end tak", "arr[i] == target ? index mil gaya, break", "loop khatam aur nahi mila → -1"],
    c: `int[] arr = {4, 8, 15, 16, 23};
int target = 15, index = -1;
for (int i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
        index = i;
        break;
    }
}
System.out.println(index); // 2`
  },
  {
    lv: 3, t: "Second Largest",
    q: "Array ka doosra sabse bada number — sort kiye bina, ek hi pass me.",
    h: "Do variables rakho: max aur second. Naya bada number aaye toh purana max second ban jaata hai.",
    l: ["max aur second dono track karo", "arr[i] > max ? second = max, max = arr[i]", "warna agar arr[i] > second (aur max nahi) ? second update"],
    c: `int[] arr = {7, 2, 9, 4, 1};
int max = Integer.MIN_VALUE, second = Integer.MIN_VALUE;
for (int x : arr) {
    if (x > max) {
        second = max;
        max = x;
    } else if (x > second && x != max) {
        second = x;
    }
}
System.out.println(second); // 7`
  },
  {
    lv: 3, t: "Even / Odd in Array",
    q: "Array me kitne even aur kitne odd elements hain?",
    h: "Range wale even/odd counter ka array version — i ki jagah arr[i] check karo.",
    l: ["even = 0, odd = 0", "har element pe % 2 check", "counters print karo"],
    c: `int[] arr = {3, 8, 5, 12, 7, 6};
int even = 0, odd = 0;
for (int x : arr) {
    if (x % 2 == 0) even++;
    else odd++;
}
System.out.println(even + " even, " + odd + " odd"); // 3 even, 3 odd`
  },
  {
    lv: 3, t: "Sum & Average of Array",
    q: "Array ke sab elements ka sum aur average nikaalo.",
    h: "Sum toh easy hai — average me dhyan: int / int = int hota hai. Decimal chahiye toh double cast karo.",
    l: ["sum = 0, har element jodo", "avg = (double) sum / length", "cast bhoole toh .5 wala part ud jaayega!"],
    c: `int[] arr = {4, 7, 1, 8};
int sum = 0;
for (int x : arr) sum += x;
double avg = (double) sum / arr.length;
System.out.println(sum + " " + avg); // 20 5.0`
  },
  {
    lv: 3, t: "Bubble Sort",
    q: "{5, 1, 4, 2} ko ascending order me sort karo — khud ka sort, library ka nahi.",
    h: "Bagal wale elements compare karo — galat order me hain toh swap. Har pass me sabse bada element end pe 'bubble' ho jaata hai.",
    l: ["bahar wala loop: n-1 passes", "andar wala: j aur j+1 compare", "arr[j] > arr[j+1] ? swap", "har pass ke baad end sorted hota jaata hai"],
    c: `int[] arr = {5, 1, 4, 2};
for (int i = 0; i < arr.length - 1; i++) {
    for (int j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            int temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
// arr = {1, 2, 4, 5}`
  },
  {
    lv: 3, t: "Binary Search",
    q: "Sorted array me target dhundo — har step me aadha array discard karke.",
    h: "Beech ka element dekho: target chhota hai toh left half me dhundo, bada hai toh right half me. Range ko low/high se track karo.",
    l: ["low = 0, high = length - 1", "mid = (low + high) / 2", "arr[mid] == target ? mil gaya", "target chhota ? high = mid - 1, warna low = mid + 1", "low > high ho gaya → nahi hai"],
    c: `int[] arr = {2, 5, 8, 12, 16, 23};
int target = 12, low = 0, high = arr.length - 1, index = -1;
while (low <= high) {
    int mid = (low + high) / 2;
    if (arr[mid] == target) { index = mid; break; }
    else if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
}
System.out.println(index); // 3`
  },
  {
    lv: 3, t: "Element Frequency",
    q: "Har unique element kitni baar aaya? {2, 5, 2, 8, 5, 2} → 2:3, 5:2, 8:1",
    h: "Har element ke liye poora array gin lo — lekin jo element pehle aa chuka hai use dobara mat print karo (peeche check karo).",
    l: ["har i ke liye: pehle check karo ki arr[i] pehle aa chuka hai kya", "aa chuka → skip", "nahi → poore array me count karke print"],
    c: `int[] arr = {2, 5, 2, 8, 5, 2};
for (int i = 0; i < arr.length; i++) {
    boolean seen = false;
    for (int k = 0; k < i; k++) {
        if (arr[k] == arr[i]) { seen = true; break; }
    }
    if (seen) continue;
    int count = 0;
    for (int j = 0; j < arr.length; j++) {
        if (arr[j] == arr[i]) count++;
    }
    System.out.println(arr[i] + ": " + count);
}`
  },
  {
    lv: 3, t: "String Palindrome",
    q: "\"madam\" palindrome hai? Reverse function use kiye bina check karo.",
    h: "Array reverse wala two-pointer idea strings pe bhi chalta hai — charAt() se compare karo, swap ki zaroorat hi nahi.",
    l: ["left = 0, right = length - 1", "charAt(left) != charAt(right) ? not palindrome", "left++, right--", "pointers cross ho gaye bina fail → palindrome"],
    c: `String s = "madam";
boolean pal = true;
int left = 0, right = s.length() - 1;
while (left < right) {
    if (s.charAt(left) != s.charAt(right)) {
        pal = false;
        break;
    }
    left++;
    right--;
}
System.out.println(pal); // true`
  },
  {
    lv: 3, t: "Count Vowels",
    q: "String me kitne vowels hain? \"programming\" → 3",
    h: "Har character ko \"aeiou\" me dhundo — indexOf() != -1 ka matlab vowel hai. Case ka dhyan rakhna!",
    l: ["count = 0", "string lowercase kar lo", "har char: \"aeiou\".indexOf(ch) != -1 ? count++", "print"],
    c: `String s = "programming".toLowerCase();
int count = 0;
for (int i = 0; i < s.length(); i++) {
    if ("aeiou".indexOf(s.charAt(i)) != -1) count++;
}
System.out.println(count); // 3`
  },
  {
    lv: 3, t: "Matrix Diagonal Sum",
    q: "3x3 matrix ke main diagonal ka sum nikaalo (upar-left se neeche-right).",
    h: "Diagonal pe row aur column ka index same hota hai: m[0][0], m[1][1], m[2][2] — matlab ek hi loop kaafi hai.",
    l: ["sum = 0", "i = 0 se n: sum += m[i][i]", "bas! nested loop ki zaroorat hi nahi thi"],
    c: `int[][] m = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};
int sum = 0;
for (int i = 0; i < m.length; i++) {
    sum += m[i][i];
}
System.out.println(sum); // 1 + 5 + 9 = 15`
  }
];

/* ============================================
   Render
   ============================================ */

function make(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}

const LEVEL_NAMES = { 1: "Level 1", 2: "Level 2", 3: "Level 3" };
const list = document.getElementById("qlist");

QUESTIONS.forEach(function (q, i) {
  const card = make("article", "q-card");
  card.dataset.lv = q.lv;

  const head = make("div", "q-head");
  head.appendChild(make("span", "q-num", "#" + String(i + 1).padStart(2, "0")));
  head.appendChild(make("h2", "q-title", q.t));
  head.appendChild(make("span", "level-tag level-tag-" + q.lv, LEVEL_NAMES[q.lv]));
  card.appendChild(head);

  card.appendChild(make("p", "q-statement", q.q));

  const hint = make("details", "q-details q-hint");
  hint.appendChild(make("summary", null, "\uD83D\uDCA1 Hint"));
  const hintBody = make("div", "q-body");
  hintBody.appendChild(make("p", null, q.h));
  hint.appendChild(hintBody);
  card.appendChild(hint);

  const logic = make("details", "q-details q-logic");
  logic.appendChild(make("summary", null, "\uD83E\uDDE0 Logic steps"));
  const logicBody = make("div", "q-body");
  const ol = make("ol");
  q.l.forEach(function (step) {
    ol.appendChild(make("li", null, step));
  });
  logicBody.appendChild(ol);
  logic.appendChild(logicBody);
  card.appendChild(logic);

  const code = make("details", "q-details q-code");
  code.appendChild(make("summary", null, "\u2615 Java code"));
  const codeBody = make("div", "q-body");
  const pre = make("pre");
  pre.appendChild(make("code", null, q.c));
  codeBody.appendChild(pre);
  codeBody.appendChild(make("p", "q-footnote", "Code dekhne se pehle paper pe dry run table banao \u2014 tabhi logic pakka hoga. \u270D\uFE0F"));
  code.appendChild(codeBody);
  card.appendChild(code);

  list.appendChild(card);
});

/* ============================================
   Level filter
   ============================================ */

const buttons = document.querySelectorAll(".filter-btn");

buttons.forEach(function (b) {
  const lv = Number(b.dataset.lv);
  const count = lv === 0
    ? QUESTIONS.length
    : QUESTIONS.filter(function (q) { return q.lv === lv; }).length;
  b.textContent = b.textContent + " (" + count + ")";
});

function applyFilter(lv) {
  buttons.forEach(function (b) {
    b.classList.toggle("active", Number(b.dataset.lv) === lv);
  });
  document.querySelectorAll(".q-card").forEach(function (c) {
    c.style.display = (lv === 0 || Number(c.dataset.lv) === lv) ? "" : "none";
  });
}

buttons.forEach(function (b) {
  b.addEventListener("click", function () {
    applyFilter(Number(b.dataset.lv));
  });
});

// Deep links: questions.html#l1 / #l2 / #l3
const hashMatch = location.hash.match(/^#l([123])$/);
if (hashMatch) applyFilter(Number(hashMatch[1]));

## Case Exercise 1

### 作業一、猜數字

#### 學生小明

https://replit.com/@lighthouse/TAassessmentguessnumberjs

指標：Try harder

回饋：

1. Prompt 沒有防呆機制
   - 輸入非數字 console 印出 NaN ，程式執行一次印出 Computer ... Win 結束
   - 輸入小於1或超過100，輸入共兩次後程式直接結束
   - 輸入含小數點數字，程式執行到設定的50次結束
2. 題目要求電腦猜幾次都可以，但是程式裡設定上限為50次，有可能執行50次電腦還沒猜到
3. 建議：更好的格式化程式碼縮排，方便閱讀

#### 學生小華

https://replit.com/@lighthouse/taassessmentguessnumberjs2

指標：Good

回饋：

1. Prompt 沒有防呆機制
   - 輸入非數字 console 印出 Answer is NaN ，程式執行一次猜數字，但是因為 NaN 不匹配 while 和 while 裡面的兩個 if 條件，無法跳出迴圈
   - 輸入1 - 100之間含小數點數字，直接無條件捨去執行猜數字程式，應該要求重新輸入一個整數



## Case Exercise 2

### 作業一

[Model answer: Demo](https://alphacamp.github.io/personal-site/)

指標：Excellent

指引：

1. 善用語意化標籤
2. 圖片有做自適應等比縮放
3. head 地方可以多加一些 meta 像是 description, open graph...等，為 SEO 做優化
4. Contact 的 write message textarea 也許可以在樣式加個 resize: none;

### 作業二

```js
function fizzBuzz(num) {
  let str = ''
  if (num % 3 === 0) {
    str += 'Fizz'
  }
  if (num % 5 === 0) {
    str += 'Buzz'
  }
  if (str != '') {
    return str
  } else {
    return num
  }
}
```

指標：Good

指引：

1. 邏輯可以再簡單清晰一點，把兩個分別判斷 `num` 是否為 3 的倍數 if 條件和 5 的倍數 if 條件寫在一起，以及例外條件寫在最後的 `else` 裡面，如下
```js
if (num % 3 === 0) { 
  ... 
} else if (num % 5 === 0) {
  ...
} else {
  ...
}
```
2. 承上述，如果把判斷條件寫在一起，就可以不用 `str` 變量，直接在 3 或 5 的倍數條件裡 `return 'Fizz'` 或 `return 'Buzz'`，例外條件 `else` 的地方 `return num`，減少不必要的變量聲明


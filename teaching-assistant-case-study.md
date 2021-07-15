## Case Exercise 1

### 作業一、猜數字

#### 學生小明

[https://replit.com/@lighthouse/TAassessmentguessnumberjs](https://replit.com/@lighthouse/TAassessmentguessnumberjs)

指標：Try harder

回饋：

1. Prompt 沒有防呆機制
   - 輸入非數字 console 印出 NaN ，程式執行一次印出 Computer ... Win 結束
   - 輸入小於1或超過100，輸入共兩次後程式直接結束
   - 輸入含小數點數字，程式執行到設定的50次結束
2. 題目要求電腦猜幾次都可以，但是程式裡設定上限為50次，有可能執行50次電腦還沒猜到
3. 建議：更好的格式化程式碼縮排，方便閱讀

#### 學生小華

[https://replit.com/@lighthouse/taassessmentguessnumberjs2](https://replit.com/@lighthouse/taassessmentguessnumberjs2)

指標：Good

回饋：

1. Prompt 沒有防呆機制
   - 輸入非數字 console 印出 Answer is NaN ，程式執行一次猜數字，但是因為 NaN 不匹配 while 和 while 裡面的兩個 if 條件，無法跳出迴圈
   - 輸入1 - 100之間含小數點數字，直接無條件捨去執行猜數字程式，應該要求重新輸入一個整數

<div style="page-break-after: always; break-after: page;"></div>

## Case Exercise 2

### 作業一

[Model answer: Demo](https://alphacamp.github.io/personal-site/)

<table>
<thead>
    <tr>
        <th></th>
        <th>批改指標</th>
        <th>批改指引</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>Try Harder</td>
        <td>沒有達成以下指標</td>
        <td>
            <ul>
                <li>網站無法運行</li>
            </ul>
        </td>
    <tr>
    <tr>
        <td rowspan="3">Good</td>
        <td>程式能正確執行</td>
        <td>
            <ul>
                <li>網站可運行</li>
                <li>基本展示正常</li>
            </ul>
        </td>
    <tr>
    <tr>
        <td>程式能正確執行且<br/>對使用者友善</td>
        <td>
            <ul>
                <li>網頁字體、配色易於閱讀</li>
                <li>使用一些圖標代替文字，易於使用者理解和簡化頁面</li>
                <li>滑鼠游標有動作交互指引，如按鈕 hover 狀態、圖片 hover 陰影</li>
            </ul>
        </td>
    <tr>
    <tr>
        <td rowspan="2">Excellent</td>
        <td>達成以上指標且<br/>資料結構與流程設計完善</td>
        <td>
            <ul>
                <li>與設計稿視覺完全一致</li>
                <li>使用語意化標籤</li>
                <li>樣式 class name 模塊化</li>
                <li>表單使用正確的 input 類型，可自動填入用戶資料</li>
                <li>內容兼顧各個解析度的自適應排版</li>
                <li>圖片支援等比例自適應放大縮小</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>達成以上指標且<br/>顧及了程式碼易讀性</td>
        <td>
            <ul>
                <li>程式碼有註解，方便閱讀及後續維護</li>
                <li>變量命名容易理解</li>
            </ul>
        </td>
    </tr>
</tbody>
</table>

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

<table>
<thead>
    <tr>
        <th></th>
        <th>批改指標</th>
        <th>批改指引</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>Try Harder</td>
        <td>沒有達成以下指標</td>
        <td>
            <ul>
                <li>程式無法執行</li>
            </ul>
        </td>
    <tr>
    <tr>
        <td rowspan="3">Good</td>
        <td>程式能正確執行</td>
        <td>
            <ul>
                <li>程式可執行</li>
            </ul>
        </td>
    <tr>
    <tr>
        <td>程式能正確執行且<br/>對使用者友善</td>
        <td>
            <ul>
                <li>有清楚的輸入類型 (number, string ...)</li>
            </ul>
        </td>
    <tr>
    <tr>
        <td rowspan="2">Excellent</td>
        <td>達成以上指標且<br/>資料結構與流程設計完善</td>
        <td>
            <ul>
                <li>沒有多餘的變量聲明</li>
                <li>在最外層邏輯保證使用 `return` 避免異常錯誤</li>
                <li>簡潔且有效率的邏輯處理</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>達成以上指標且<br/>顧及了程式碼易讀性</td>
        <td>
            <ul>
                <li>程式碼有註解，方便閱讀及後續維護</li>
                <li>變量命名容易理解</li>
            </ul>
        </td>
    </tr>
</tbody>

# 3. 請概述通常前端 CRUD 會用到的後端 API 有哪些，規格是甚麼
(規格部分皆以 RESTful API 描述，因 GraphQL 皆為 POST method)

&nbsp;

## Create
- 產生新使用者 (/POST /user)
- 新增 PO 文 (/POST /post)
- 加入最愛 (/POST /favorite)

&nbsp;

## Read
- 產品篩選，在網址列帶入不同的參數取得篩選後的商品 (/GET /product?flt=品牌_Apple%2C螢幕尺寸_4.7吋)
- 載入更多商品，在網址列帶入如 page=2 的參數 (/GET /product?page=2)

&nbsp;

## Update
- 更改使用者某欄位的資料 (/PUT /user/id, /PATCH /user/id)
- 更改先前發布的文章 (/PUT /post/id, /PATCH /post/id)

&nbsp;

## Delete
- 刪除帳號 (/DELETE /user/id)
- 移除最愛 (/DELETE /whished_listings?locale=zh-TW)
- 刪除文章 (/DELETE /post/id)


&nbsp;

&nbsp;

## GET vs POST
| method | GET | POST |
| -------- | -------- | -------- |
| 歷史紀錄     | &#9745;     | &#9744;     |
| 快取     | &#9745;     | &#9744;     |
| 本身的安全性 (safe)     | &#9745;     | &#9744;     |
| 資料長度限制     | &#9745;     | &#9744;     |
| 外在對自身的安全性 (secure)     | &#9744;     | &#9745;     |

&nbsp;

### 歷史紀錄
**GET**
- 以購物網站為例，即使是 SPA，加入篩選條件時，會將參數帶入網址列的參數，並同時加入瀏覽器歷史紀錄；換頁時也會帶入 page=2 的參數，加入歷史紀錄
- 但當為載入更多的情形，則不會加入歷史紀錄

&nbsp;

**POST**
- 不會存在歷史紀錄，且如果提交表單後返回上一頁，資料會被重新提交

&nbsp;

### 快取
**GET**
- 因 GET 為 idempotent(即送出多次都會回傳一樣的結果)，瀏覽器會自動快取

**POST**
- POST 因不是 idempotent，回傳資料不同，故在客戶端無法被快取

&nbsp;

### 本身的安全性 (safe)
**GET**
- 因 GET 不會更動資源，所以為安全的 (safe)

**POST**
- POST 會更動到資源，改動資料庫的資料，故為不安全的 (unsafe)

&nbsp;

### 資料長度限制
- GET 最多只能帶 2048 個字元，POST 則沒有限制
  
&nbsp;

### 外在對自身的安全性 (secure)
**GET**
- 因 GET 會被存儲在瀏覽器歷史紀錄 & 被快取，容易暴露資料，故為 unsecure

**POST**
- POST 將資料放在 request body，不會被記錄 & 快取，可以放相對較敏感的資料，為 secure 的


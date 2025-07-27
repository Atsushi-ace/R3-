# お問い合わせフォームのメール設定

## Option 1: Formspree (推奨 - 無料で簡単)

### 設定手順:

1. **Formspreeアカウント作成**
   - https://formspree.io にアクセス
   - 無料アカウントを作成

2. **フォーム作成**
   - ダッシュボードで「New Form」をクリック
   - フォーム名を入力（例：「宮川工務店お問い合わせ」）

3. **フォームIDを取得**
   - 作成されたフォームのIDをコピー
   - 例：`xrgjqkqw`

4. **HTMLファイルを更新**
   - `index.html`の以下の行を編集：
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" id="contactForm">
   ```
   - `YOUR_FORM_ID`を実際のフォームIDに置き換え
   - 例：`<form action="https://formspree.io/f/xrgjqkqw" method="POST" id="contactForm">`

5. **メールアドレスを設定**
   - Formspreeダッシュボードで受信メールアドレスを設定
   - `yumamiyakawa@icloud.com`を入力

### メリット:
- ✅ 無料で使用可能
- ✅ 設定が簡単
- ✅ スパム対策機能付き
- ✅ メール通知機能
- ✅ フォーム送信履歴管理

---

## Option 2: Netlify Forms (無料)

### 設定手順:

1. **Netlifyにデプロイ**
   - GitHubリポジトリをNetlifyに接続
   - 自動デプロイを設定

2. **フォーム属性を追加**
   ```html
   <form name="contact" method="POST" data-netlify="true">
   ```

3. **メール通知設定**
   - Netlifyダッシュボードでメール通知を有効化
   - 受信メールアドレスを設定

---

## Option 3: EmailJS (JavaScript)

### 設定手順:

1. **EmailJSアカウント作成**
   - https://www.emailjs.com にアクセス
   - 無料アカウントを作成

2. **メールサービス設定**
   - Gmail、Outlook等を接続

3. **テンプレート作成**
   - メールテンプレートを作成
   - 変数を設定（{{name}}, {{email}}, {{message}}等）

4. **JavaScriptコード追加**
   ```javascript
   emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
       name: document.getElementById('name').value,
       email: document.getElementById('email').value,
       message: document.getElementById('message').value
   });
   ```

---

## 推奨設定: Formspree

最も簡単で確実な方法は**Formspree**です。

### 設定完了後の動作:
1. ユーザーがフォームを送信
2. Formspreeがメールを自動送信
3. あなたのメールアドレス（yumamiyakawa@icloud.com）に届く
4. スパム対策も自動で行われる

### セキュリティ機能:
- スパムフィルター
- reCAPTCHA対応
- 送信制限機能
- ブラックリスト機能

---

## トラブルシューティング

### メールが届かない場合:
1. スパムフォルダを確認
2. Formspreeダッシュボードで送信履歴を確認
3. メールアドレスの設定を再確認

### フォームが送信されない場合:
1. フォームIDが正しく設定されているか確認
2. ブラウザの開発者ツールでエラーを確認
3. 必須項目が全て入力されているか確認 
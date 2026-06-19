# 9NINE by truth ｜ 公式ホームページ

東広島・西条の美容室「9NINE by truth」の公式サイト。
Next.js (App Router) / TypeScript / Tailwind CSS で制作。

実績が証明する技術。また来たくなる空間。

---

## 必要環境
- Node.js 18.18 以上（推奨：20 以上）

## セットアップ

```bash
npm install
npm run dev
```

ブラウザで http://localhost:3000 を開いてください。

## ビルド（本番用）

```bash
npm run build
npm start
```

---

## 写真の入れ方（重要）

`public/images/` 配下のカテゴリフォルダに、決められたファイル名で写真を置くだけで反映されます。
詳しくは **`public/images/README.md`** を参照してください。

写真を置くまでは、各所に上品なプレースホルダー（砂色＋カテゴリ名）が表示されるので、
写真がそろう前でもサイト全体を確認できます。

| カテゴリ | フォルダ | 主な用途 |
|---|---|---|
| hero | `public/images/hero/` | トップ最上部の大きな写真 |
| salon | `public/images/salon/` | 店内・空間（半個室・スパ・シャンプー台） |
| style | `public/images/style/` | ヘアスタイル（6枚） |
| recruit | `public/images/recruit/` | 採用・スタッフ |
| award | `public/images/award/` | 受賞関連（任意） |
| logo | `public/images/logo/` | ロゴ（任意） |

---

## ページ構成

| パス | 内容 |
|---|---|
| `/` | トップ |
| `/concept` | コンセプト |
| `/style` | スタイル |
| `/menu` | メニュー |
| `/recruit` | リクルート |
| `/access` | アクセス（地図あり） |
| `/contact` | お問い合わせ |

---

## デプロイ
Vercel へそのままデプロイ可能です（推奨）。
GitHub にプッシュ → Vercel で import するだけで公開できます。

## 店舗情報の編集
店名・住所・営業時間・各種リンク・メニュー・強み等のテキストは
**`lib/site.ts`** に集約しています。ここを編集すれば全ページに反映されます。

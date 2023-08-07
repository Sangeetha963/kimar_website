# notespace base client

## 1. 仕様
### 1-1. 対象環境
環境は以下で検証します。

#### 1-1-1. OS
* windows 10
* macOSX 11.14~
* iOS 13~
* android 8.x~

#### 1-1-2.ブラウザ
* PC
	* Edge
	* Chrome最新
	* Firefox最新
* スマートフォン
	* Android -  Chrome
	* iOS - Safari(OS標準)

### 1-2. ディレクトリ・ファイルの命名
リソースファイルの命名・配置は以下の通りとします。

#### 1-2-1. 基本方針

* 大文字・小文字を基本とした半角英数で構成します。

#### 1-2-2. 共通リソース
##### サイト内共通リソースファイル
画像等のメディアファイルは`/public/static/`以下に使用するリソースを格納しています。
`global.css`等のスタイルファイルは`/assets/`以下に格納しています。

#### 1-2-3. コンポーネントファイル名
- scaffdogの仰せのままに
	- ファイル名はパスカルケースで構成します。

#### 1-2-4. コンポーネントディレクトリ名
- scaffdogの仰せのままに
	- 小文字を基本とした半数英数で、単語同士はキャメルケースで構成します。

#### 1-2-5. TBD ページファイル名
- ページは作成前に共有
- 小文字を基本とした半数英数で、単語同士はケバブケースで構成します。

### 1-3. コンポーネントファイル
#### 1-3-1. 共通コンポーネント
以下に格納しています。
`/src/components/common/`

#### 1-3-2. ページ別に利用するコンポーネント
以下に格納しています。
`/src/components/unique/{ページ名}`

### 1-4. CSS
#### 1-4-1. 読み込み用CSS
以下に格納しています。
`/src/assets/css/globals.css`

### 1-5. ディレクトリ配置規則

```
.root/
└── public/
│   └──static/
│      └──img/
│         ├── common/
│         ├── icon/
│         └── {ページごと}/
├── components/
│		├── common/ UIなど汎用的なコンポーネント
│		│		└── hoge /
│		│				├── cHoge.sories.tsx
│		│				├── cHoge.test.tsx
│		│				└── cHoge.tsx
│		└── functional/ 各画面固有のコンポーネント
│		|		└── hoge /
│		|				├── cHoge.sories.tsx
│		|				├── cHoge.test.tsx
│		|				└── cHoge.tsx
│		└── global/ 全ページで表示するコンポーネント
│				└── hoge /
│						├── cHoge.sories.tsx
│						├── cHoge.test.tsx
│						└── cHoge.tsx
└── routes
|		└── index.tsx
└── hooks
		└── use-hoge.ts
``` 

## 2. コーディングルール

### 2-1. 各種素材呼び出しパス記述
* サイト内：ルートパス

### 2-2. HTML(サイト内のもの)
* 文書型定義：HTML5
* 文字コード：UTF-8
* インデント：4スペース
* ファイル参照パス:ルートパス
* リンクパス：ルートパス

### 2-3. CSS
* 文書型定義：CSS3
* 文字コード：UTF-8
* インデント：4スペース
* ファイル参照パス:ルートパス

#### 2-3-1. ID, Class命名規則
- 基本的にはケバブケースで構成します。
- Block,Element,Modifierの要素をベースにしたBEMを使用します。
- Block,Element,Modifier同士は全て`-`ハイフン1つで区切ってください。
- 単語同士も`-`ハイフン1つで区切ってください。

```
NG例
- block__element--modifier
- block__element-element--modifier

OK例
- block-element-modifier
```

#### 2-3-2. 余白ルール
- 垂直方向のmarginは`margin-top`に統一してください。
- 水平方向のmarginは`margin-left`に統一してください。
	- ただし、中央寄せやflex-itemにおいての`margin: auto`はその限りではありません。

### 2-4. TypeScript
- 文字コード：UTF-8
- 可読性確保のため適宜コメントを記述

#### 2-4-1. 処理・記述のルール
- `util`、`state`、`effect`、`event`に分けて記述する

- util：汎用的に使用するツール
- state：状態管理するもの
- effect：副作用を発生させるもの
- event：処理

## 3. 起動方法

### 3-1. 各ライブラリインストール
```
npm install
```

### 3-2. 起動

```
npm run dev
```

### 3-3. コンポーネント作成
```
npm run scaffdog:component
```

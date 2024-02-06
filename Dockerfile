FROM node:14

# アプリケーションディレクトリを作成する
WORKDIR /usr/src/app

# ワイルドカードを使用して、package.jsonとpackage-lock.jsonの両方をコピー
COPY package*.json ./

# アプリケーションの依存関係をインストールする
RUN npm install

# ポートを公開する
EXPOSE 3000

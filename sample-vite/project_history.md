# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# supabaseの設定を行う
- [JavaScriptクライアント ライブラリ](https://supabase.com/docs/reference/javascript/introduction)
```
@MacBook-Pro sample-vite % npm install @supabase/supabase-js

added 15 packages, and audited 295 packages in 6s

103 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
@MacBook-Pro sample-vite % 
```

# Firebase Cliのインストール
```
@MacBook-Pro Chapter1_issue2 % cd sample-vite 
@MacBook-Pro sample-vite % npm install firebase

removed 591 packages, and audited 376 packages in 2s

105 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
@MacBook-Pro sample-vite % npm add firebase

up to date, audited 376 packages in 572ms

105 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
@MacBook-Pro sample-vite % npm add add firebase-tools

added 592 packages, and audited 968 packages in 19s

155 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
@MacBook-Pro sample-vite % firebase login
Already logged in as gmail.com
@MacBook-Pro sample-vite % firebase init

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  /Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite

? Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices. Hosting: Configure files for Firebase Hosting and 
(optionally) set up GitHub Action deploys

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add, 
but for now we'll just set up a default project.

? Please select an option: Use an existing project
? Select a default Firebase project for this directory: study-record-930dc (study-record)
i  Using project study-record-930dc (study-record)

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? dist
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? Set up automatic builds and deploys with GitHub? No
? File dist/index.html already exists. Overwrite? Yes
✔  Wrote dist/index.html

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

✔  Firebase initialization complete!

@MacBook-Pro sample-vite % npm run build

> sample-vite@0.0.0 build
> vite build

vite v5.2.6 building for production...
✓ 108 modules transformed.
dist/index.html                    0.45 kB │ gzip:  0.32 kB
dist/assets/index-DuUS2S-g.css     0.05 kB │ gzip:  0.07 kB
dist/assets/browser-jdKbRPld.js    0.57 kB │ gzip:  0.40 kB
dist/assets/index-kHuSM879.js    248.02 kB │ gzip: 74.63 kB
✓ built in 590ms
@MacBook-Pro sample-vite % firebase deploy

=== Deploying to 'study-record-930dc'...

i  deploying hosting
i  hosting[study-record-930dc]: beginning deploy...
i  hosting[study-record-930dc]: found 5 files in dist
✔  hosting[study-record-930dc]: file upload complete
i  hosting[study-record-930dc]: finalizing version...
✔  hosting[study-record-930dc]: version finalized
i  hosting[study-record-930dc]: releasing new version...
✔  hosting[study-record-930dc]: release complete

✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/study-record-930dc/overview
Hosting URL: https://study-record-930dc.web.app
@MacBook-Pro sample-vite % 
```
# makeコマンドで一発でデプロイできるようにする
```
@MacBook-Pro Chapter1_issue2 % cd sample-vite 
@MacBook-Pro sample-vite % touch Makefile
@MacBook-Pro sample-vite % make deploy
npm run build

> sample-vite@0.0.0 build
> vite build

vite v5.2.6 building for production...
✓ 108 modules transformed.
dist/index.html                    0.45 kB │ gzip:  0.31 kB
dist/assets/index-DuUS2S-g.css     0.05 kB │ gzip:  0.07 kB
dist/assets/browser-DG1nDJhn.js    0.57 kB │ gzip:  0.40 kB
dist/assets/index-DFOREgO1.js    248.02 kB │ gzip: 74.65 kB
✓ built in 589ms
firebase deploy

=== Deploying to 'study-record-930dc'...

i  deploying hosting
i  hosting[study-record-930dc]: beginning deploy...
i  hosting[study-record-930dc]: found 5 files in dist
✔  hosting[study-record-930dc]: file upload complete
i  hosting[study-record-930dc]: finalizing version...
✔  hosting[study-record-930dc]: version finalized
i  hosting[study-record-930dc]: releasing new version...
✔  hosting[study-record-930dc]: release complete

✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/study-record-930dc/overview
Hosting URL: https://study-record-930dc.web.app
```
# jestとreact-testing-libraryをインストール
```
nameMacBook-Pro sample-vite % pwd
/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite
nameMacBook-Pro sample-vite % npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event babel-jest @babel/preset-env @babel/preset-react
(#######⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂) ⠙ idealTree:@testing-library/jest-dom: timing idealTree:node_modules/@testing-library/jest-dom Com(#######⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂) ⠙ idealTree:@testing-library/jest-dom: timing idealTree:node_modules/@testing-library/jest-dom Com(#######⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂) ⠋ idealTree:@testing-library/jest-dom: timing idealTree:node_modules/@testing-library/jest-dom Com

added 439 packages, removed 4 packages, changed 24 packages, and audited 1403 packages in 17s

168 packages are looking for funding
  run `npm fund` for details

12 vulnerabilities (1 low, 3 moderate, 8 high)

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
nameMacBook-Pro sample-vite % 
```

# テスト環境でも.envの環境変数を使えるようにしたいのでdotenvというライブラリをインストールする
```
nameMacBook-Pro sample-vite % npm i dotenv

added 1 package, and audited 1404 packages in 1s

169 packages are looking for funding
  run `npm fund` for details

12 vulnerabilities (1 low, 3 moderate, 8 high)

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
nameMacBook-Pro sample-vite % 
```

# npm run testでテストが実行できるようにする
```
nameMacBook-Pro sample-vite % npm install --save-dev jest-environment-jsdom @babel/core @babel/preset-env 
npm WARN deprecated abab@2.0.6: Use your platform's native atob() and btoa() methods instead
npm WARN deprecated domexception@4.0.0: Use your platform's native DOMException instead

added 42 packages, changed 2 packages, and audited 1446 packages in 4s

171 packages are looking for funding
  run `npm fund` for details

12 vulnerabilities (1 low, 3 moderate, 8 high)

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
nameMacBook-Pro sample-vite % 
```

# 
```

```

# 
```

```

# 
```

```


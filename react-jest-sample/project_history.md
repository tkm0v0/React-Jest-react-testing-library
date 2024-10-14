# jestとreact-testing-libraryをインストール
```
REMOVEDMacBook-Pro React-Jest-react-testing-library % cd react-jest-sample 
REMOVEDMacBook-Pro react-jest-sample % pwd
/Users/REMOVED_1/Desktop/_workspace_JISOU/workspace_React-Jest-react-testing-library/React-Jest-react-testing-library/react-jest-sample
REMOVEDMacBook-Pro react-jest-sample % npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event babel-jest @babel/preset-env @babel/preset-react
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@eslint/config-array@0.18.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@eslint/core@0.6.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@eslint/eslintrc@3.1.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@eslint/js@9.12.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@eslint/object-schema@2.1.4',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@eslint/plugin-kit@0.2.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@humanfs/core@0.19.0',
npm WARN EBADENGINE   required: { node: '>=18.18.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@humanfs/node@0.16.5',
npm WARN EBADENGINE   required: { node: '>=18.18.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@humanwhocodes/retry@0.3.1',
npm WARN EBADENGINE   required: { node: '>=18.18' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'eslint@9.12.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'eslint-scope@8.1.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'eslint-visitor-keys@4.1.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'espree@10.2.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm WARN deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported

added 742 packages, and audited 743 packages in 10s

121 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
REMOVEDMacBook-Pro react-jest-sample % 
```

# ここでテスト環境でも.envの環境変数を使えるようにしたいのでdotenvというライブラリを使っている。これもインストールする
```
nameMacBook-Pro react-jest-sample % npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event babel-jest @babel/preset-env @babel/preset-react
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@eslint/config-array@0.18.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@eslint/core@0.6.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@eslint/eslintrc@3.1.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@eslint/js@9.12.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@eslint/object-schema@2.1.4',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@eslint/plugin-kit@0.2.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@humanfs/core@0.19.0',
npm WARN EBADENGINE   required: { node: '>=18.18.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@humanfs/node@0.16.5',
npm WARN EBADENGINE   required: { node: '>=18.18.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@humanwhocodes/retry@0.3.1',
npm WARN EBADENGINE   required: { node: '>=18.18' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'eslint@9.12.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'eslint-scope@8.1.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'eslint-visitor-keys@4.1.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'espree@10.2.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm WARN deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported

added 742 packages, and audited 743 packages in 10s

121 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
nameMacBook-Pro react-jest-sample % pwd                           
/Users/name_1/Desktop/_workspace_JISOU/workspace_React-Jest-react-testing-library/React-Jest-react-testing-library/react-jest-sample
nameMacBook-Pro react-jest-sample % npm i dotenv
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@eslint/config-array@0.18.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@eslint/core@0.6.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@eslint/eslintrc@3.1.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@eslint/js@9.12.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@eslint/object-schema@2.1.4',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@eslint/plugin-kit@0.2.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@humanfs/core@0.19.0',
npm WARN EBADENGINE   required: { node: '>=18.18.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@humanfs/node@0.16.5',
npm WARN EBADENGINE   required: { node: '>=18.18.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@humanwhocodes/retry@0.3.1',
npm WARN EBADENGINE   required: { node: '>=18.18' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'eslint@9.12.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'eslint-scope@8.1.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'eslint-visitor-keys@4.1.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'espree@10.2.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }

added 1 package, and audited 744 packages in 1s

122 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
nameMacBook-Pro react-jest-sample % 
```

# ESLintのインストール
```
nameMacBook-Pro react-jest-sample % npx eslint --init

You can also run this command directly using 'npm init @eslint/config@latest'.
@eslint/create-config: v1.3.1

✖ How would you like to use ESLint? · 

node:internal/process/esm_loader:97
    internalBinding('errors').triggerUncaughtException(
                              ^

(Use `node --trace-uncaught ...` to show where the exception was thrown)

Node.js v18.17.0
npm ERR! code 1
npm ERR! path /Users/name_1/Desktop/_workspace_JISOU/workspace_React-Jest-react-testing-library/React-Jest-react-testing-library/react-jest-sample
npm ERR! command failed
npm ERR! command sh -c create-config

npm ERR! A complete log of this run can be found in: /Users/name_1/.npm/_logs/2024-10-14T13_25_27_503Z-debug-0.log
nameMacBook-Pro react-jest-sample % npx eslint --init
You can also run this command directly using 'npm init @eslint/config@latest'.
@eslint/create-config: v1.3.1

✔ How would you like to use ESLint? · syntax
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · javascript
✔ Where does your code run? · browser, node
The config that you've selected requires the following dependencies:

eslint, globals, eslint-plugin-react
✔ Would you like to install them now? · No / Yes
✔ Which package manager do you want to use? · npm
☕️Installing...
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@eslint/config-array@0.18.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@eslint/core@0.6.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@eslint/eslintrc@3.1.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@eslint/js@9.12.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@eslint/object-schema@2.1.4',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@eslint/plugin-kit@0.2.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@humanfs/core@0.19.0',
npm WARN EBADENGINE   required: { node: '>=18.18.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@humanfs/node@0.16.5',
npm WARN EBADENGINE   required: { node: '>=18.18.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@humanwhocodes/retry@0.3.1',
npm WARN EBADENGINE   required: { node: '>=18.18' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'eslint-scope@8.1.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'eslint-visitor-keys@4.1.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'espree@10.2.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'eslint@9.12.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }

up to date, audited 744 packages in 1s

122 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
Successfully created /Users/name_1/Desktop/_workspace_JISOU/workspace_React-Jest-react-testing-library/React-Jest-react-testing-library/react-jest-sample/eslint.config.js file.
nameMacBook-Pro react-jest-sample % 
```
- 「.eslintrc.cjsを修正する(VSCodeで利用していない変数がエラーになるを防ぐ)」手順については、`.eslintrc.cjs`が含まれていないので、一旦飛ばす。

# テストを書く(trueがtrueであることを確かめるテスト)
```
nameMacBook-Pro react-jest-sample % mkdir src/tests/                
nameMacBook-Pro react-jest-sample % touch ./src/tests/sample.spec.js
```

# npm run testでテストが実行できるようにする
```
nameMacBook-Pro React-Jest-react-testing-library % npm install --save-dev jest-environment-jsdom @babel/core @babel/preset-env
nameMacBook-Pro React-Jest-react-testing-library % cd react-jest-sample 
nameMacBook-Pro react-jest-sample % npm install --save-dev jest-environment-jsdom @babel/core @babel/preset-env
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@eslint/config-array@0.18.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@eslint/core@0.6.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@eslint/eslintrc@3.1.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@eslint/js@9.12.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@eslint/object-schema@2.1.4',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@eslint/plugin-kit@0.2.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@humanfs/core@0.19.0',
npm WARN EBADENGINE   required: { node: '>=18.18.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@humanfs/node@0.16.5',
npm WARN EBADENGINE   required: { node: '>=18.18.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@humanwhocodes/retry@0.3.1',
npm WARN EBADENGINE   required: { node: '>=18.18' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'eslint@9.12.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'eslint-scope@8.1.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'eslint-visitor-keys@4.1.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'espree@10.2.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v18.17.0', npm: '9.6.7' }
npm WARN EBADENGINE }
npm WARN deprecated abab@2.0.6: Use your platform's native atob() and btoa() methods instead
npm WARN deprecated domexception@4.0.0: Use your platform's native DOMException instead

added 48 packages, and audited 792 packages in 2s

124 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
nameMacBook-Pro react-jest-sample % 
```

# 
```

```


# npm 常用命令与操作篇

npm 的全称是(Node Package Manager)，是随同 NodeJS 一起安装的包管理和分发工具，它很方便让 JavaScript 开发者下载、安装、上传以及管理已经安装的包。

**先说明下 下面会用到的几个变量：**

- `<name>|<pkg>` 模块名
- `<version>` 版本号
- `<version range>` 版本范围
- `<@scope>` 作用域。所有 npm 软件包都有一个名称。某些软件包名称也有作用域。

### 一、安装配置 Node 和前言

```bash
# 查看 npm 的版本
npm -v  //6.4.0 << 安装成功会返回版本号

# 查看各个命令的简单用法
npm -l

# 查看 npm 命令列表
npm help

# 查看 npm 的配置
npm config list -l
```

### 二、npm init 创建模块

```bash
npm init
```

`npm init`用来初始化生成一个新的`package.json`文件。它会向用户提问一系列问题，如果觉得不用修改默认配置，一路回车就可以了。

尾缀带`-f`（代表 force）、`-y`（代表 yes），则跳过提问阶段，直接生成一个新的`package.json`文件，不带尾缀的话，默认有提问阶段。

以上创建好之后就可以在`Package.json`直接看了 还可以在里面修改更新。

### 三、npm set 设置环境变量

```bash
npm set init-author-name 'my name jerry'
set init-author-email '12345@qq.com'
set init-author-url 'http://yourdomain.com'
npm set init-license 'MIT'
执行了以上的修改，此时 Package.json并没有发生变化

//设置后执行init才是真正修改成功
npm init
```

### 四、npm list 查看模块

```bash
#当前项目安装的所有模块
npm list

#列出全局安装的模块 带上[--depth 0] 不深入到包的支点 更简洁
npm list -g --depth 0
```

### 五、npm install 安装模块

**基本用法**

```bash
# 读取package.json里面的配置单安装
npm install
//可简写成 npm i

# 默认安装指定模块的最新(@latest)版本
npm install [<@scope>/]<name>
//eg: npm install gulp

# 安装指定模块的指定版本
npm install [<@scope>/]<name>@<version>
//eg: npm install gulp@3.9.1

# 安装指定指定版本范围内的模块
npm install [<@scope>/]<name>@<version range>
//eg: npm install vue@">=1.0.28 < 2.0.0"

# 安装指定模块的指定标签 默认值为(@latest)
npm install [<@scope>/]<name>@<tag>
//eg: npm install sax@0.1.1

# 通过Github代码库地址安装
npm install <tarball url>
//eg: npm install git://github.com/package/path.git
```

**配置选项说明:**

```bash
#全局安装 -g | -global
//eg: npm i -g gulp 或者 npm i gulp -g
#这是默认设置，除非-D或-O存在 #安装并将被添加到package.json的dependencies区。

#（生产阶段的依赖）#安装并将被添加到package.json的dependencies区
-P | --save-prod

#（开发阶段的依赖）#安装并将被添加到package.json的devDependencies区。
-S | --save
//eg: npm i gulp --save 或 npm i gulp -S

#（可选阶段的依赖）#安装并将被添加到package.json的optionalDependencies区
-D | --save-dev
//npm i gulp --save-dev 或 npm i gulp -D

#安装模块的确切版，而不是使用npm的默认semver range运算符
-O | --save-optional

#安装并将被添加到
-E | --save-exact
//npm i gulp --save-exact 或 npm i gulp -E `bundleDependencies`列表中

#模块不管是否安装过，npm 都要强制重新安装
-B | --save-bundle
-f|--force //eg: npm install sax --force
//补充：所有模块都要强制重新安装，那就删除`node_modules`，重新执行`npm install` rm -rf node_modules
//或者手动去删除node_modules目录 npm install
#防止保存到`dependencies` --no-save #报告安装状况而不是真的安装 --dry-run
```

### 六、npm uninstall 卸载模块

```bash
#卸载当前项目或全局模块
$ npm uninstall <name> [-g]

eg: npm uninstall gulp --save-dev
    npm i gulp -g

卸载后，你可以到 /node\_modules/ 目录下查看包是否还存在，或者使用以下命令查看：
npm ls 查看安装的模块
```

### 七、npm update 更新模块

```bash
#升级当前项目或全局的指定模块
$ npm update <name> [-g]
//eg: npm update express
      npm update express -g

```

### 七、npm link 引用模块

```bash
# 引用依赖 有些包是全局安装了，在项目里面只需要引用即可。
$ npm link [<@scope>/]<pkg>[@<version>]
//eg: 引用   npm link gulp gulp-ssh gulp-ftp
//eg: 解除引用 npm unlink gulp

# 引用模块 本人用得少没深入说了 用得上时可去翻文档例子
$ npm link (in package dir)
```

### 八、npm run 执行脚本

`package.json`的`scripts`字段，可以用于指定脚本命令，供`npm`直接调用。`npm run`会创建一个 Shell，执行指定的命令。

### 九、npm publish 发布模块

```bash
# 未注册 申请注册一个用户 直接在https://www.npmjs.com/注册一样
$ npm adduser
//执行后 填写几个问题 Username、Password、Email

#已注册
$ npm login

#发布
$ npm publish
```

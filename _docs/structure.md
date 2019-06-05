---
title: 工程结构
subTitle: Structure
order: 11
---

### 工程结构

&emsp;&emsp;创建后会生成如下结构的RDA结构:

&emsp;&emsp;![](https://haitao.nos.netease.com/16c75437-4efd-4524-9894-59678bdb2e98_277_377.jpg)

```table
文件/目录 [@th width:80px]
说明
|- \_\_tests__
| 单测目录， 暂时不支持
|- components
| 组件目录
|- decorators
| es6装饰器
|- directives
| vue指令
|- dist
| 运行rde build后会在app目录下生成dist目录
|- filters
| vue 过滤器
|- mixins
| vue mixins
|- styles
| 样式目录
|- typings
| ts typing定义目录，其中vue文件的定义RDC已经完成，只需要关心应用使用的定义文件
|- utils
| util方法
|- dev.tsx
| 单独开发调试某个组件时，可以配合rde serve使用
|- index.ts
| 整个套件的入口文件
|- package.json
| 自定义依赖的包
|- request.ts
| 请提供封装通用的request API
```

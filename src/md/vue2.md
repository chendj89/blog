## route

- 路由参数监听

```js
watch:{
  // 路由发生变化时
  $route:{
    handler:funciton(route){
    },
    // 是否立即执行
    immediate:true,
    // 是否监听深层
    deep:true
  }
}

```

## hook

```js
this.$on('hook:beforeDestory',()=>{})
```

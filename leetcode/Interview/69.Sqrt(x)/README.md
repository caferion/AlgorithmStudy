# 69.Sqrt(x)

![](./Sqrt.png)

```js
let r = x;
while (r * r > x) r = ((r + x / r) / 2) | 0;
return r;
```

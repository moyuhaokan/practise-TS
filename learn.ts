/** @format */

// 这个文件是用来练习https://juejin.cn/post/6872111128135073806#heading-87 这个文章的

function identity<T, U>(value: T, message: U): T {
  console.log(message)
  return value
}

console.log(identity(68, 'Semlinker'))

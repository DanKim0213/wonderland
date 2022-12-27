# TypeScript 환경에서 문서화하기

## INDEX

[1. 문서화가 중요한가?](##1.-문서화가-중요한가?)
[2. 시작하기 전에](##2.-시작하기-전에:-JSDoc과-TSDoc의-차이는?)
[3. TSDoc 사용법은?](##3.TSDoc사용법은?)
[4. 문서화 하는법은?](##4.문서화를Markdown아니면Html로할것인가?)
[References](##references)

## 1. 문서화가 중요한가?

가장 근본적인 이유는 코드를 읽고 이해할 시간이 부족하기 때문이다. (정말 부족하다....) 때로는 코드를 읽다가 오해하여 오용할수도 있다. 따라서, 문서화를 통해 시간을 절약하고 더 나은 커뮤니케이션 용도로 활용하자.

## 2. 시작하기 전에: JSDoc과 TSDoc의 차이는?

- @param 태그에 type을 생략할 수 있다
- @return 태그에 type을 생략할 수 있다
- @example 태그에 코드가 아닌 간략한 설명 및 코드블럭을 넣을 수 있다.

```javascript
/** A class for rectangle. */
class Rectangle {
  /**
   * Create a Rectangle instance.
   *
   * @param { (number | string) } width - The width of the rectangle.
   * @param { (number | string) } [length=20] - The length of the rectangle.
   */
  constructor(width, length = 20) {
    /**
     * The width of the rectangle.
     * @type { (number | string) }
     */
    this.width = width;
    /**
     * The length of the rectangle.
     * @type { (number | string) }
     */
    this.length = length;
  }

  /**
   * Calculate the area of a rectangle.
   *
   * @returns {number} The area of a rectangle.
   *
   * @throws {TypeError} When the width or length cannot be cast to a number.
   *
   * @example
   * // Correct usage.
   * calcArea(10, 20);
   */
  calcArea() {
    let width = Number(this.width);
    let length = Number(this.length);

    if (isNaN(width) || isNaN(length)) {
      throw new TypeError("Not a number.");
    }

    return width * length;
  }
}
```

````ts
/** A class for rectangle. */
class Rectangle {
  /** The width property of a rectangle. */
  width: number | string;
  /** The length property of a rectangle. */
  length: number | string;

  /**
   * Create a Rectangle instance.
   *
   * @param width - The width of the rectangle.
   * @param length - The length of the rectangle.
   */
  constructor(width: number | string, length: number | string = 20) {
    this.width = width;
    this.length = length;
  }

  /**
   * Calculate the area of a rectangle.
   *
   * @returns The area of a rectangle.
   *
   * @throws TypeError
   * When the width or length cannot be cast to a number.
   *
   * @example Correct usage.
   * ```js
   * // Returns 200
   * calcArea(10, 20);
   * ```
   */
  calcArea(): number {
    let width = Number(this.width);
    let length = Number(this.length);

    if (isNaN(width) || isNaN(length)) {
      throw new TypeError("Not a number.");
    }

    return width * length;
  }
}
````

얼핏 보기엔 JSDoc과 사용법이 아주 비슷하다. 그렇다면, TSDoc은 필요없지 않을까? TSDoc 공식사이트에서는 분석 툴들 (TypeDoc, EsLint, VS code 등등)이 JSDoc 기반으로 한 문법을 인지하기때문에 상호호환이 안될 수 있다고 지적하고 있다. [here](https://tsdoc.org)

## 3. TSDoc 사용법은?

[공식 문서를 참조하도록](https://tsdoc.org)

## 4. 문서화를 Markdown 아니면 Html로 할 것인가?

깃허브는 공식적으로 Markdown을 지원하므로 Markdown 형태로 문서화 하자.

**Option 1.** [TypeDoc](https://typedoc.org)으로 html 파일을 만들 수 있다

**Option 2.** TypeDoc + [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) 으로 markdown 파일을 만들 수 있다

```
npm i -D typedoc typedoc-plugin-markdown
```

```
typedoc --plugin typedoc-plugin-markdown --out docs src/index.ts
```

## References

- [TSDoc](https://tsdoc.org)
- [Compare JavaScript JSDoc with TypeScript TSDoc for Documentation](https://javascript.plainenglish.io/compare-javascript-jsdoc-with-typescript-tsdoc-for-documentation-a6984de1f2c5)
- [Intro to TypeScript Documentation with TSDoc](https://coryrylan.com/blog/intro-to-typescript-documentation-with-tsdoc)
- [How to Generate a TypeScript API Reference: Building an NPM Package with TypeScript](https://levelup.gitconnected.com/how-to-generate-a-typescript-api-reference-building-an-npm-package-with-typescript-9b2dc44a3aaa)

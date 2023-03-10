/**
 * @name isBrowser
 * @description Check if the code is running in the browser. Useful to avoid
 * SSR errors.
 */
export function isBrowser() {
  console.log(typeof window !== 'undefined')
  // console.log(window)
  return typeof window !== 'undefined'
}

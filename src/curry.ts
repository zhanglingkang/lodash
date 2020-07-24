function createCurry<F extends (...args: any[]) => any>(
  fn: F,
  args: any[],
  argsLength: number
) {
  return function (...otherArgs: any[]) {
    let newArgs = args.concat(otherArgs);
    if (newArgs.length >= argsLength) {
      return fn.apply(this, newArgs);
    } else {
      return createCurry(fn, newArgs, argsLength);
    }
  };
}

export default function curry<F extends (...args: any[]) => any>(
  fn: F,
  length?: number
): (...args: any[]) => any {
  let argsLength = length || fn.length;
  return createCurry(fn, [], argsLength);
}

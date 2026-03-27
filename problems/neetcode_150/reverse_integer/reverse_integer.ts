const reverse = (x: number): number => {
  const arr = String(x).split("-");
  let number = 0;
  number =
    arr.length == 2
      ? 0 - Number(arr[1]!.split("").reverse().join(""))
      : Number(arr[0]!.split("").reverse().join(""));

  if (number > 2 ** 31 || number < 0 - 2 ** 31) return 0;

  return number;
};

console.log(reverse(1534236469));

//9646324351
//2147483648

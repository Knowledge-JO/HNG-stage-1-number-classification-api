class NumberCheck {
  static digiSum(num: number): number {
    return Math.abs(num)
      .toString()
      .split("")
      .reduce((acc, curr) => acc + Number(curr), 0);
  }

  static checkEven(num: number): boolean {
    return num % 2 == 0;
  }

  static checkOdd(num: number): boolean {
    return num % 2 != 0;
  }

  static checkArmstrong(num: number): boolean {
    const nums = Math.abs(num).toString().split("").map(Number);

    const cubicSum = nums.reduce((acc, curr) => acc + curr ** 3, 0);

    return Math.abs(num) == cubicSum;
  }

  static checkPrime(num: number) {
    if (num < 2) {
      return false;
    }

    for (let i = 2; i <= Math.ceil(num / 2); i++) {
      if (num % i == 0) {
        return false;
      }
    }

    return true;
  }

  static checkPerfect(num: number) {
    if (num < 1) {
      return false;
    }

    let sum = 0;
    for (let i = 1; i < num; i++) {
      if (num % i == 0) {
        sum += i;
      }
    }

    return sum == num;
  }

  static getProperties(num: number): string[] {
    const properties = [];
    if (NumberCheck.checkArmstrong(num)) {
      properties.push("armstrong");
    }

    if (NumberCheck.checkEven(num)) {
      properties.push("even");
    }

    if (NumberCheck.checkOdd(num)) {
      properties.push("odd");
    }

    return properties;
  }
}

export default NumberCheck;

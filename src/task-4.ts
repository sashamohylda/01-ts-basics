function printUserInfo(name: string, age: number, email?: string): void {
  console.log(name, age, email);
}

printUserInfo('Alex', 25);
printUserInfo('Anna', 30, 'anna@example.com');

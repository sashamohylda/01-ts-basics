function printUserInfo(name: string, age: number, email?: string): void {
  console.log('Name:', name);
  console.log('Age:', age);

  if (email) {
    console.log('Email:', email);
  }
}

printUserInfo('Alex', 25);
printUserInfo('Anna', 30, 'anna@example.com');

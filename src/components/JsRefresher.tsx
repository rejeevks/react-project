
const JsRefresher = () => {
  // SPREAD OPERATOR
  const numbers = [1, 2, 3, 4];
  const newNumbers = [...numbers, 5, 6, 7, 8];
  console.log(newNumbers);

  // SPREAD OPERATOR (in object)
  const person = {
    name: "test1",
  };

  const details = {
    id: 1,
    ...person,
    age: 24,
  };
  console.log(details);

  // REST OPERATOR

  const filter1 = (...args: any) => {
    return args.filter((item: any) => item === 4);
  };
  console.log(filter1(1, 2, 3, 4));

  // DESTRUCTURING

  const testNumbers = [100, 200, 300];
  const [num1, num2] = testNumbers;
  const [n1, , n3] = testNumbers;
  console.log(num1, num2, "Array Destructuring");
  console.log(n1, n3, "Array Destructuring Test");

  const data = { id: 1, name: "testName", age: 24 };
  const { name } = data;
  console.log(name, "Object Destructuring");

  // ARRAY FUNCTION

  const arrNumbers = [1, 2, 3, 4];
  const doubleNumArray = numbers.map((num) => {
    return num * 2;
  });

  console.log(arrNumbers);
  console.log(doubleNumArray);

  return <div></div>;
};

export default JsRefresher;

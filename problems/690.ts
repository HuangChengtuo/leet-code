class Employee {
  id: number
  importance: number
  subordinates: number[]
  constructor(id: number, importance: number, subordinates: number[]) {
    this.id = (id === undefined) ? 0 : id;
    this.importance = (importance === undefined) ? 0 : importance;
    this.subordinates = (subordinates === undefined) ? [] : subordinates;
  }
}

function getImportance(employees: Employee[], id: number): number {
  let sum = 0

  const map: Map<number, Employee> = new Map()
  for (const item of employees) {
    map.set(item.id, item)
  }
  const fn = (id: number) => {
    const employee = map.get(id)
    sum += employee.importance
    for (const item of employee.subordinates) {
      fn(item)
    }
  }
  fn(id)
  return sum
};

export default function () {
  const a = new Employee(1, 5, [2, 3])
  console.log(getImportance([
    new Employee(1, 5, [2, 3]),
    new Employee(2, 3, []),
    new Employee(3, 3, [])
  ], 1))
}
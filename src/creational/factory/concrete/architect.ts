import { Employee } from '../abstract/employee-abstract'

export class Architect extends Employee {
  constructor (
    name: string, age: string, salary: number
  ) {
    super(name, age, 'Architect', salary)
  }

  getInfo () {
    return `My name is ${this.name}, I'm a ${this.age}-year-old ${this.role}. My currently monthly wage is ${Number(this.salary)}`
  }
}
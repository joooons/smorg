export class TreePoint {
  id: number;
  name: string;
  spouse?: string;
  children?: TreePoint[] | null = null;

  constructor(
    id: number,
    name: string,
    spouse?: string,
    children?: TreePoint[] | null
  ) {
    this.id = id;
    this.name = name;
    this.spouse = spouse;
    this.children = children && null;
  }

  genericMethod(): void {
    const spouse = this.spouse ? this.spouse : 'nobody';
    console.log(`This is node #${this.id} and has ${this.name} and ${spouse}`);
  }
}

export default class Animal {
  private title: string;
  constructor(title: string) {
    this.title = title;
  }
  getName() {
    return this.title;
  }
}

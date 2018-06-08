class StringValidator {
  public title: string;
  constructor(title: string) {
    this.title = title;
  }
  validate(): boolean {
    return this.title.length > 0;
  }
}

export { StringValidator };

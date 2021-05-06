export class Issue {
  public id: number;
  public name: string;
  public url: string;
  public size: number;
  public description: string;
  public _isActive?: boolean;
  constructor() {
    this.id = 0;
    this.name = '';
    this.url = '';
    this.size = 0;
    this.description = '';
  }
}

export class MovieModel {

  private name: string;
  private url: string;

  constructor(name: string = '', url: string = '') {
    this.name = name;
    this.url = url;
  }
}

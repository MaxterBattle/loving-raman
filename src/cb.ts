export class Cb {
  public url: URL;
  private homepage: string;
  private body: string;

  public constructor(url: string) {
    this.url = new URL(url);
    this.fetchHomepage();
  }

  private async fetchHomepage(): Promise<void> {
    const response = await fetch({
      url: this.url
    });
    this.body = await response.body;
  }
}

export class Curie {
  static readonly asciiRegex = /[\0-\0xff]*/;
  static readonly curieA = /([_:A-Za-z][-._:A-Za-z0-9]*):(\S+)/;

  static isAscii(str: string): RegExpMatchArray {
    return str.match(Curie.asciiRegex);
  }

  static isCurie(str: string) {
    return Curie.curieA.test(str);
  }
}

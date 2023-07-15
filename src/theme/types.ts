export type FontSizeNumber = number;
export type FontWeightNumber = number;
export type FontStyleString = "normal";

export interface TextStyle {
  fontSize: FontSizeNumber;
  fontWeight: FontWeightNumber;
  fontStyle: FontStyleString;
}

export interface SubVariant<T extends TextStyle | FontSizeNumber | FontStyleString | FontWeightNumber> {
  main: T;
  mini: T;
}

export interface Variant<T extends TextStyle | FontSizeNumber | FontStyleString | FontWeightNumber> {
  small: SubVariant<T>;
  medium: SubVariant<T>;
  large: SubVariant<T>;
}

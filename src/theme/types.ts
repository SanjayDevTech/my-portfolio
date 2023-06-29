export interface TypographyGroup {
  fontSize: number;
  fontStyle: string;
  fontWeight: number;
}

export interface FontVariant<T> {
    desktop: T;
    mobile: T;
}

export interface TypographyVariant {
  desktop: TypographyGroup;
  mobile: TypographyGroup;
}

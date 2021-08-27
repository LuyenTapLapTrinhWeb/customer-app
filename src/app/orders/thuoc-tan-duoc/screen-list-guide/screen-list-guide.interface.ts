
export interface ScreenListGuideButton {
  codeObjectName?: string;
  codeObjectEvent?: string;
  codeObjectEventName?: string;
  codeExample?: string;
  codeExample1?: string;
  codeExampleFile?: string;
  codeExampleFile2?: string;
  codeFileName?: string;
  codeTagName?: string;
}
export interface ScreenListGuideSelection extends ScreenListGuideButton {
  codeObjectName: string;
  codeTagName: string;
  codeExample: string;
}
export interface ScreenListGuideToggle extends ScreenListGuideButton {
  codeObjectName: string;
  codeTagName: string;
  codeExample: string;
}
export interface ScreenListGuideInputSearch extends ScreenListGuideButton {
  codeObjectName: string;
  codeTagName: string;
  codeExample: string;
}
export interface ScreenListGuide {
  button?: ScreenListGuideButton;
  selection?: ScreenListGuideSelection;
  toggle?: ScreenListGuideToggle;
  inputSearch?: ScreenListGuideInputSearch;
}

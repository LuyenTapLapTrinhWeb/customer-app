
export interface ScreenListGuideButton {
  codeObjectName?: string;
  codeObjectNameEventEmitter?: string;
  codeExample?: string;
  codeExample1?: string;
  codeExampleFile?: string;
  codeExampleFile2?: string;
  codeFileName?: string;
  codeTagName?: string;
}

export const SCREENLISTGUIDEBUTTON: ScreenListGuideButton = {
  codeObjectName: 'screenListButton',
  codeObjectNameEventEmitter: '(buttonEventEmitter)="onClickEventEmitter($event)"',
  codeExample: `<app-screen-list-button [screenListButton]='screenListButton' (buttonEventEmitter)="onClickEventEmitter($event)"></app-screen-list-button>`,
  codeExampleFile: `ngOnInit(): void {
        this.screenListButton = {
          mouseClickMode: MOUSECLICKMODE.ADDING,
          mouseClickEvent: MOUSECLICKEVENT.EVENT,
          svgIcon: 'ADD_ICON',
          active: true
        };
      }`,
  codeExampleFile2: `ngOnInit(): void { this.screenListButton = ADDING | RELOADING | QUESTIONING, }`,
  codeFileName: 'screen-bar.component.ts',
  codeTagName: 'app-screen-list-button',
};

// tslint:disable-next-line:no-empty-interface
export interface ScreenListGuideSelection extends ScreenListGuideButton {
  codeObjectName: string;
  codeTagName: string;
  codeExample: string;
}
export const SCREENLISTGUIDESELECTION: ScreenListGuideSelection = {
  codeObjectName: 'selectionOptionList',
  codeTagName: 'app-screen-list-selection',
  codeExample: '<app-screen-list-selection [selectionOptionList]="selectionOptionList"></app-screen-list-selection>',

};
export interface ScreenListGuideToggle extends ScreenListGuideButton {
  codeObjectName: string;
  codeTagName: string;
  codeExample: string;
}
export const SCREENLISTGUIDETOGGLE: ScreenListGuideToggle = {
  codeObjectName: 'toggleName',
  codeTagName: 'app-screen-list-toggle',
  codeExample: `<app-screen-list-toggle [toggleName]="toggleName" (toggleEventEmitter)="toggle($event)">
  </app-screen-list-toggle>`,
  codeExample1: `<app-screen-list-toggle [toggleName]="'Tỉnh-Phường-Xã'" (toggleEventEmitter)="toggle($event)">
  </app-screen-list-toggle>`,
};

export interface ScreenListGuide {
  button?: ScreenListGuideButton;
  selection?: ScreenListGuideSelection;
  toggle?: ScreenListGuideToggle;
}

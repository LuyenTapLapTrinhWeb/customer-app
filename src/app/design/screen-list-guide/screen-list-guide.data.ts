import { ScreenListGuideButton, ScreenListGuideInputSearch, ScreenListGuideSelection, ScreenListGuideToggle } from "./screen-list-guide.interface";


export const SCREENLISTGUIDEBUTTON: ScreenListGuideButton = {
  codeObjectName: 'screenListButton',
  codeObjectEvent: '(buttonEventEmitter)="onClickEventEmitter($event)"',
  codeObjectEventName: 'buttonEventEmitter',
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

export const SCREENLISTGUIDESELECTION: ScreenListGuideSelection = {
  codeObjectName: 'selectionOptionList',
  codeObjectEventName: 'selectionOptionByEventEmitter',
  codeObjectEvent: '(selectionOptionByEventEmitter)="selectionOptionBy($event)"',
  codeTagName: 'app-screen-list-selection',
  codeExample: `<app-screen-list-selection [selectionOptionList]="selectionOptionList" (selectionOptionByEventEmitter)="selectionOptionBy($event)">`,
  codeExampleFile: `ngOnInit(): void {
    this.selectionOptionList = {
      title: 'Tìm theo từ khóa',
      list: [
        { value: '1', viewValue: 'Mã HSSK' },
        { value: '2', viewValue: 'CMND' },
        { value: '3', viewValue: 'Tên' }
      ]
    }
  }`,
  codeExampleFile2: `ngOnInit(): void { 
    this.selectionOptionList = SELECTIONOPTIONLIST;
   }`,
  codeFileName: 'ho-so-suc-khoe.component.ts',
};
export const SCREENLISTGUIDETOGGLE: ScreenListGuideToggle = {
  codeObjectName: 'toggleName',
  codeTagName: 'app-screen-list-toggle',
  codeExample: `<app-screen-list-toggle [toggleName]="toggleName" (toggleEventEmitter)="toggle($event)">
  </app-screen-list-toggle>`,
  codeExample1: `<app-screen-list-toggle [toggleName]="'Tỉnh-Phường-Xã'" (toggleEventEmitter)="toggle($event)">
  </app-screen-list-toggle>`,
};
export const SCREENLISTGUIDEINPUTSEARCH: ScreenListGuideInputSearch = {
  codeObjectName: 'screenListInputSearch',
  codeTagName: 'app-screen-list-input-search',
  codeExample: `<app-screen-list-input-search [screenListInputSearch]="screenListInputSearch" (screenListInputSearchEventEmitter)="ScreenListInputSearch($event)">
  </app-screen-list-input-search>`,
  codeExample1: `<app-screen-list-input-search [screenListInputSearch]="screenListInputSearch"
  (screenListInputSearchEventEmitter)="onSearBoxKeydown($event)"></app-screen-list-input-search>`,
};

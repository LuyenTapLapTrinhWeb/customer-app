import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { OffsetService } from 'src/app/services/stickyElement/offset.service';
import { StickyElement } from 'src/app/services/stickyElement/stickyElement.service';
import { SvgIconLiteralService } from 'src/app/services/SvgIconLiteralts/svgIconLiteral.service';
import { PeriodicElement } from 'src/app/testapi/aq/lichthisv/lichthisv.component';
import { TREE_DATA } from './nav.list-tree.component';
import { MOUSECLICKMODE, SCREEN_LIST_BUTTON } from './screen-list-button/screen-list-button.data';
import { ScreenListBar } from './screen-list-bar/screen-list-bar.interface';


@Component({
  selector: 'app-thuoc-tan-duoc',
  templateUrl: './thuoc-tan-duoc.component.html',
  styleUrls: ['./thuoc-tan-duoc.component.scss', '../../services/stickyElement/sticky.scss', './thuoc-tan-duoc-recursive.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThuocTanDuocComponent implements AfterViewInit, OnInit {
  nav: StickyElement;
  isScrolled$: Subject<string> = new Subject<string>();
  list = TREE_DATA;
  screenListBar!: ScreenListBar;
  isExpanded = false;

  themBanGhi(event: Event): void {
    console.log('root parent them');
  }
  suaBanGhi(periodicElement: PeriodicElement): void {
    console.log('root parent sua', periodicElement);
  }
  xoaBanGhi(periodicElement: PeriodicElement): void {
    console.log('root parent xoa', periodicElement);
  }
  constructor(
    private svgicon: SvgIconLiteralService,
    private offsetService: OffsetService,
    private cd: ChangeDetectorRef,
    private render: Renderer2
  ) {
    // this.svgicon.addMatIconSvgCustomObservable('ADD_ICON');
    this.svgicon.addMultiMatIconSvgCustomObservable(
      ['ADD_ICON', 'REFRESH_ICON', 'QUESTION_MARK', 'delete-recycle-bin', 'edit-pencil',
        'ho-so', 'danh-muc', 'he-thong', 'tro-giup', 'quan-tri',
        'ho-so-enter', 'danh-muc-enter', 'he-thong-enter', 'tro-giup-enter', 'quan-tri-enter',
        'arrow-folder-right', 'logo-cuc'
      ]);
  }
  ngOnInit(): void {
    this.screenListBar = {
      title: 'Danh mục thuốc tân dược',
      buttons: SCREEN_LIST_BUTTON
    };
  }
  ngAfterViewInit(): void {

  }
  getOffset(offset: number): void {
    // console.log(offset);
    // this.nav.onElementStickiesOffset(offset);
  }
  dropdownMenuLeave(mouseClickId: string, svgIcon: string): void {
    // mouse leave
    const menu = document.getElementById(mouseClickId) as HTMLElement;
    const enterLeftIcon = menu.querySelector('.wrapper-nav-menu-list-item-enter-icon') as HTMLElement;
    const menuLinkCenter = menu.querySelector('.wrapper-nav-menu-list-item-enter-link') as HTMLElement;
    const arrowFolderRightIcon = menu.querySelector('.arrow-folder-right') as HTMLElement;
    this.isExpanded = false;

    this.render.removeClass(enterLeftIcon, 'icon-enter');
    this.render.removeClass(menuLinkCenter, 'link-enter');
    this.render.removeClass(arrowFolderRightIcon, 'arrow-folder-down');
  }
  dropdownMenuEnter(mouseClickId: string, svgIconEnter: string): void {
    // Mouse enter
    const menu = document.getElementById(mouseClickId) as HTMLElement;
    const enterLeftIcon = menu.querySelector('.wrapper-nav-menu-list-item-enter-icon') as HTMLElement;
    const menuLinkCenter = menu.querySelector('.wrapper-nav-menu-list-item-enter-link') as HTMLElement;
    const arrowFolderRightIcon = menu.querySelector('.arrow-folder-right') as HTMLElement;
    this.isExpanded = true;
    this.render.addClass(enterLeftIcon, 'icon-enter');
    this.render.addClass(menuLinkCenter, 'link-enter');
    this.render.addClass(arrowFolderRightIcon, 'arrow-folder-down');
  }
  convertTabString(mouseClickId: string, mouseClickName: string): void {
    if (!mouseClickId) {
      return;
    }
    if (mouseClickId.includes('addTab2')) {
      this.addTab2(mouseClickName);
    } else {
      switch (mouseClickId) {
        case 'doiMatKhau':
          this.doiMatKhau();
          break;
        case 'logout':
          this.logout();
          break;
        case 'onHoSoThamKhamBenhClick':
          this.onHoSoThamKhamBenhClick();
          break;

        default:
          console.error('not found function click');
          break;
      }
    }
  }
  addTab2(mouseClickName: string): void {
    throw new Error('Method not implemented.');
  }
  doiMatKhau(): void {
    throw new Error('Method not implemented.');
  }
  logout(): void {
    throw new Error('Method not implemented.');
  }
  onHoSoThamKhamBenhClick(): void {
    throw new Error('Method not implemented.');
  }
  getDataLoadingFirstTime(event: Event): void {
    throw new Error('Method not implemented.');
  }
}

import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { tap } from 'rxjs/operators';
import { transitionPage } from 'src/app/animations/reuse/transitionPage.animation';
import { transitionY } from 'src/app/animations/reuse/transitionTable.animation';
import { Hero } from './hero';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  animations: [transitionY(), transitionPage()]
})
export class HeroesComponent implements OnInit, AfterViewInit {
  heroes: Hero[];
  displayedColumns: string[] = ['position', 'name', 'select'];
  selection: any;
  dataSource: any;


  @ViewChild(MatSort) sort: MatSort;


  constructor(private heroesService: HeroesService) {
    const initialSelection = [];
    const allowMultiSelect = true;
    this.selection = new SelectionModel<Hero>(allowMultiSelect, initialSelection);
  }

  ngAfterViewInit(): void {
    if (this.heroes) {
    }
  }
  ngOnInit(): void {
    this.heroesService.getHeroes().pipe(
      tap(data => console.log(data)),
      // map(heroes => { this.heroes = heroes; this.dataSource = heroes; })
    ).subscribe(heroes => {
      this.heroes = heroes;
      this.dataSource = new MatTableDataSource(this.heroes);
      this.dataSource.sort = this.sort;
    });
  }
  addHero(newHero: Hero): void {
    this.heroesService
      .addHero(newHero)
      .subscribe(hero => { this.heroes.push(hero as Hero); });
  }
  /** Whether the number of selected elements matches the total number of rows. */
  // tslint:disable-next-line:typedef
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  // tslint:disable-next-line:typedef
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach((row: any) => this.selection.select(row));
  }
}

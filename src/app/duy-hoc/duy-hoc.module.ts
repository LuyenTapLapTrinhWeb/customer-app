import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DuyHocComponent } from './duy-hoc/duy-hoc.component';
import { PageNotFoundComponent } from '../404/page-not-found.component';
import { MaterialModule } from '../shared/material/material.module';
import { SharingModule } from '../shared/sharing.module';
import { DuyHoc1Component } from './duy-hoc/duy-hoc1/duy-hoc1.component';
import { DuyHoc2Component } from './duy-hoc/duy-hoc2/duy-hoc2.component';
import { DuyHoc3Component } from './duy-hoc/duy-hoc3/duy-hoc3.component';
import { DuyHocEditComponent } from './duy-hoc/duy-hoc-edit/duy-hoc-edit.component';
import { DesignModule } from '../design/design.module';


@NgModule({
  declarations: [
    PageNotFoundComponent,
    DuyHocComponent,
    DuyHoc1Component,
    DuyHoc2Component,
    DuyHoc3Component,
    DuyHocEditComponent,
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '', component: DuyHocComponent, children: [
          { path: 'duyhoc1', component: DuyHoc1Component },
          { path: 'duyhoc1/edit/:id', component: DuyHocEditComponent },
          { path: 'duyhoc2', component: DuyHoc2Component },
          { path: 'duyhoc3', component: DuyHoc3Component },
        ]
      },
      { path: '**', component: PageNotFoundComponent }
    ]),
    MaterialModule,
    SharingModule,
    DesignModule,
  ],
})
export class DuyHocModule { }

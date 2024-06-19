import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ProductComponent } from './shared/component/product/product.component';
import { studentComponent } from './shared/component/student/student.component';
import { PostsCardsComponent } from './shared/component/posts-cards/posts-cards.component';
import { TucCardsComponent } from './shared/component/tuc-cards/tuc-cards.component';
import { productComponent } from './shared/component/products/products.component';
import { TabComponent } from './shared/component/tab/tab.component';
import { NgSwitchTabComponent } from './shared/component/ng-switch-tab/ng-switch-tab.component';
import { NgForTabComponent } from './shared/component/ng-for-tab/ng-for-tab.component';
import { StudentTableComponent } from './shared/component/student-table/student-table.component';
import { StdTableEventBindingElerefComponent } from './shared/component/std-table-event-binding-eleref/std-table-event-binding-eleref.component';
import { StdTableTwoWayDataBindingComponent } from './shared/component/std-table-two-way-data-binding/std-table-two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { PracticeComponent } from './shared/component/practice/practice.component';
import { StdTabMachineTestComponent } from './shared/component/std-tab-machine-test/std-tab-machine-test.component';
import { TemplateDrivenFormComponent } from './shared/component/template-driven-form/template-driven-form.component';
import { TdFormMachineTestComponent } from './shared/component/td-form-machine-test/td-form-machine-test.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    studentComponent,
    PostsCardsComponent,
    TucCardsComponent,
    TucCardsComponent,
    productComponent,
    TabComponent,
    NgSwitchTabComponent,
    NgForTabComponent,
    StudentTableComponent,
    StdTableEventBindingElerefComponent,
    StdTableTwoWayDataBindingComponent,
    PracticeComponent,
    StdTabMachineTestComponent,
    TemplateDrivenFormComponent,
    TdFormMachineTestComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StarsComponent } from './stars/stars.component';
import { StockComponent } from './stock/stock.component';
import { ProdetailsComponent } from './prodetails/prodetails.component';
import { HomeComponent } from './home/home.component';

const RouteConfig:Routes=[
  {path:'',component:HomeComponent},
  {path:'product/:prodTitle',component:ProdetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    SidebarComponent,
    StarsComponent,
    StockComponent,
    ProdetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RouteConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { WebSocketService } from './shared/web-socket.service';
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
import { ProductComponent } from './product/product.component';
import { ProdetailsComponent } from './prodetails/prodetails.component';
import { HomeComponent } from './home/home.component';
import { ProductService } from './shared/product.service';
import { FilterPipe } from './pipe/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

const RouteConfig:Routes=[
  {path:'',component:HomeComponent},
  {path:'product/:productId',component:ProdetailsComponent}
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
    ProductComponent,
    ProdetailsComponent,
    HomeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(RouteConfig),
    HttpModule
  ],
  providers: [ProductService,WebSocketService,{provide:LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }

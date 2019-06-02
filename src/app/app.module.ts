import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ProductsComponent } from "./products/products.component";
import { UpdateProductComponent } from "./update-product/update-product.component";
import { IndexDBOperationService } from "./service/idbdb-operation.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "product", component: ProductsComponent },
      { path: "updateProduct/:id", component: UpdateProductComponent }
    ])
  ],
  providers: [IndexDBOperationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

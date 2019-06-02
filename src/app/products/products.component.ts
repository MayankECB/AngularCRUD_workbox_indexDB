import { Component, OnInit } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { IndexDBOperationService } from "../service/idbdb-operation.service";
import { ProductModel } from "../model/ProductModel";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {

  productObj: object = {};
  productModel: ProductModel = new ProductModel();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private idbService: IndexDBOperationService
  ) { }

  addNewProduct = function (product) {
    this.productObj = {
      name: product.name,
      color: product.color
    };
    this.productModel.id = this.idbService.getMaxId + 1;
    this.productModel.name = product.name;
    this.productModel.color = product.color;

    this.idbService.addProductinIDB(this.productModel);

    this.http
      .post("http://localhost:5555/products/", this.productObj)
      .subscribe((res: Response) => {
        this.router.navigate(["/"]);
      });
    // .catch((err: HttpErrorResponse) => {
    //   // simple logging, but you can do a lot more, see below
    //   console.error(
    //     "----An error occurred while adding new product :",
    //     err.error
    //   );
    // })
  };

  ngOnInit() { }
}

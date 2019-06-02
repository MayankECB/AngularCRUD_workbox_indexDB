import { Component, OnInit } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import "rxjs/add/operator/toPromise";
import { IndexDBOperationService } from "../service/idbdb-operation.service";
import { ProductModel } from "../model/ProductModel";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient, private indexDBOps: IndexDBOperationService) { }
  products = [];
  product: ProductModel;
  id: number;
  private headers = new HttpHeaders({ "content-Type": "application/json" });

  fetchData = function () {
    this.http
      .get("http://localhost:5555/products")
      .subscribe((res: Response) => {
        this.indexDBOps.clearIndexedDb();
        this.indexDBOps.loadProductsinIDB(res);
      });
  };

  updateUI() {
    console.log(this.indexDBOps.getAllProducts().length)
    this.products = this.indexDBOps.getAllProducts();
  }

  deleteProduct = function (id) {
    if (confirm("Are you sure?")) {
      const url = `${"http://localhost:5555/products"}/${id}`;

      this.product = new ProductModel();
      this.product.id = id;
      this.indexDBOps.deleteFromIndexedDb(this.product);
      this.updateUI();

      return this.http
        .delete(url, { headers: this.headers })
        .toPromise()
        .then(() => {
          console.log('Deleted Successfully.....')
        })
        .catch((err: HttpErrorResponse) => {
          // simple logging, but you can do a lot more, see below
          console.error("----An error occurred while deleting:", err.error);
        });
    }
  };

  ngOnInit() {
    console.log('-----ngoninit------')
    this.fetchData();
    this.updateUI();
  }
}

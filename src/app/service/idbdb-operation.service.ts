import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { ProductModel } from '../model/ProductModel';

@Injectable({
  providedIn: 'root'
})

export class IndexDBOperationService {
  private products: ProductModel[] = [];
  private product: ProductModel;
  private db: any;
  private maxId: number = 0;

  constructor() {
    this.createDatabase();
  }

  private createDatabase() {
    this.db = new Dexie('Product-idb');
    this.db.version(1).stores({
      productId: 'id,name,color'
    });
  }

  getAllProducts() {
    return this.products;
  }

  getMaxId() {
    return this.maxId;
  }

  updateMaxID(id) {
    if (this.maxId > id) {
      return this.maxId;
    } else {
      return id;
    }
  }

  addProductinIDB(res: any) {
    this.product = new ProductModel();
    this.product.id = res["id"];
    this.updateMaxID(this.product.id);
    this.product.name = res["name"];
    this.product.color = res["color"];
    this.products.push(res);
    this.addToIndexedDb(this.product);
  }

  loadProductsinIDB(res: any) {
    this.products.length = 0;
    for (var index in res) {
      this.product = new ProductModel();
      this.product.id = res[index]["id"];
      this.updateMaxID(this.product.id);
      this.product.name = res[index]["name"];
      this.product.color = res[index]["color"];
      this.products.push(res[index]);
      this.addToIndexedDb(this.product);
    }
  }

  addToIndexedDb(product: ProductModel) {
    this.db.productId
      .put(product)
      .then(async () => {
        const allItems: ProductModel[] = await this.db.productId.toArray();
        console.log('saved in DB, DB is now', allItems);
      })
      .catch(e => {
        alert('Error: ' + (e.stack || e));
      });
  }

  async clearIndexedDb() {
    this.db.productId.clear();
  }

  async deleteFromIndexedDb(product: ProductModel) {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].id === product.id) {
        this.products.splice(i, 1);
      }
    }
    this.db.productId.delete(product.id).then(() => {
      console.log(`product ${product.id} deleted from indexDB.`);
    });
  }
}

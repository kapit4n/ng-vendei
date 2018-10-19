import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { Observable, Subject, of } from "rxjs";
import { map, filter, switchMap } from "rxjs/operators";

import "rxjs"; //get everything from Rx

@Injectable({
  providedIn: "root"
})
export class VCustomersService {
  /** Product list */
  products: any[];

  /** json URL */
  private jsonFileURL: string = "../../assets/vendei/customers.json";

  /** Product List service constructor */
  constructor(private http: HttpClient) {}

  /**
   * Returns the list of products
   */
  list(): any[] {
    return this.products;
  }

  /**
   * Return an observable with the yeam that matches the id
   */
  getCustomerById(id: any): Observable<any> {
    return this.http.get(this.jsonFileURL).pipe(
      map((response: Response) => {
        return <any>response.json()[id - 1];
      })
    );
  }

  /**
   * Return an observable with the list of products
   */
  getCustomers(): Observable<any> {
    return this.http.get(this.jsonFileURL).pipe(
      map((response: Response) => {
        return <any>response;
      })
    );
  }
}

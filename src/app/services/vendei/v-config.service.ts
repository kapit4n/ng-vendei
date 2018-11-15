import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class VConfigService {
  isTest: false;
  baseUrl = "http://localhost:3000/api";
  constructor() {}
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { User, SourceKey, DataObject } from '../models';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { SourceKeyService } from './SourceKey.service';
import { DataObjectService } from './DataObject.service';


@Injectable({
  providedIn: 'root'
})

export class ApiService implements OnInit {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient,
    private sourceKeyService: SourceKeyService,
    private dataObjectService: DataObjectService,
    private router: Router) {

    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));

    let token = JSON.parse(localStorage.getItem('token'));

    this.httpOptions.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'authorization': token
    });

    this.currentUser = this.currentUserSubject.asObservable();

    if (token) {
      this.getSourceKeys();
      this.getDataObjects();
    }

  }

  ngOnInit() {

  }

  public getHttpOptions() {
    return this.httpOptions;
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public login(email: string, password: string, keep: boolean) {
    return this.http.post<any>(`${environment.apiUrl}/api/signin`, { email, password })
      .pipe(map(

        result => {
          console.log("result", result);
          if (result && result.token) {
            if (keep) {
              localStorage.setItem('currentUser', JSON.stringify(result.user));
              localStorage.setItem('token', JSON.stringify(result.token));
            }

            this.httpOptions.headers = new HttpHeaders({
              'Content-Type': 'application/json',
              'authorization': result.token
            });

            this.currentUserSubject.next(result.user);
            this.getSourceKeys();
            this.getDataObjects();

          }
          return result;
        }));
  }

  public register(firstName: string, lastName: string, email: string, password: string) {

    let full_name: string = firstName + " " + lastName;

    return this.http.post<any>(`${environment.apiUrl}/api/signup`, { email, full_name, password })
      .pipe(map(result => {
        if (result) {
          this.currentUserSubject.next(result);
          if (result.success == false) {
            this.currentUserSubject.next(null);
          }
        }
        return result;
      }));
  }

  public logout() {

    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/session/signin']);
  }

  public getSourceKeys() {

    console.log('getSourceKeys', this.httpOptions);

    let result = this.http.get<SourceKey[]>(`${environment.apiUrl}/api/getSourceKeys`, this.httpOptions)
      .pipe(map(result => {
        return result;
      }));

    result.pipe().subscribe(
      data => {
        console.log("sourceKeys", data);
        this.sourceKeyService.setData(data);
      },
      error => {

        if (error.error == "Unauthorized") {
          this.logout();
        }
      });
  }


  public addSourceKey(sourceKey: SourceKey) {

    return this.http.post<any>(`${environment.apiUrl}/api/addSourceKey`, JSON.stringify(sourceKey), this.httpOptions)
      .pipe(map(result => {
        return result;
      }));
  }

  public getDataObjects() {
    console.log('getDataObjects', this.httpOptions);

    let result = this.http.get<DataObject[]>(`${environment.apiUrl}/api/getDataObjects`, this.httpOptions)
      .pipe(map(result => {
        return result;
      }));

    result.pipe().subscribe(
      data => {
        console.log("dataObjects", data);
        this.dataObjectService.setData(data);
      },
      error => {
        if (error.error == "Unauthorized") {
          this.logout();
        }
      });
  }

  public addDataObject(dataObject: DataObject) {

    let result = this.http.post<any>(`${environment.apiUrl}/api/addDataObject`, JSON.stringify(dataObject), this.httpOptions)
      .pipe(map(result => {
        return result;
      }));

      return result;
  }

}

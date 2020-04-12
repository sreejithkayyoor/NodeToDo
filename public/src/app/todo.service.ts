import {Injectable} from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';

// import 'rxjs/add/operator/toPromise';

import {Todo} from './todo'

@Injectable()
export class TodoService {
    private header = new HttpHeaders({'Content-Type': 'application/json','env':'dev'});
    private todosApiUrl = 'http://localhost:3000/api/todos/username/johnDoe';
    constructor(private http: HttpClient) { }

    getTodos(): Promise<Todo[]> {
        return this.http.get(this.todosApiUrl)
            .toPromise()
            .then(response => response  as Todo[]);
    }
}
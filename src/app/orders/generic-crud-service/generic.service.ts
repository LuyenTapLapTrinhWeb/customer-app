import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export abstract class GenericService<T extends { id?: string }> {
    private valuesStream: BehaviorSubject<T[]>;
    public valuess: Observable<T[]>;

    constructor() {
        this.valuesStream = new BehaviorSubject<T[]>([]);
    }

    public get values(): Observable<T[]> {
        return this.valuesStream.asObservable();
    }

    // tslint:disable-next-line:typedef
    private setValues(valuesArray: T[]) {
        this.valuesStream.next(valuesArray);
    }

    // tslint:disable-next-line:typedef
    public create(value: T) {
        console.log(value);
        const valuesArray = [...this.valuesStream.value, value];
        this.setValues(valuesArray);
    }

    public read(id: string): Observable<T> {
        return this.valuesStream.pipe(
            map(vals => vals.find(val => val.id === id))
        );
    }

    // tslint:disable-next-line:typedef
    public update(value: T) {
        const valuesArray = [...this.valuesStream.getValue()];
        const index = valuesArray.findIndex(item => item.id === value.id);
        valuesArray.splice(index, 1, value);
        this.setValues(valuesArray);
    }

    // tslint:disable-next-line:typedef
    public delete(id: string) {
        const valuesArray = this.valuesStream.value.filter(val => val.id !== id);
        this.setValues(valuesArray);
    }

}

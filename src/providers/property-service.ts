import { Observable } from 'rxjs';
import { PROPERTIES } from './mock-properties';

export class PropertyService {
    favorites: any[] = [];

    findAll() {
        return Observable.create(observer => {
            observer.next(PROPERTIES);
            observer.complete();
        });
    }

    getFavorites() {
        return Observable.create(observer => {
            observer.next(this.favorites);
            observer.complete();
        });
    }

    favorite(property) {
        return Observable.create(observer => {
            let exists = false;
            for (let i = 0; i < this.favorites.length; i++) {
                if (this.favorites[i].id === property.id) {
                    exists = true;
                    break;
                }
            }
            if (!exists) this.favorites.push(property);
            observer.next();
            observer.complete();
        });
    }

    unfavorite(property) {
        return Observable.create(observer => {
            for (let i = 0; i < this.favorites.length; i++) {
                if (this.favorites[i].id === property.id) {
                    this.favorites.splice(i, 1);
                    break;
                }
            }
            observer.next();
            observer.complete();
        });
    }

    like(property) {
        return Observable.create(observer => {
            PROPERTIES[property.id - 1].likes++;
            observer.next(PROPERTIES[property.id - 1].likes);
            observer.complete();
        });
    }

}

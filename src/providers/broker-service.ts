import { Observable } from 'rxjs';
import { BROKERS } from './mock-brokers';

export class BrokerService {

    findAll() {
        return Observable.create(observer => {
            observer.next(BROKERS);
            observer.complete();
        });
    }

    findById(id) {
        return Observable.create(observer => {
            observer.next(BROKERS[id - 1]);
            observer.complete();
        });
    }

}

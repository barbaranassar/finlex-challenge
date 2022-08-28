import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddAccountComponent } from './add-account.component';


describe('AddAccountComponent', () => {

      beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [AddAccountComponent]
      }));

       it('should be created', () => {
        const service: AddAccountComponent = TestBed.inject(AddAccountComponent);
        expect(service).toBeTruthy();
       })

      it('should create a new account', () => {
          const service: AddAccountComponent = TestBed.inject(AddAccountComponent);
          let result = service.addAccount()
          expect(result).toBe();
        })
});

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ViewAccountComponent } from './view-account.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ViewAccountComponent', () => {
      beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [ViewAccountComponent]
      }));

       it('should be created', () => {
        const service: ViewAccountComponent = TestBed.inject(ViewAccountComponent);
        expect(service).toBeTruthy();
       })
});

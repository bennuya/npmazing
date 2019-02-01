import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageNotFoundComponent } from './package-not-found.component';

describe('PackageNotFoundComponent', () => {
  let component: PackageNotFoundComponent;
  let fixture: ComponentFixture<PackageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

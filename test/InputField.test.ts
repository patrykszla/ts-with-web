// import { InputField } from "../src/InputField";
// import { FieldType } from "../src/EFieldType"

// var testInput = new InputField("testowy","testowy-label", FieldType.Text, ' ');

// describe('testInput', () => {

// } )

/*
@Component({
    template: `<input type="text" [(ngModel)]="user.username"/>`
  })
  class TestComponent {
    user = { username: 'peeskillet' };
  }
  
  describe('component: TestComponent', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule],
        declarations: [ TestComponent ]
      });
    });
  
    it('should be ok', async(() => {
      let fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        let input = fixture.debugElement.query(By.css('input'));
        let el = input.nativeElement;
  
        expect(el.value).toBe('peeskillet');
  
        el.value = 'someValue';
        el.dispatchEvent(new Event('input'));
  
        expect(fixture.componentInstance.user.username).toBe('someValue');
      });
    }));
  });
  */
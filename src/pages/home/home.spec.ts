import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { HomePage } from './home';
import { NavController } from 'ionic-angular';

let comp: HomePage;
let fixture: ComponentFixture<HomePage>;
let de: DebugElement;
let el: HTMLElement;

describe('HomePage Component', () => {

    beforeEach(async(() => {

        TestBed.configureTestingModule({

            declarations: [MyApp, HomePage],

            providers: [
                NavController
            ],

            imports: [
                IonicModule.forRoot(MyApp)
            ]

        }).compileComponents();

    }));

    beforeEach(() => {

        fixture = TestBed.createComponent(HomePage);
        comp = fixture.componentInstance;

    });

    afterEach(() => {
        fixture.destroy();
        comp = null;
        de = null;
        el = null;
    });

    it('is created', () => {

        expect(fixture).toBeTruthy();
        expect(comp).toBeTruthy();

    });

    it('initialises with a value of My Current Data', () => {
        expect(comp['customData']).toEqual('My Current Data');
    });

    it('can set customData to a new value', () => {

        comp.changeData('My New Data');
        fixture.detectChanges();//is used to detect the changes of two-way data binding manually,
        // so whenever we are changing the data to and from the model and view, 
        //then we need to call this method.
        expect(comp['customData']).toEqual('My New Data');

    });

    it('initialize title with Home Page', () => {
        //test initialization of title
        expect(comp['title']).toEqual('Home Page');
    });

    it('test the changing of the title value and its position ', () => {
        de = fixture.debugElement.query(By.css('ion-title'));
        el = de.nativeElement;

        comp.chngTitle('Hello alaa');
        fixture.detectChanges();
        expect(comp['title']).toEqual('Hello alaa');
        expect(el.textContent).toContain('Hello alaa');
    });

    it('Button should be un activate', () => {
        de = fixture.debugElement.query(By.css('button'));
        el = <HTMLInputElement>document.getElementById("access");
        fixture.detectChanges();
        expect(el.attributes['disabled'].value).toEqual("true");
    });


    it('test change button case if name contain value', () => {
        de = fixture.debugElement.query(By.css('button'));
        el = <HTMLInputElement>document.getElementById("access");
        comp.name = '';
        comp.activateButton();
        fixture.detectChanges();
        expect(el.attributes['disabled'].value).toEqual("true");
    });
});
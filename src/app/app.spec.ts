import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

let comp: MyApp;
let fixture: ComponentFixture<MyApp>;

describe('MyApp Root Component', () => {

    beforeEach(async(() => {

        TestBed.configureTestingModule({

            declarations: [MyApp],
           
            providers: [

            ],

            imports: [
               IonicModule.forRoot(MyApp)
            ]

        }).compileComponents();

    }));

    beforeEach(() => {

        fixture = TestBed.createComponent(MyApp);
        comp     = fixture.componentInstance;

    });

    afterEach(() => {
        fixture.destroy();
        comp = null;
    });

    it('is created', () => {

        expect(fixture).toBeTruthy();
        expect(comp).toBeTruthy();

    });
//make sure that the component is initialized 2)
// The ‘rootPage’ is set to ‘HomePage’.
    it('initialises with a root page of HomePage', () => {
        expect(comp['rootPage']).toBe(HomePage);

    });

});
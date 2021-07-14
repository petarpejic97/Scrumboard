import {NgModule, Optional, SkipSelf} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from './layout/layout.module';

@NgModule({
    imports: [RouterModule, BrowserAnimationsModule, LayoutModule],
    exports: [LayoutModule],
    declarations: [],
    providers: [
        // { provide: APP_CONFIG, useValue: AppConfig },
        // { provide: ErrorHandler, useClass: GlobalErrorHandler },
        // { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true },
        // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        // { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
        // JwtHelperService,
    ],
})

export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                `CoreModule has already been loaded. Import Core modules in the AppModule only.`
            );
        }
    }
}

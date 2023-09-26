import {BooleanInput} from '@angular/cdk/coercion';
import {NgClass, NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnDestroy,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {Router} from '@angular/router';
import {CoreUserService} from 'app/core/user/user.service';
import {Subject, takeUntil} from 'rxjs';
import {User} from "../../../../api/defs/User";
import {UserLogoutFormService} from "../../../../api/forms/user/logout/logout.service";
import {UserService} from "../../../../api/controllers/User";
import {AppUtilsModule} from "../../../utils/utils.module";
import {PermissionsPermissionsFormService} from "../../../../api/forms/permissions/permissions/permissions.service";
import {AuthService} from "../../../utils/auth.service";
import {PermissionsService} from "../../../../api/controllers/Permissions";

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: 'user',
    standalone: true,
    imports: [MatButtonModule, MatMenuModule, NgIf, MatIconModule, NgClass, MatDividerModule, AppUtilsModule],
    providers: [CoreUserService, UserLogoutFormService, UserService,
        PermissionsPermissionsFormService, AuthService, PermissionsService]
})
export class UserComponent implements OnInit, OnDestroy {
    /* eslint-disable @typescript-eslint/naming-convention */
    static ngAcceptInputType_showAvatar: BooleanInput;
    /* eslint-enable @typescript-eslint/naming-convention */

    @Input() showAvatar: boolean = true;
    user: User;

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _router: Router,
        private _userService: CoreUserService,
        private _logoutFormService: UserLogoutFormService,
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Subscribe to user changes
        this._userService.user$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((user: User) => {
                this.user = user;

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Update the user status
     *
     * @param status
     */
    updateUserStatus(status: string): void {
        // Return if user is not available
        if (!this.user) {
            return;
        }

        // Update the user
        this._userService.update({
            ...this.user,
            // status,
        }).subscribe();
    }

    /**
     * Sign out
     */
    signOut(): void {
        this._logoutFormService.submit().subscribe(() => {
            sessionStorage.clear();
            localStorage.clear();
            this._router.navigate(['/sign-out']);
        })
    }
}

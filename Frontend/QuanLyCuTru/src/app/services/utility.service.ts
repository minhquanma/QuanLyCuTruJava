import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  private _displayHeader: boolean;
  private _displayFooter: boolean;

  public setDisplayHeader(isShow: boolean) {
    this._displayHeader = isShow;
  }

  public isDisplayHeader() {
    return this._displayHeader;
  }

  public setDisplayFooter(isShow: boolean) {
    this._displayFooter = isShow;
  }

  public isDisplayFooter() {
    return this._displayFooter;
  }
}

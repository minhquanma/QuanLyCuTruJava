import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  private _displayHeader: boolean;
  private _displayFooter: boolean;

  public setDisplayHeader(display) {
    this._displayHeader = display;
  }

  public isDisplayHeader() {
    return this._displayHeader;
  }

  public setDisplayFooter(display) {
    this._displayFooter = display;
  }

  public isDisplayFooter() {
    return this._displayFooter;
  }
}

export default class UserInfo {
  constructor(userNameSelector, userJobSelector) {
    this._userNameSelector = userNameSelector;
    this._userJobSelector = userJobSelector;
    this._userNameContainer = document.querySelector(this._userNameSelector);
    this._userJobContainer = document.querySelector(this._userJobSelector);
  }

  getUserInfo(item) {
    this._userInfo = item;
    return this._userInfo;
  }

  setUserInfo(item) {
    this.getUserInfo(item);
    this._userNameContainer.textContent = this._userInfo.nombre;
    this._userJobContainer.textContent = this._userInfo.ocupación;
  }
}

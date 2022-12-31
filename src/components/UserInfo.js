class UserInfo {
  constructor(userNameSelector, userJobSelector) {
    this._userNameSelector = userNameSelector;
    this._userJobSelector = userJobSelector;
    this._userNameContainer = document.querySelector(this._userNameSelector);
    this._userJobContainer = document.querySelector(this._userJobSelector);
  }

  getUserInfo() {
    return {
      name: this._userNameContainer.textContent,
      job: this.this._userJobContainer.textContent,
    };
  }

  setUserInfo(item) {
    this._userNameContainer.textContent = item.name;

    this._userJobContainer.textContent = item.about;
  }
}

module.exports = UserInfo;

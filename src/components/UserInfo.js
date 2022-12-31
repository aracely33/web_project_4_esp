class UserInfo {
  constructor(userNameSelector, userJobSelector, userAvatarSelector) {
    this._userNameSelector = userNameSelector;
    this._userJobSelector = userJobSelector;
    this._userAvatarSelector = userAvatarSelector;
    this._userNameContainer = document.querySelector(this._userNameSelector);
    this._userJobContainer = document.querySelector(this._userJobSelector);
    this._userAvatarContainer = document.querySelector(
      this._userAvatarSelector
    );
  }

  getUserInfo() {
    return {
      name: this._userNameContainer.textContent,
      job: this._userJobContainer.textContent,
      avatar: this._userAvatarContainer.style.backgroundImage,
    };
  }

  setUserInfo(item) {
    this._userNameContainer.textContent = item.name;
    this._userJobContainer.textContent = item.about;
    this._userAvatarContainer.style.backgroundImage = `url(${item.avatar})`;
  }
}

module.exports = UserInfo;

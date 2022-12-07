/*La clase UserInfo es responsable de 
presentar información sobre el usuario en la página.
 Esta clase debe:
Llevar al constructor un objeto con los selectores de
 dos elementos: uno que contiene el nombre del usuario,
  y otro que contiene el trabajo del usuario.
Almacenar un método público llamado getUserInfo(), 
que devuelve un objeto con información sobre el usuario.
 Este método será útil para casos en los que es necesario
  mostrar los datos del usuario en el formulario abierto.
Almacena un método público llamado setUserInfo(), que toma 
los datos del nuevo usuario y los agrega en la página. */

export default class UserInfo {
  constructor(userNameSelector, userJobSelector) {
    this._userNameSelector = userNameSelector;
    this._userJobSelector = userJobSelector;
  }

  getUserInfo() {
    const userInfo = {};

    userInfo = { userName, userJob };
    return userInfo;
  }

  setUserInfo() {
    this.getUserInfo();
    const userName = document.querySelector(this._userNameSelector).textcontent;
    const userJob = document.querySelector(this._userJobSelector);
  }
}

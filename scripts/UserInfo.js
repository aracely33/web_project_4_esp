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
    this._userNameContainer = document.querySelector(this._userNameSelector);
    this._userJobContainer = document.querySelector(this._userJobSelector);
    this._userNameContainer.textcontent = "";
    this._userJobContainer.textcontent = "";
  }

  getUserInfo(item) {
    this._userInfo = item;
    return this._userInfo;
  }

  setUserInfo(item) {
    this.getUserInfo(item);
    console.log(this._userInfo);

    //console.log(this._userNameContainer.textcontent);
    // console.log(this._userJobContainer.textcontent);
    //this._userNameContainer.textcontent = this._userInfo.nombre;
    //this._userJobContainer.textcontent = this._userInfo.ocupación;
    //userNameContainer.textcontent = this._userInfo.nombre;
    //userJobContainer.textcontent = this._userInfo.ocupación;
  }
}

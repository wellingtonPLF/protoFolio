class Email{
    constructor(name, text) {
        this._name = name;
        this._text = text;
    }
    get name(){
        return this._name
    }
    set name(name){
        this._name = name;
    }
}

export default Email;

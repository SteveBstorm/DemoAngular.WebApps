import { AbstractControl, ValidatorFn } from "@angular/forms";

export function MinLengthValidatorCustom(length : number) : ValidatorFn | null {
    return (control : AbstractControl) => {
        //if(control.touched) {
        let value :string = control.value
        if(value == null) return null
        if(value.length < length) return {myCustomError : "Chaine de caratère trop courte"}
        if(value.length == length) return {myError2 : "Chaine à la bonne taille"}
        //}
        return null
        
    }
}
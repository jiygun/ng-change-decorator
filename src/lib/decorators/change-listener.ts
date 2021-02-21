import { changes } from "../store/store";

export function ChangeListener<T>(): Function {
  return (targetClass: object, propName: string)=> {
    Object.defineProperty(targetClass, propName, {
      configurable:true,
      set(value: T): void {
        if(changes[propName]){
          changes[propName].find(cp=>cp.changeLocation==targetClass.constructor)?.changeListeners.forEach(listener => {
            listener.changeListener[listener.changeListenerFunction].call(this,value);
          });
        }
      }
    });
  };
}

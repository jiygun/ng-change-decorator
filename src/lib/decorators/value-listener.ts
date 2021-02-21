import { ChangeListenerModel } from "../models/change-models";
import { changes } from "../store/store";

export function ValueListener(propName:string,targetClass:object): Function {
  return (currentClass: object, functionName: string)=> {
    const changeListenerModel:ChangeListenerModel<object>={changeListener:currentClass,changeListenerFunction:functionName};
    if(!changes[propName]){
      changes[propName]=[{changeLocation:targetClass,changeListeners:[changeListenerModel]}];
    }
    if(changes[propName] && changes[propName].find(cp=>cp.changeLocation==targetClass)&&!changes[propName].find(cp=>cp.changeLocation==targetClass)?.changeListeners.find(cp=>cp.changeListener==currentClass)){
      const changesIndex:number=changes[propName].findIndex(cp=>cp.changeLocation==targetClass);
      changes[propName][changesIndex]={changeLocation:targetClass,changeListeners:[...changes[propName][changesIndex].changeListeners,changeListenerModel]};
    }
    if(changes[propName]&&!changes[propName].find(cp=>cp.changeLocation==targetClass)){
      changes[propName].push({changeLocation:targetClass,changeListeners:[changeListenerModel]});
    }
  };
}

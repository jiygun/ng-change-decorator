import { DestroyModel } from '../models/destroy-model';
import { ChangeModel } from '../models/change-models';
import { changes } from '../store/store';

export function DestroyChangeListener(destroyModel:DestroyModel): Function {
  return (targetClass: any, functionName: string,descriptor:any)=> {
    descriptor.value = function() {
      if(changes[destroyModel.propName]){
        if(destroyModel.changeListener) {
          if(changes[destroyModel.propName].length==1) delete changes[destroyModel.propName];
          else changes[destroyModel.propName]=changes[destroyModel.propName].filter(cp=>cp.changeLocation!=destroyModel.changeListener);
        }
        if(destroyModel.valueListener) {
          changes[destroyModel.propName].forEach((listeners:ChangeModel<object,object>,index:number)=>{
            changes[destroyModel.propName][index].changeListeners=listeners.changeListeners.filter(changeListenerModel=>changeListenerModel.changeListener.constructor!=destroyModel.valueListener);
          });
        }
      }
    };
  };
}

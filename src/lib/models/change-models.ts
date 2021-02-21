export interface ChangeListenerModel<T>{
  changeListener:T;
  changeListenerFunction:string;
}

export interface ChangeModel<T,K>{
  changeLocation:T;
  changeListeners:ChangeListenerModel<K>[];
}

export interface PropModel<T>{
  [key:string]:T;
}

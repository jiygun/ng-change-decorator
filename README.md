# NgChangeDecorator

# Usage

```hs

@Component({
  ...
})
export class ChangingComponent implements OnDestroy{

  @ChangeListener() value=...; //


  @DestroyChangeListener({propName:'value',changeListener:ChangingComponent}) //this decorator will delete the declared property completely.
  ngOnDestroy(): void {
  }
}



@Component({
  ...
})
export class ListeningComponent implements OnDestroy{

  @DestroyChangeListener({propName:'value',valueListener:ListeningComponent})
  ngOnDestroy(): void {
  }


  @ValueListener('value',ChangingComponent)
  myFunction(value){
    .
  }

}

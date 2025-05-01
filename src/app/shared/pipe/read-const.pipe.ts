import { Pipe, PipeTransform } from '@angular/core';
import { ValidationConstant } from '../../core/constant/Constant';

@Pipe({
  name: 'readConst'
})
export class ReadConstPipe implements PipeTransform {

  transform(keyName: string): any {
    debugger;
    const validationConst =  ValidationConstant as any;
    const keyValue  = validationConst[keyName]
    return keyValue;
  }

}

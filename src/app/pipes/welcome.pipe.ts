import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'welcome'
})
export class WelcomePipe implements PipeTransform {

  transform(value: unknown, lang?:string): any {

    switch (lang) {
      case 'pl':
        return 'dzień dobry ' + value;
      case 'de':
        return 'guten morgen ' + value;
      default:
        return 'welcome' + value
    }

  }

}

/* const p = new WelcomePipe()
const result = p.transform('Robert', 'pl')
console.log(result);
document.body.querySelector('.x')?.innerHTML = result;
 */

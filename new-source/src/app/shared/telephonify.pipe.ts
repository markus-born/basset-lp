// Exact copy of contact.awesome.pipe
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'telephonify' })
/** Precede the input string with the word "Awesome " */
export class TelephonifyPipe implements PipeTransform {
  transform(phoneNumber: string) {
    return phoneNumber ? 'tel:' + phoneNumber.replace(/\s/g, '') : '';
  }
}

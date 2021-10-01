import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertAge'
})

export class AgePipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        const dob = new Date(value)
        const now = new Date();

        return now.getFullYear() - dob.getFullYear()
    }
}
import { FormControl } from '@angular/forms';

export const startswith123 = (
  control: FormControl
): { [s: string]: boolean } | boolean => {
  if (!control.value.includes('John')) {
    return { invalidName: true };
  }
  return false;
};

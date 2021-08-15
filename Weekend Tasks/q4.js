var a = [1, 9, 1, 8, 6, 3]

i=0, j=0, min=0, temp=0;
for (i = 0; i < a.length - 1; i++) {
   min = i;
   for (j = i + 1; j < a.length; j++)
   if (a[j] < a[min])
   min = j;
   temp = a[i];
   a[i] = a[min];
   a[min] = temp;
}

console.log(a.reverse())

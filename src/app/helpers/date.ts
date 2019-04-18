
 export function formatDate(d: Date): string{
    let month = (d.getMonth() + 1).toString().padStart(2, '0');
    let day = d.getDate().toString().padStart(2, '0');
      return `${d.getFullYear()}-${month}-${day}` 
  }
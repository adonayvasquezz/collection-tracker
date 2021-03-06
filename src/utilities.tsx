
// Get current date in YYYY-MM-DD format
export const currentDate = () => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth()+1; //Months start with 0
  let yyyy = today.getFullYear();
  let d:string ='', m:string ='', actual:string = '';

  d = dd<10 ? `0${dd}` : `${dd}`;
  m = mm<10 ? `0${mm}` : `${mm}`;

  actual = `${yyyy}-${m}-${d}`;

  return actual;
}
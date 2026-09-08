export function estimate(hours:number,share:number,cost:number){
 const h=Number.isFinite(hours)?Math.min(80,Math.max(0,hours)):0;
 const s=Number.isFinite(share)?Math.min(70,Math.max(0,share)):0;
 const c=Number.isFinite(cost)?Math.min(150,Math.max(0,cost)):0;
 const monthlyHours=h*4*s/100;
 return {monthlyHours,capacityValue:monthlyHours*c};
}

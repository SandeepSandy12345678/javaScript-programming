let day="mon";
switch(day){
    case 'Mon':console.log("7am");
    break;
    case 'tue':console.log("7am");
    break;
    case 'wed':console.log("7am");
    break;
    case 'thu':console.log("7am");
    break;
    case 'fri':console.log("7am");
    break;
    case 'sat':console.log("7am");
    break;
    case 'sun':console.log("7am");
    break;
    default:console.log("not a day");
}
//not a day
//because it will search based on characters case also
//day=mon and we are switch giving Mon caps M so it gives
//default not a day
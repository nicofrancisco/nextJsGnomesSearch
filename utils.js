export const itemsByPage = 15;
export const gnomesAPI = "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json";
export const genderGuessingAPI = "https://api.genderize.io/?";

// need to pay to use the genderize.io service for bulk process
/*export function getCurrentPageGenderFormat (gnomes, currentPage){

  let updatedPage = currentPage;

  const gnomeNames = gnomes.map(gnome => gnome.name)
  const pageGnomes = gnomeNames.slice(
    itemsByPage * updatedPage,
    itemsByPage + updatedPage * itemsByPage
  )

  pageGnomes.map(gnome => (
    gnome => gnome.name
  ))

  const getFirstName = arr =>{
    var arrCroped = [];
      for(var a=0; a<arr.length; a++){

        var corte = arr[a].indexOf(" ");
        arrCroped[a] = arr[a].substr(0, corte);
      }

      function removeDuplicates(array) {
        return array.filter((a, b) => array.indexOf(a) === b)
      };
      return removeDuplicates(arrCroped);
  }

  const justRenderedPageNames = getFirstName(pageGnomes);

  const parseToService = arrToFormat =>{
    var arrayFormated = [];

      for(var b=0; b<arrToFormat.length; b++){
        arrayFormated[b] = "name[]="+arrToFormat[b];
      }

      return arrayFormated;

  }

  const format = parseToService(justRenderedPageNames).toString().replace(/,/g, "&");

  return format;
}*/

export function getFirstNames (gnomes, currentPage){

  let updatedPage = currentPage;

  const gnomeNames = gnomes.map(gnome => gnome.name)
  const pageGnomes = gnomeNames.slice(
    itemsByPage * updatedPage,
    itemsByPage + updatedPage * itemsByPage
  )

  pageGnomes.map(gnome => (
    gnome => gnome.name
  ))

  const getFirstName = arr =>{
    var arrCroped = [];
      for(var a=0; a<arr.length; a++){

        var cut = arr[a].indexOf(" ");
        arrCroped[a] = arr[a].substr(0, cut);
      }
      function removeDuplicates(array) {
        return array.filter((a, b) => array.indexOf(a) === b)
      };
      return removeDuplicates(arrCroped);
  }

  const onlyNames = getFirstName(pageGnomes);
  return onlyNames;
}


export function convertColors(color) {

  if(color !== undefined){

    const colorName = color.toLowerCase();
    var hex = "";
    switch (colorName) {
      case "red":
        hex = "#f66969";
        break;
      case "pink":
        hex = "#f6a2c0";
        break;
      case "green":
        hex = "#80e8d4";
        break;
      case "black":
        hex = "#4d5253";
        break;
      case "gray":
        hex = "#8d9395";
        break;
      default:
        hex = "#000";
        break;
    }
    return hex;

  }else{
    return "#8d9395";
  }
}

export function filterGnomesBy(array, orderByFilter) {
  if (!Array.isArray(array)) {
    console.log("es nulo")
    return null;
  }
  console.log("aca")
  console.log(orderByFilter)
  if (orderByFilter.toLowerCase() === "Oldest".toLowerCase()) {
    return array.sort((a, b) => b.age - a.age);
  }
  else if (orderByFilter.toLowerCase() === "Youngest".toLowerCase()) {
    return array.sort((a, b) => a.age - b.age);
  }
  else if (orderByFilter.toLowerCase() === "Heaviest".toLowerCase()) {
    return array.sort((a, b) => b.weight - a.weight);
  }
  else if (orderByFilter.toLowerCase() === "lightest".toLowerCase()) {
    return array.sort((a, b) => a.weight - b.weight);
  }
  else if (orderByFilter.toLowerCase() === "Most Friendly".toLowerCase()) {
    return array.sort((a, b) => b.friends.length - a.friends.length);
  }
  else if (orderByFilter.toLowerCase() === "Less Friendly".toLowerCase()) {
    return array.sort((a, b) => a.friends.length - b.friends.length);
  }
  console.log(array)
  return array;
}

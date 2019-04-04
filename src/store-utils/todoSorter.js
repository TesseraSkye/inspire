

//CURRENTLY BROKEN


export default {
  actions: {
    //info is an array containing two objects: the todo list, and the sort method
    //the sort method is an object that contains a method shortname (under key "method") for premades, and an optional second arg for callback along with method "custom"
    newTodoSort(_, info) {
      let inputData = info[0]
      let sortMethod = info[1]
      let sortedData = {}
      console.log(sortMethod.method)
      switch (sortMethod.method) {
        case "all":
          sortedData = inputData;
          break;
        case "test":
          sortedData = "sucess";
        default:
          sortedData = "fail";
      }
      return sortedData;
    }
  }
}
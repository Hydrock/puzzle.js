
module.exports = (data) => {

  let formattedData = {
      name: data.name,
      type: data.type,
      children: checkChildren(data.children)
  }

  return formattedData;
}

function checkChildren (data) {
  if (data.length > 0) {

    return data = data.map((item, id) => {

      if (item.children && item.children.length > 0) {

        let checkFile = item.children.some((item) => { return item.type == 'file'});

        if (checkFile) {
          return {
            name: item.name,
            path: item.path,
            type: 'component'
          }
        } else {
          return { 
            name: item.name,
            type: item.type,
            path: item.path,
            children: checkChildren(item.children)
          }
        }

      } else {
        return item = {
          type: 'nothing',
          path: item.path,
        };
      }
      
    })

  } else {
    return []
  }
}
console.log('Script bundle connect!')

setTimeout(() => {
  $.ajax({
    type: 'POST',
    url: '/',
    data: { action: 'test' },
    success: (data) => {
      console.log(data);
    }
  });
}, 1000)

//$.post( "./", { name: "John", time: "2pm" } );

console.log('End script!');

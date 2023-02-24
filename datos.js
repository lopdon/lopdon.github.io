fetch('https://randomuser.me/api')
  .then(res => res.json())
  .then(res => {

        document.getElementById("name").innerHTML = res.results[0].name.last +", "+ res.results[0].name.first;
        document.getElementById("phone").innerHTML = res.results[0].phone;
        document.getElementById("email").innerHTML = res.results[0].email;
        document.getElementById("address").innerHTML = res.results[0].location.street.number +" "+res.results[0].location.street.name;
        document.getElementById("state").innerHTML = res.results[0].location.state;
        document.getElementById("image").src = res.results[0].picture.large
        console.log(res)

    }
  )
function buy() {

    const product = document.getElementById("product").value;

    const amount = document.getElementById("amount").value;

    document.getElementById("result").innerText = `Je hebt €${amount} geïnvesteerd in ${product}.`;

  }



  function sell() {

    const product = document.getElementById("product").value;

    const amount = document.getElementById("amount").value;

    document.getElementById("result").innerText = `Je hebt €${amount} verkocht van ${product}.`;

  }
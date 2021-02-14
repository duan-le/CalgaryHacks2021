setInterval(() => {
  let current = new Date();
  if (current.toLocaleTimeString() == "12:00:00 p.m.") {
    alert("Hey it's 12:00pm, I think you should browse our restaurant options to order some food !");
  } else if (current.toLocaleTimeString() == "05:00:00 p.m.") {
    alert("Hey it's 5:00pm, I think you should browse our restaurant options to order some food !");
  }
}, 1000);
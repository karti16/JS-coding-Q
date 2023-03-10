function pubsub() {
  const subscribers = {};

  function publish(eventName, data) {
    if (!Array.isArray(subscribers[eventName])) {
      return;
    }
    subscribers[eventName].forEach((callback) => {
      callback(data);
    });
  }

  function subscribe(eventName, callback) {
    if (!Array.isArray(subscribers[eventName])) {
      subscribers[eventName] = [];
    }
    subscribers[eventName].push(callback);
  }
  return { publish, subscribe };
}

function showMeTheMoney(money) {
  console.log(money);
}
function showMeTheMoney2(money) {
  console.log(money, '...');
}

const ps = pubsub();
ps.subscribe('show_money', showMeTheMoney);
ps.subscribe('show_money', showMeTheMoney2);

ps.publish('show_money', 13000);

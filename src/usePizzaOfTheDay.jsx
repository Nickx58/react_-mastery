import { useState, useEffect } from "react";

const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);

  useEffect(() => {
    async function fetchPizzaOfTheDay() {
      const resp = await fetch("/api/pizza-of-the-day");
      const jsonResp = await resp.json();
      setPizzaOfTheDay(jsonResp);
    }
    fetchPizzaOfTheDay();
  }, []);

  return pizzaOfTheDay;
};

export default usePizzaOfTheDay;

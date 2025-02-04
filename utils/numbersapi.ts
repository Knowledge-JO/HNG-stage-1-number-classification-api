import axios from "axios";

async function getNumberFunFact(num: number): Promise<string> {
  try {
    const resp = await axios.get(`http://numbersapi.com/${num}/math`);

    return resp.data;
  } catch (error) {
    return "Unable to fetch fun fact";
  }
}

export { getNumberFunFact };

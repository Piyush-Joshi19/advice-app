import axios from "axios";
import { getAdvices, setIsLoading } from "./reducer";

export const getAdvice = () => async(dispatch) => {
    try {
        dispatch(setIsLoading(true))
        const response = await axios.get("https://api.adviceslip.com/advice");
        dispatch(getAdvices(response.data))
        dispatch(setIsLoading(false));
        } catch (error) {
        console.log(error);
        dispatch(setIsLoading(false));
    }
}
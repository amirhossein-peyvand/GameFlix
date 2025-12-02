import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "2be91988883842e19375b731d226c398"
    }
})
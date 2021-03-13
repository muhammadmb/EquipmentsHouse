class Helper {
    GetColorFromLocalStorage() {
        return localStorage.getItem("color");
    }
}

export default new Helper();
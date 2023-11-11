export const UtError = {
    isNetworkError(error) {
        return error ? error.isAxiosError : false;
    }
}

import { Api } from "./api";



export async function GetAllUserDepositAsync() {
    try {
        const response = await Api.get(`/deposit`);
        console.log(response.data);
        return response.data;

    } catch (error) {
        console.error(error.message);
    }
}

export async function GetAllUserTransactionAsync() {
    try {
        const response = await Api.get(`/User/transaction`); // skal ændres  med (User/transaction)
        console.log(response.data);
        return response.data;

    } catch (error) {
        console.error(error.message);
        return false;
    }

}


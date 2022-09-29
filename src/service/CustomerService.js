export default class CustomerService {

    async getCustomersAll() {

        const response = await fetch("http://localhost/customer/api/1/1/999999999");
        const data = await response.json();
        this.data = data;        

        return this.data;
    }

    async getCustomersIsValidEmail() {

        const response = await fetch("http://localhost/customer/api/5/1/999999999");
        const data = await response.json();
        this.data = data;        

        return this.data;
    }

    async getCustomersNotIsValidEmail() {

        const response = await fetch("http://localhost/customer/api/4/1/999999999");
        const data = await response.json();
        this.data = data;        

        return this.data;
    }

    async getCustomersTotal() {

        const response = await fetch("http://localhost/customer/api/8/1/999999999");
        const data = await response.json();
        this.data = data;        

        return this.data;
    }


    async getCustomersGender() {

        const response = await fetch("http://localhost/customer/api/9/1/999999999");
        const data = await response.json();
        this.data = data;        

        return this.data;
    }


    async getCustomersIsLastName() {

        const response = await fetch("http://localhost/customer/api/3/1/999999999");
        const data = await response.json();
        this.data = data;        

        return this.data;
    }
    
}
  
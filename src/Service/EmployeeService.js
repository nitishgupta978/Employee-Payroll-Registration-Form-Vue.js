import axios from 'axios'

 const EMPLOYEE_BASED_API_URL=`http://localhost:8096/employeepayrollservice`;

class EmployeeService{
    getAllEmployee(){
        return axios.get(`${EMPLOYEE_BASED_API_URL}/get`);  //or
            // return axios.get('${EMPLOYEE_BASED_API}/get')
    }
    addEmployees(data){
        return axios.post(`${EMPLOYEE_BASED_API_URL}/create`,data);
    }
    deleteEmployee(employee_id){
        return axios.delete(`${EMPLOYEE_BASED_API_URL}/delete/${employee_id}`);
    }
    getEmployeeById(employee_id){
        return axios.get(`${EMPLOYEE_BASED_API_URL}/get/${employee_id}`);
    }
    updateEmployee(employee_id,data){
        return axios.put(`${EMPLOYEE_BASED_API_URL}/update/${employee_id}`,data);
}
}
export default new EmployeeService();
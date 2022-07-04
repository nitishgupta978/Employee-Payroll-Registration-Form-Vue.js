import axios from 'axios'

 const EMPLOYEE_BASED_API_URL=`http://localhost:8094/employeepayrollservice`;

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
//     updateEmployee(employee_id){
//         return axios.put(`${EMPLOYEE_BASED_API_URL}/update/${employee_id}`);
// }
}
export default new EmployeeService();
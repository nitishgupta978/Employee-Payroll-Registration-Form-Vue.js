import axios from 'axios'

 const EMPLOYEE_BASED_API_URL=`http://localhost:8094/employeepayrollservice`;

class EmployeeService{
    getAllEmployee(){
        return axios.get(`${EMPLOYEE_BASED_API_URL}/get`)  //or
            // return axios.get('${EMPLOYEE_BASED_API}/get')
    }
    addEmployees(data){
        return axios.post(`${EMPLOYEE_BASED_API_URL}/create`)
    }
    deleteEmployee(employeeId){
        return axios.delete(`${EMPLOYEE_BASED_API_URL}/delete/$(employeeId)`)
    }
    updateEmployee(employeeId){
        return axios.delete(`${EMPLOYEE_BASED_API_URL}/update/$(employeeId)`)
}
}
export default new EmployeeService();